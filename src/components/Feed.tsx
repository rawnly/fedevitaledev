import React, { FC, PropsWithChildren } from "react";
import FeedItem from "./FeedItem";
import { RequireExactlyOne } from "type-fest";
import { Post, Project } from "contentlayer/generated";

interface IFeedProps {
  posts?: Post[];
  projects?: Project[];
}

const Feed: FC<
  PropsWithChildren<RequireExactlyOne<IFeedProps, "posts" | "projects">>
> = ({ posts, projects }) => (
  <ul className="flex flex-col gap-4">
    {(posts ?? projects).map((item, idx) => (
      <FeedItem
        animate
        index={idx}
        key={item.slug}
        slug={item.slug}
        url={item.url}
        title={item.title}
        description={item.description}
        date={new Date(item.date).getTime()}
      />
    ))}
  </ul>
);

Feed.displayName = "Feed";

export default Feed;
