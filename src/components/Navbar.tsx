"use client";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { RxMoon, RxSun } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [position, setPosition] = useState<string>("dark");
  return (
    <div className="flex justify-between items-center p-2 lg:mx-10">
      <div>Logo</div>
      <div className="flex items-center">
        {/* <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        /> */}
        <Link href="/">
          <div className="p-2 hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-full ml-2 transition duration-300 ease-in-out">
            <FaXTwitter size={20} />
          </div>
        </Link>
        <Link href="/">
          <div className="p-2 dark:hover:bg-neutral-800 hover:bg-neutral-300 rounded-full transition duration-300 ease-in-out">
            <FaInstagram size={20} />
          </div>
        </Link>
        <Link href="/">
          <div className="p-2 dark:hover:bg-neutral-800 rounded-full transition duration-300 ease-in-out hover:bg-neutral-300">
            <FaLinkedin size={20} />
          </div>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-none p-0">
              {resolvedTheme === "light" ? (
                <div className="p-2 dark:hover:bg-neutral-800 rounded-full transition duration-300 ease-in-out hover:bg-neutral-300">
                  <RxSun size={20} />
                </div>
              ) : (
                <div className="p-2 dark:hover:bg-neutral-800 rounded-full transition duration-300 ease-in-out hover:bg-neutral-300">
                  <RxMoon size={20} />
                </div>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 cursor-pointer dark:bg-neutral-900 border-[1px] rounded-lg bg-white">
            <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem
                onClick={() => setTheme("light")}
                value="light"
                className="cursor-pointer"
              >
                Light
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                onClick={() => setTheme("dark")}
                value="dark"
                className="cursor-pointer"
              >
                Dark
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                onClick={() => setTheme("system")}
                value="system"
                className="cursor-pointer"
              >
                System
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
