"use client";

import React, { FC, PropsWithChildren, Suspense } from "react";
import DarkModeSwitch from "./DarkModeSwitch";

interface IFooterProps {}

const Footer: FC<PropsWithChildren<IFooterProps>> = () => {
  return (
    <div className="inset-x-0 rx-bg-base rx-border-neutral-6 border-t w-full p-8 flex items-center justify-center">
      <Suspense fallback={"..."}>
        <DarkModeSwitch />
      </Suspense>
    </div>
  );
};

Footer.displayName = "Footer";

export default Footer;
