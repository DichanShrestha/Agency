import GradualSpacing from "@/components/magicui/gradual-spacing";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import BoxReveal from "./ui/box-reveal";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div>
      <div className="mt-5">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-6xl md:leading-[5rem]"
          text="Innovative Web Development Solutions"
        />
      </div>
      {/* <div className="flex items-center flex-col p-4">
            <BlurIn word="Welcome to Name" className="text-2xl text-white" />
            <span className="text-white text-center">
              We specialize in crafting custom digital experiences that bring
              your brand to life. From tailored websites to immersive designs,
              we create seamless, engaging, and impactful online solutions that
              elevate your business.
            </span>
          </div> */}
      <div className="grid md:grid-cols-[40%_60%] ">
        {/* Left Section */}
        <div className="w-full flex flex-col justify-start p-4">
          <div className="max-w-lg items-center justify-center overflow-hidden pt-8">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p className="text-[3.5rem] font-semibold">
                Webify<span className="text-[#5046e6]">.</span>
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h2 className="mt-[.5rem] text-[1rem]">
                We plan, We build{" "}
                <span className="text-[#5046e6]">You relax</span>
              </h2>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className="mt-6">
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

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <Button className="mt-[1.6rem] bg-[#5046e6]">Call to Action</Button>
            </BoxReveal>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full flex justify-center items-center p-4">
          <HeroVideoDialog
            animationStyle="top-in-bottom-out"
            videoSrc="https://res.cloudinary.com/dn55mzlnu/video/upload/v1717724811/mkkraedzfvu2jsx0o2q2.mp4"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </div>
    </div>
  );
}
