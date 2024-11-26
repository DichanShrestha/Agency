"use client";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import BoxReveal from "./ui/box-reveal";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import TextReveal from "@/components/ui/text-reveal";
import Card from "./Card";
import webDevelopment from "../../public/services/web-development-svgrepo-com.svg";
import seo from "../../public/services/seo-mobile-setting-gear-cog-07-svgrepo-com.svg";
import debugging from "../../public/services/debug-script-svgrepo-com.svg";
import hosting from "../../public/services/web-hosting-svgrepo-com.svg";
import design from "../../public/services/figma-svgrepo-com.svg";
import docs from "../../public/services/documentation-svgrepo-com.svg";
import { VelocityScroll } from "./ui/scroll-based-velocity";

export default function HeroSection() {
  const [isLessThanMd, setIsLessThanMd] = useState<boolean>(false);

  const services = [
    {
      image: webDevelopment,
      text: "Web Development",
      description:
        "Take your business to next level with our web development services",
    },
    {
      image: design,
      text: "Web Design",
      description:
        "Take your business to next level with our web designing services",
    },
    {
      image: seo,
      text: "Search Engine Optimization",
      description: "Make your website top of the list with our seo services",
    },
    {
      image: hosting,
      text: "Web Hosting",
      description: "Host your website with webify",
    },
    {
      image: debugging,
      text: "Debug and Update",
      description: "Debug or update your website with webify",
    },
    {
      image: docs,
      text: "Documentation",
      description: "Document your work with us",
    },
  ];

  useEffect(() => {
    // Function to check the screen size
    const handleResize = () => {
      setIsLessThanMd(window.matchMedia("(max-width: 767px)").matches);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="md:mx-10">
      <div className="mt-5">
        {isLessThanMd ? (
          <div className="flex flex-col">
            <GradualSpacing
              className="font-display text-center text-2xl md:text-3xl xl:text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:leading-[5rem]"
              text="Innovative Web"
            />
            <GradualSpacing
              className="font-display text-center text-2xl md:text-3xl xl:text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:leading-[5rem]"
              text="Development Solutions"
            />
          </div>
        ) : (
          <GradualSpacing
            className="font-display text-center text-2xl md:text-3xl xl:text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:leading-[5rem]"
            text="Innovative Web Development Solutions"
          />
        )}
      </div>
      <div className="grid md:grid-cols-[40%_60%]">
        {/* Left Section */}
        <div className="w-full flex flex-col justify-start p-4">
          <div className="max-w-lg items-center justify-center overflow-hidden pt-8">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p className="text-2xl md:text-3xl xl:text-4xl font-semibold">
                Webify<span className="text-[#5046e6]">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h2 className="mt-[1rem] text-[14px] sm:text-[1rem]">
                Build from the{" "}
                <span className="text-[#5046e6]">Ground Up </span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className="mt-6 text-[14px] sm:text-[1rem]">
                <p>
                  -&gt; Quick
                  <span className="font-semibold text-[#5046e6]">
                    {" "}
                    Turnaround
                  </span>
                  , on Custom Projects
                  <br />
                  -&gt; Fully Customizable and Scalable Solutions <br />
                </p>
              </div>
            </BoxReveal>

            <BoxReveal>
              <div className="mt-3 text-[14px] sm:text-[1rem]">
                <span>Book a</span>
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  call with us
                </span>
                <span> to discuss a project and get a quote in </span>
                <span className="font-semibold text-[#5046e6]"> seconds</span>
              </div>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <Button className="mt-[1.6rem] bg-[#5046e6]">
                Call to Action
              </Button>
            </BoxReveal>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full flex justify-center items-center pt-8">
          <HeroVideoDialog
            animationStyle="top-in-bottom-out"
            videoSrc="https://res.cloudinary.com/dn55mzlnu/video/upload/v1717724811/mkkraedzfvu2jsx0o2q2.mp4"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>

      <div>
        <TextReveal text="We Plan, We Build You Relax" />
        <p className="text-xl text-center mb-6">All of our services are designed to help your business stand out</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 md:mx-10 mx-3">
        {services.map((service, idx) => (
          <div key={idx} className="flex justify-center">
            <Card
              image={service.image}
              title={service.text}
              description={service.description}
            />
          </div>
        ))}
      </div>

      <div className="mt-7">
        <VelocityScroll text="Webify" default_velocity={5} className="lg:text-4xl text-[#5046e6] font-bold mt-5" />
      </div>
    </div>
  );
}
