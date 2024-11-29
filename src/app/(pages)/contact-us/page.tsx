"use client";
import BoxReveal from "@/components/ui/box-reveal";
import { GlareCard } from "@/components/ui/glare-card";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactUs() {
  return (
    <div className="grid md:grid-cols-2 justify-items-center mt-10 md:mt-16 lg:mx-20 gap-10 md:gap-0">
      <GlareCard className="flex flex-col px-6">
        <div>
          <div>
            <h1 className="md:text-2xl font-semibold text-white mt-10">
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
          <div className="mt-4">
            <h3 className="font-semibold">Our quote</h3>
            <div className="flex gap-2">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-sm mt-1">We Plan,</p>
              </BoxReveal>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-sm mt-1">We Build</p>
              </BoxReveal>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-sm mt-1">You relax</p>
              </BoxReveal>
            </div>
          </div>
        </div>
      </GlareCard>

      <div className="max-w-md h-[500px] mx-auto rounded-[40px] p-4 px-8 shadow-input bg-white dark:bg-black/50">
        <form className="my-5">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="c_name">Company Name</Label>
            <Input id="c_name" placeholder="company name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="email@email.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Message</Label>
            <Input id="message" />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Message
            <BottomGradient />
          </button>

          {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}
          <div className="flex gap-3 mt-3">
            <Checkbox />
            <Label>
              I'd like to receive more information about company. I understand
              and agree to <Link href="/private-policy">Private Policy</Link>
            </Label>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
