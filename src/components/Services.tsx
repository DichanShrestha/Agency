import React from 'react'
import webDevelopment from "../../public/services/web-development-svgrepo-com.svg";
import seo from "../../public/services/seo-mobile-setting-gear-cog-07-svgrepo-com.svg";
import debugging from "../../public/services/debug-script-svgrepo-com.svg";
import hosting from "../../public/services/web-hosting-svgrepo-com.svg";
import design from "../../public/services/figma-svgrepo-com.svg";
import docs from "../../public/services/documentation-svgrepo-com.svg";
import Card from './Card';

export default function Services() {
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
  return (
    <div>
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
    </div>
  )
}
