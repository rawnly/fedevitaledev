"use client";

import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/ui/tooltip";

export default function Providers({ children }: React.PropsWithChildren<any>) {
  return (
    <ThemeProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
