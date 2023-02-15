import { twMerge } from "tailwind-merge";
import clsx, { ClassArray } from "clsx";

export const cn = (...classnames: ClassArray) => twMerge(clsx(...classnames));
