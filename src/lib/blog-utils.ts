import path from "path";
import fs from "fs/promises";

import * as TE from "fp-ts/TaskEither";
import * as O from "fp-ts/Option";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { flow, pipe } from "fp-ts/function";
import matter from "gray-matter";
import { z } from "zod";
import * as D from "fp-ts/Date";
import { contramap } from "fp-ts/lib/Ord";

const CONTENT_FOLDER = path.join(process.cwd(), "content");
const BLOG_FOLDER = path.join(CONTENT_FOLDER, "blog");
const PROJECTS_FOLDER = path.join(CONTENT_FOLDER, "projects");
const FILE_EXTENSIONS = /\.mdx?$/;

const getFileMetadata =
  <T>(folder: string, parser: z.ZodSchema<T>) =>
  (filename: string) => {
    return pipe(
      TE.tryCatch(
        () => fs.readFile(path.join(folder, filename), "utf-8"),
        E.toError
      ),
      TE.map(
        flow(
          matter,
          ({ data }) =>
            parser.safeParse({
              ...data,
              slug: filename.replace(FILE_EXTENSIONS, ""),
            }),
          (item) => (item.success ? O.some(item.data) : O.none)
        )
      )
    );
  };

interface ItemWithDate {
  date: Date;
}

const byDate = <T extends ItemWithDate>() =>
  pipe(
    D.Ord,
    contramap((item: O.Option<T>) =>
      item._tag === "Some" ? item.value.date : new Date(-1)
    )
  );

function readDir<T extends ItemWithDate>(
  folderPath: string,
  schema: z.ZodSchema<T>
) {
  return pipe(
    TE.tryCatch(() => fs.readdir(folderPath), E.toError),
    TE.map(A.filter((file) => FILE_EXTENSIONS.test(file))),
    TE.chain(
      flow(A.map(getFileMetadata(folderPath, schema)), TE.sequenceSeqArray)
    ),
    TE.map((data) =>
      (data as O.Option<T>[]).sort((a, b) => byDate<T>().compare(b, a))
    ) // type cast and sort
  );
}

export const Project = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.date(),
  description: z.string(),
  featured: z.boolean().default(false).optional(),
  url: z.string().url(),
});

export type Project = z.infer<typeof Project>;

export const BlogPost = z.object({
  slug: z.string(),
  title: z.string(),
  date: z.date(),
  description: z.string(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  external: z.boolean().default(false),
  url: z.string().url().optional(),
});

export type BlogPost = z.infer<typeof BlogPost>;

export const getFiles = pipe(
  TE.Do,
  TE.apS(
    "posts",
    pipe(
      readDir(BLOG_FOLDER, BlogPost),
      TE.map(
        A.filter(
          flow(
            // remove drafts
            O.map((item) => !item.draft),
            O.getOrElse(() => false)
          )
        )
      )
    )
  ),
  TE.apSW("projects", readDir(PROJECTS_FOLDER, Project))
);
