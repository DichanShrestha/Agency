"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaBlog, FaPersonArrowUpFromLine, FaQuestion } from "react-icons/fa6";
import { IconHome } from "@tabler/icons-react";
import { IoMdContact } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";

export default function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "About",
      icon: (
        <FaQuestion className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Services",
      icon: (
        <MdMiscellaneousServices className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Testimonials",
      icon: (
        <VscFeedback className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    // {
    //   title: "Blog",
    //   icon: (
    //     <FaBlog className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },

    {
      title: "Career",
      icon: (
        <FaPersonArrowUpFromLine className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contact",
      icon: (
        <IoMdContact className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
