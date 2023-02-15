"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";
import Link from "next/link";

const Icon = ({
  title,
  href,
  icon,
}: {
  title?: string;
  href: string;
  icon: IconProp;
}) => (
  <Tooltip delayDuration={250}>
    <TooltipTrigger asChild>
      <Link
        href={href}
        target="_blank"
        className="h-6 transition-colors animate-in fade-in hover:rx-text-neutral-12"
      >
        <FontAwesomeIcon className="h-6" icon={icon} />
        <span className="sr-only">{title}</span>
      </Link>
    </TooltipTrigger>
    <TooltipContent side="left" sideOffset={16}>
      {title}
    </TooltipContent>
  </Tooltip>
);

export default Icon;
