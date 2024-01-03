"use client";
import React, { useState } from "react";

interface PageProps {
  title: string;
  content: string;
  source: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  totalPages: number;
}

const Page = ({
  title,
  content,
  source,
  index,
  activeIndex,
  setActiveIndex,
  totalPages,
}: PageProps) => {
  const isCurrent = index === activeIndex;
  const isNext = index === (activeIndex + 1) % totalPages;

  const handleClick = () => {
    if (isNext) {
      let newIndex = (activeIndex + 1) % totalPages;
      setActiveIndex(newIndex);
    }
  };

  let className =
    "absolute top-0 w-full lg:max-w-[45%] aspect-video rounded-[25px] flex flex-col gap-y-1 sm:gap-y-2 py-4 justify-center bg-white border-2 border-gray-300 pl-[6vw] pr-[8vw] shadow-lg transition-transform duration-500 ";
  let style = {
    transformOrigin: "bottom left",
    zIndex: isNext ? 20 : 10,
  };

  if (isCurrent) {
    className += "transform";
    style.zIndex = 30; // Bring the current card to the front
  } else if (isNext) {
    className +=
      "transform scale-95 opacity-70 hover:opacity-80 cursor-pointer -rotate-[-6deg] sm:-rotate-[-3deg] sm:scale-x-105";
  } else {
    className += "opacity-0";
  }

  return (
    <div className={className} onClick={handleClick} style={style}>
      <p className="text-apple text-2xl sm:text-4xl font-bold mb-3">{title}</p>
      <p className="text-mineshaft text-base font-medium">{content}</p>
      <p className="text-mineshaft mt-3 text-right text-base font-semibold">
        Source - <em className="capitalize">{source}</em>
      </p>
    </div>
  );
};

const FeaturesCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pagesData = [
    {
      title: "Heading 1",
      content: "40% of SaaS subscriptions go unused impacting software ROI",
      source: "cloud eagle",
    },
    {
      title: "Heading 2",
      content:
        "Enterprises grapple with 4.3 orphaned apps and 7.6 duplicates on average",
      source: "Chief Martec",
    },
    {
      title: "Heading 3",
      content: "56% of enterprise apps go unmanaged",
      source: "Productiv",
    },
    {
      title: "Heading 4",
      content:
        "35% of application adoption can be increased by highlighting under-utilised features",
      source: "Whatfix",
    },
  ];

  return (
    <div className="relative w-full h-fit flex items-center justify-center mb-[300px] sm:mb-[450px] z-10">
      {pagesData.map((page, index) => (
        <Page
          key={index}
          title={page.title}
          content={page.content}
          source={page?.source}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          totalPages={pagesData.length}
        />
      ))}
    </div>
  );
};

export default FeaturesCards;
