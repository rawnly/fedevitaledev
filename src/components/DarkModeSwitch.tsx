"use client";

import React, { FC, PropsWithChildren } from "react";

import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
  SelectSeparator,
} from "@/ui/select";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";

interface IDarkModeSwitchProps {}

const DarkModeSwitch: FC<PropsWithChildren<IDarkModeSwitchProps>> = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Select defaultValue={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="System" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="dark">
          <div className="flex items-center gap-4">
            <Moon /> Dark
          </div>
        </SelectItem>
        <SelectItem value="light">
          <div className="flex items-center gap-4">
            <Sun /> Light
          </div>
        </SelectItem>
        <SelectSeparator />
        <SelectItem value="system">
          <div className="flex items-center gap-4">
            <Monitor /> System
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

DarkModeSwitch.displayName = "DarkModeSwitch";

export default DarkModeSwitch;
