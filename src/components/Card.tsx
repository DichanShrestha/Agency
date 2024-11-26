import Image from "next/image";
import React from "react";

export default function Card({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="h-72 w-72 dark:bg-[#1E1E1E] px-4 pb-5 pt-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl bg-gray-100 hover:cursor-pointer">
      <div className="flex justify-center bg-white mx-[60px] rounded-xl">
        <Image
          src={image}
          alt={title}
          height={60}
          width={112}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-[#1A1A1A] dark:text-white">
        <div>
          <h3 className="font-semibold my-5 ">{title}</h3>
        </div>
        <div>
          <p className="text-sm px-3 ">{description}</p>
        </div>
      </div>
    </div>
  );
}
