"use client";
import { GlareCard } from "@/components/ui/glare-card";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div className="grid md:grid-cols-2">
      <GlareCard className="flex flex-col items-center justify-center px-5 ">
        <div>
          <div>
            <h1 className="md:text-2xl font-semibold text-white">
              Get in touch
            </h1>
            <p className="text-sm mt-4">
              We would love to hear from you! Whether you have any questions,
              need support or want to learn more about our services. Our team is
              here to help you.
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Chat with us</h3>
            <p className="text-sm mt-1">dichanshrestha10@gmail.com</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Call us</h3>
            <p className="text-sm mt-1">(+977) 9861332293</p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Social Media</h3>
          </div>

          <div className="flex -ml-4">
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
          </div>
        </div>
      </GlareCard>
    </div>
  );
}
