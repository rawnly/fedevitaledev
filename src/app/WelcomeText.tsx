"use client";

import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

interface IWelcomeTextProps {}

const WelcomeText: FC<PropsWithChildren<IWelcomeTextProps>> = (props) => {
  // Do your stuff here,

  return (
    <motion.h1
      initial={{ opacity: 0.25 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className="text-3xl text-center sm:text-left sm:text-6xl w-[80vw] max-w-[800px] font-bold absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
    >
      <Balancer>
        <p>Hi there 👋</p>
        <p>I'm Federico </p>
        <p>
          <a
            href="https://github.com/rawnly"
            className="font-mono rx-text-primary-10 underline font-mono hover:opacity-75 mx-0.5"
          >
            Software Engineer
          </a>
        </p>
        <p>based in Rome</p>
      </Balancer>
    </motion.h1>
  );
};

WelcomeText.displayName = "WelcomeText";

export default WelcomeText;
