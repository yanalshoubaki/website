"use client";

import React, { useState, useEffect } from "react";
import SunIcon from "@images/icons/sun.svg";
import MoonIcon from "@images/icons/moon.svg";
import SystemIcon from "@images/icons/laptop.svg";
import cx from "clsx";

const DarkSwitch = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("");
  const handleTheme = (theme: string) => {
    setOpen(false);
    localStorage.setItem("theme", theme);
    updateTheme();
  };

  const updateTheme = () => {
    if (!("theme" in localStorage)) {
      localStorage.theme = "system";
      setTheme("system");
    }
    switch (localStorage.theme) {
      case "system":
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        document.documentElement.setAttribute("color-theme", "system");
        setTheme("system");
        break;
      case "dark":
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("color-theme", "dark");
        setTheme("dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("color-theme", "light");
        setTheme("light");
        break;
    }
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (localStorage.theme === "system") {
          if (e.matches) {
            setTheme("system");
            document.documentElement.classList.add("dark");
          } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
          }
        }
      });
    updateTheme();
  }, []);

  return (
    <div className="absolute z-10 flex justify-center top-2 right-2">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 transition rounded-full"
        >
          {theme === "system" ? (
            <SystemIcon className="fill-primary-main  dark:fill-secondary-main" />
          ) : theme === "dark" ? (
            <MoonIcon className="fill-primary-main  dark:fill-secondary-main" />
          ) : (
            <SunIcon className="fill-primary-main  dark:fill-secondary-main" />
          )}
        </button>
        <div
          className={cx(
            "absolute z-50 w-32 origin-top-right right-4",
            open ? "block" : "hidden"
          )}
        >
          <div className="w-full px-2 pt-2 pb-2 bg-white dark:bg-primary-light rounded-md shadow-lg">
            <div className="flex flex-col w-full">
              <li
                onClick={() => handleTheme("light")}
                className={
                  "flex items-center px-2 py-1 cursor-pointer  space-x-2"
                }
              >
                <div>
                  <SunIcon className="fill-primary-main dark:fill-secondary-main" />
                </div>
                <span className="text-primary-main dark:text-secondary-main">
                  Light
                </span>
              </li>
              <li
                onClick={() => handleTheme("dark")}
                className={
                  "flex items-center px-2 py-1 cursor-pointer  space-x-2"
                }
              >
                <div>
                  <MoonIcon className="fill-primary-main dark:fill-secondary-main" />
                </div>
                <span className="text-primary-main dark:text-secondary-main">
                  Dark
                </span>
              </li>
              <li
                onClick={() => handleTheme("system")}
                className={
                  "flex items-center px-2 py-1 cursor-pointer  space-x-2"
                }
              >
                <div>
                  <SystemIcon className="fill-primary-main  dark:fill-secondary-main" />
                </div>
                <span className="text-primary-main dark:text-secondary-main">
                  System
                </span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkSwitch;
