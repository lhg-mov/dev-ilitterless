// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { Suspense, useEffect, useState } from "react";

import { Switch, VisuallyHidden, useSwitch } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { MoonIcon } from "@/constant/MoonIcon";
import { SunIcon } from "@/constant/SunIcon";
import Loading from "../Loading";

export function ThemeSwitcher(props: any) {
  const [mounted, setMounted] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch(props);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      setIsSwitchOn(storedTheme === "dark");
    } else {
      // Jika tidak ada tema yang disimpan di local storage, kita gunakan tema default
      setTheme("light");
      setIsSwitchOn(false);
    }
    setMounted(true);
  }, [setTheme]);

  const handleSwitchClick = () => {
    setIsSwitchOn((prevSwitchState) => {
      const newSwitchState = !prevSwitchState;
      const themeToSet = newSwitchState ? "dark" : "light";
      setTheme(themeToSet);
      localStorage.setItem("theme", themeToSet);
      return newSwitchState;
    });
  };

  if (!mounted) return null;

  return (
    <Suspense fallback={<Loading size="w-2 h-1 rounded-full" />}>
      <div className="theme__switcher">
        <Switch color="primary" size="sm" onClick={handleSwitchClick} defaultSelected={theme === "dark"} startContent={<SunIcon />} endContent={<MoonIcon />}></Switch>
      </div>
    </Suspense>
  );
}
