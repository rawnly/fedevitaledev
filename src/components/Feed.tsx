import React, { FC, PropsWithChildren } from "react";
import * as O from "fp-ts/Option";
import { BlogPost, Project } from "@/lib/blog-utils";
import FeedItem from "./FeedItem";
import { RequireExactlyOne } from "type-fest";

interface IFeedProps {
  posts?: O.Option<BlogPost>[];
  projects?: O.Option<Project>[];
}

const Feed: FC<
  PropsWithChildren<RequireExactlyOne<IFeedProps, "posts" | "projects">>
> = ({ posts, projects }) => (
  <ul className="flex flex-col gap-4">
    {(posts || projects).map((item, idx) => {
      if (O.isNone(item)) return null;
      const { value: post } = item;

      return (
        <FeedItem
          slug={post.slug}
          url={post.url}
          title={post.title}
          description={post.description}
          date={new Date(post.date)}
          animate
          index={idx}
        />
      );
    })}
  </ul>
);

Feed.displayName = "Feed";

export default Feed;
