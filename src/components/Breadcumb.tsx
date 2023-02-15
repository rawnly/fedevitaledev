import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface IBreadcumbProps {
  items: { name: string; href?: string }[];
}

const Breadcumb: FC<PropsWithChildren<IBreadcumbProps>> = (props) => {
  return (
    <div className="font-mono flex items-center gap-1">
      /
      {props.items.map(({ name, href = "#" }, i) => (
        <>
          <Link
            href={href}
            className={cn({
              "hover:underline hover:opacity-100 opacity-80": href !== "#",
              "font-bold": href === "#",
            })}
          >
            {name}
          </Link>{" "}
          {i !== props.items.length - 1 && "/ "}
        </>
      ))}
    </div>
  );
};

Breadcumb.displayName = "Breadcumb";

export default Breadcumb;
