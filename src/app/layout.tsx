import "@/styles/tailwind.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import DynamicIsland from "@/components/DynamicIsland";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="flex flex-col rx-bg-neutral-1 rx-text-neutral-11">
        <Providers>
          <div className="antialiased z-50 fixed flex items-center justify-center top-8 inset-x-0">
            <DynamicIsland />
          </div>
          <main className="w-screen pt-28 min-h-screen relative">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
