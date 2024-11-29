import GradualSpacing from "@/components/magicui/gradual-spacing";
import Services from "@/components/Services";
import React from "react";
import ContactUs from "../contact-us/page";

export default function page() {
  return (
    <div>
      <div className="my-5 mb-10">
        <GradualSpacing
          className="font-display text-center text-2xl md:text-3xl xl:text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:leading-[5rem]"
          text="Services we provide"
        />
      </div>
      <Services />
      <GradualSpacing
        className="font-display mt-20 text-center text-2xl md:text-3xl xl:text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:leading-[5rem]"
        text="Contact Us for Free Consultation"
      />
      <ContactUs />
    </div>
  );
}
