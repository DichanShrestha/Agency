import GradualSpacing from "@/components/magicui/gradual-spacing";
import { Timeline } from "@/components/ui/timeline";
import React from "react";
import Excellence from "../../../../public/about/target-svgrepo-com.svg";
import Commitment from "../../../../public/about/flag-svgrepo-com.svg";
import Passion from "../../../../public/about/trophy-svgrepo-com.svg";
import Clarity from "../../../../public/about/cloud-check-svgrepo-com.svg";
import Card from "@/components/Card";
import ContactUs from "../contact-us/page";

export default function page() {
  const data = [
    {
      title: "2022 - Beginnings",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started exploring web development and gained basic knowledge of
            HTML, CSS, and JavaScript.
          </p>
          <ul className="list-disc pl-5">
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Learned how to create static websites with responsive designs.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Built a portfolio showcasing my learning progress.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023 - Advancing to Full Stack Development",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Delved deeper into JavaScript frameworks and backend technologies.
          </p>
          <ul className="list-disc pl-5">
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Learned React.js, Node.js, and MongoDB to build dynamic full-stack
              applications.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Created a YouTube clone using the MERN stack.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Experimented with user authentication and file uploads.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Early 2024 - Specializing in Next.js",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Focused on mastering Next.js and TypeScript to build scalable and
            SEO-friendly web applications.
          </p>
          <ul className="list-disc pl-5">
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Created the "True Feedback" project to gather anonymous feedback.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Learned server-side rendering (SSR) and static site generation
              (SSG).
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Implemented state management using Zustand for better performance.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Mid 2024 - eCommerce and CMS Development",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built a full-fledged eCommerce platform integrated with a CMS.
          </p>
          <ul className="list-disc pl-5">
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Worked on advanced features like product filtering, pagination,
              and cart management.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Integrated eSewa payment gateway for secure transactions.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Used MongoDB for storing and managing product and user data.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Late 2024 - Hackathons and Internships",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Participated in hackathons and worked on impactful projects.
          </p>
          <ul className="list-disc pl-5">
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Built a website promoting good health and quality education.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Focused on sustainable development goals (SDGs) in project design.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
              Improved problem-solving skills and teamwork in a competitive
              environment.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const about = [
    {
      title: "Excellence",
      description:
        "Excellence is not just our goal; it's our standard, driving every aspect of our company.",
      image: Excellence,
    },
    {
      title: "Commitment",
      description:
        "Commitment is the hear of our company, driving us to deliver excellence in every endeavour",
      image: Commitment,
    },
    {
      title: "Passion",
      description:
        "Passion drives our every endeavour, infusing creativity and dedication into everything we do.",
      image: Passion,
    },
    {
      title: "Clarity",
      description:
        "Clarity is our driving principle, ensuring transparency and understanding in every interations.",
      image: Clarity,
    },
  ];

  return (
    <div>
      <div>
        <GradualSpacing
          className="font-display text-center md:mt-10 text-2xl md:text-3xl xl:text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:leading-[5rem]"
          text="Dedicated to delivering"
        />
        <GradualSpacing
          className="font-display text-center md:mt-5 text-2xl md:text-3xl xl:text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:leading-[5rem]"
          text="excellence"
        />
      </div>
      <div>
        <Timeline data={data} />
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 md:mx-10 md:mt-10">
        {about.map((item, idx) => (
          <div key={idx}>
            <Card
              description={item.description}
              image={item.image}
              title={item.title}
            />
          </div>
        ))}
      </div>

      <div>
        <GradualSpacing
          className="font-display mt-20 text-center text-2xl md:text-3xl xl:text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:leading-[5rem]"
          text="Contact Us for Free Consultation"
        />
        <ContactUs />
      </div>
    </div>
  );
}
