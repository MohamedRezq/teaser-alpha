"use client";
import React, { useState } from "react";

interface PageProps {
  title: string;
  content: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  totalPages: number;
}

const Page = ({
  title,
  content,
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
    "absolute top-0 w-full max-w-[600px] sm:aspect-video rounded-[25px] flex flex-col gap-y-2 py-5 justify-center bg-white border-2 border-gray-300 p-24 shadow-lg transition-transform duration-500 ";
  let style = {
    transformOrigin: "bottom left",
    zIndex: isNext ? 20 : 10,
  };

  if (isCurrent) {
    className += "transform";
    style.zIndex = 30; // Bring the current card to the front
  } else if (isNext) {
    className +=
      "transform scale-95 opacity-70 hover:opacity-80 cursor-pointer -rotate-[-3deg] scale-x-105";
  } else {
    className += "opacity-0";
  }

  return (
    <div className={className} onClick={handleClick} style={style}>
      <p className="text-apple text-2xl sm:text-4xl font-bold mb-3">{title}</p>
      <p className="text-mineshaft text-base sm:text-lg font-medium">
        {content}
      </p>
    </div>
  );
};

const FeaturesCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pagesData = [
    {
      title: "Heading 1",
      content:
        "If the idea seems elusive, secure your spot on the website for exclusive launch alert and witness the reality firsthand, If the idea seems elusive, secure your spot on the 1",
    },
    {
      title: "Heading 2",
      content:
        "If the idea seems elusive, secure your spot on the website for exclusive launch alert and witness the reality firsthand, If the idea seems elusive, secure your spot on the 2",
    },
    {
      title: "Heading 3",
      content:
        "If the idea seems elusive, secure your spot on the website for exclusive launch alert and witness the reality firsthand, If the idea seems elusive, secure your spot on the 3",
    },
    {
      title: "Heading 4",
      content:
        "If the idea seems elusive, secure your spot on the website for exclusive launch alert and witness the reality firsthand, If the idea seems elusive, secure your spot on the 4",
    },
    {
      title: "Heading 5",
      content:
        "If the idea seems elusive, secure your spot on the website for exclusive launch alert and witness the reality firsthand, If the idea seems elusive, secure your spot on the 5",
    },
  ];

  return (
    <div className="relative w-full h-fit flex items-center justify-center px-10">
      {pagesData.map((page, index) => (
        <Page
          key={index}
          title={page.title}
          content={page.content}
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
