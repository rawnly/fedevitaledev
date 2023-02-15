"use client";

import { Button } from "@/ui/Button";
import Link from "next/link";

export default function ErrorPage(props: any) {
  console.error(props);

  return (
    <div className="w-screen flex-col gap-4 h-screen rx-bg-base dark:text-white flex items-center justify-center">
      <h1 className="rx-text-neutral-12">
        Whoops! Something wrong is happened.
      </h1>
      <p className="mb-5 rx-text-neutral-11">Could not load projects</p>

      <Link href="/">
        <Button>Back Home</Button>
      </Link>
    </div>
  );
}
