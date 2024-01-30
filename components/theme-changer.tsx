"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }


  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <Button onClick={changeTheme} className="px-2 bg-transparent py-0 ">
      {theme === "light" ? <MdOutlineWbSunny className="h-6 w-6"/> : <FiMoon className="h-6 w-6 text-white"/>}
    </Button>
  );
}

export default ThemeChanger;
