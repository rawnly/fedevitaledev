"use client";

import React, { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IDynamicIslandProps {}

const LinkElement: React.FC<
  React.PropsWithChildren<React.ComponentPropsWithoutRef<typeof Link>>
> = ({ children, ...props }) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        "px-4 transition-colors text-center py-2 context-menu-item-base",
        {
          "rx-text-neutral-12 font-medium": pathname === props.href,
        },
        props.className
      )}
    >
      <li>{children}</li>
    </Link>
  );
};

const DynamicIsland: FC<PropsWithChildren<IDynamicIslandProps>> = () => {
  return (
    <ul
      className={cn(
        "floating-card",
        "rounded-full",
        "flex items-center justify-center",
        "space-x-4 overflow-hidden"
      )}
    >
      <LinkElement href="/">Home</LinkElement>
      <LinkElement href="/blog">Articles</LinkElement>
      <LinkElement href="/projects">Projects</LinkElement>
    </ul>
  );
};

DynamicIsland.displayName = "DynamicIsland";

export default DynamicIsland;
