"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import format from "date-fns/format";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface IFeedItemProps {
  title: string;
  description: string;
  date: number;
  slug: string;
  url?: string;

  index?: number;
  animate?: boolean;
}

const AnimatedLink = motion(Link);

const FeedItem: FC<PropsWithChildren<IFeedItemProps>> = ({
  animate = false,
  index = 0,
  ...props
}) => (
  <AnimatedLink
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    href={props.url ?? `/blog/${props.slug}`}
    target={props.url ? "_blank" : undefined}
    className={cn(
      "group border border-transparent transition-colors duration-150 hover:rx-border-neutral-3 hover:rx-bg-neutral-2 overflow-hidden rounded-md"
    )}
  >
    <li
      key={props.slug}
      className="flex justify-between items-center px-4 py-2"
    >
      <div>
        <div className="flex items-center gap-2">
          <h3 className="rx-text-neutral-12 group-hover:underline">
            {props.title}
          </h3>
          <ExternalLink className="h-4" />
        </div>
        <p className="rx-text-neutral-11 font-medium max-w-xl">
          {props.description}
        </p>
      </div>

      <span className="text-sm rx-text-neutral-11 sm:block hidden opacity-50">
        {format(props.date, "MMM yyyy")}
      </span>
    </li>
  </AnimatedLink>
);

FeedItem.displayName = "FeedItem";

export default FeedItem;
