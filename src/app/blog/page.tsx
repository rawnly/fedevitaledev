import { allPosts, Post } from "contentlayer/generated";
import Feed from "@/components/Feed";
import { pipe } from "fp-ts/lib/function";
import * as A from "fp-ts/Array";
import { sortByDate } from "@/lib/date";

export default async function Page() {
  return (
    <div className="max-w-4xl p-8 mx-auto">
      <Feed
        posts={pipe(
          allPosts.sort(sortByDate),
          A.filter((item) => !item.draft)
        )}
      />
    </div>
  );
}
