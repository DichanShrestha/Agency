import React from "react";

import Image from "next/image";
import Link from "next/link";
import BoxReveal from "./box-reveal";
import { Button } from "./button";

function LetsMakeThingsHappenSection() {
  return (
    <section className="
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">
          Let&apos;s make things happen
        </p>

        <p className="my-10 text-xl">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>

        <Link
          href="/meeting">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <Button className="mt-[1.6rem] bg-[#5046e6] p-3">
                Call to Action
              </Button>
            </BoxReveal>
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/proposal_illustration.png"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;