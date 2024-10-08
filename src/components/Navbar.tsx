"use client";
import Link from "next/link";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
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
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex justify-between items-center p-2">
      <div>Logo</div>
      <div className="flex items-center">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
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
          <DropdownMenuContent className="w-40">
            <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem
                onClick={() => setTheme("light")}
                value="light"
              >
                Light
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                onClick={() => setTheme("dark")}
                value="dark"
              >
                Dark
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                onClick={() => setTheme("system")}
                value="system"
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
