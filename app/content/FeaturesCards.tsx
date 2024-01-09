"use client";
import React, { useState, useEffect } from "react";

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
  const isNextPlus = index === (activeIndex + 2) % totalPages;
  const isNextPlusPlus = index === (activeIndex + 3) % totalPages;

  const handleClick = () => {
    if (isNext) {
      let newIndex = (activeIndex + 1) % totalPages;
      setActiveIndex(newIndex);
    }
    if (isNextPlus) {
      let newIndex = (activeIndex + 2) % totalPages;
      setActiveIndex(newIndex);
    }
    if (isNextPlusPlus) {
      let newIndex = (activeIndex + 3) % totalPages;
      setActiveIndex(newIndex);
    }
  };

  let className =
    "absolute top-0 w-full aspect-video rounded-[25px] flex flex-col gap-y-1 sm:gap-y-2 py-4 justify-center bg-white border-2 border-gray-300 pl-[6vw] pr-[8vw] shadow-lg transition-transform duration-500 ";
  let style = {
    transformOrigin: "bottom left",
    zIndex: isNextPlusPlus ? 10 : isNextPlus ? 20 : isNext ? 30 : 40,
  };

  if (isCurrent) {
    className += "transform";
    style.zIndex = 40; // Bring the current card to the front
  } else if (isNext) {
    className +=
      "transform scale-95 opacity-70 hover:opacity-80 cursor-pointer -rotate-[-4deg] sm:-rotate-[-3deg] sm:scale-x-[105%]";
  } else if (isNextPlus) {
    className +=
      "transform scale-95 opacity-15 hover:opacity-80 cursor-pointer -rotate-[-7deg] sm:-rotate-[-6deg] sm:scale-x-[102%]";
  } else if (isNextPlusPlus) {
    className +=
      "transform scale-95 opacity-10 hover:opacity-80 cursor-pointer -rotate-[-10deg] sm:-rotate-[-9deg] sm:scale-x-[101%]";
  } else {
    className += "opacity-0";
  }

  return (
    <div className={className} onClick={handleClick} style={style}>
      <p className="text-apple text-xl sm:text-2xl font-bold mb-3">{title}</p>
      <p className="text-mineshaft text-base font-medium">{content}</p>
      <p className="text-mineshaft mt-3 text-right text-base font-semibold">
        Source - <em className="capitalize">{source}</em>
      </p>
    </div>
  );
};

const FeaturesCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const pagesData = [
    {
      title: "Unused Subscriptions: 40%",
      content: "40% of SaaS subscriptions go unused impacting software ROI.",
      source: "cloud eagle",
    },
    {
      title: "Orphaned Apps: 4.3 Avg",
      content:
        "Enterprises grapple with 4.3 orphaned apps and 7.6 duplicates on average.",
      source: "Chief Martec",
    },
    {
      title: "Unmanaged Apps: 56%",
      content: "56% of enterprise apps go unmanaged",
      source: "Productiv",
    },
    {
      title: "Boost Adoption: 35%",
      content:
        "35% of application adoption can be increased by highlighting under-utilised features.",
      source: "Whatfix",
    },
    {
      title: "Budget Predicament",
      content: "83% of CIOs need to achieve more with less",
      source: "Softwareone",
    },
    {
      title: "Wasted Spend: 38%",
      content: "38% of software spend is wasted",
      source: "Softwareone",
    },
  ];
  const totalPages = pagesData.length;
  const goPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const goNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  // Set up the interval
  useEffect(() => {
    let intervalId: any = null;

    if (!isHovering) {
      intervalId = setInterval(goNext, 5000); // Change card every 5 seconds
    }

    // Clear the interval on component unmount or when hovering starts
    return () => clearInterval(intervalId);
  }, [isHovering, totalPages]);

  return (
    <div className="flex w-full lg:max-w-screen-lg flex-col lg:flex-row gap-20 justify-center mb-[300px] sm:mb-[400px]">
      <div className="flex w-full mt-10 justify-center items-center lg:items-start h-full text-4xl sm:text-5xl flex-col gap-3">
        <div className="mt-2">
          Unveiling <div className="text-apple inline-block">SaaS</div> <br />
          By Numbers
        </div>
        <div className="text-lg">#YouAreNotAlone</div>
      </div>
      <div
        className="relative w-full h-full flex items-center justify-center z-10"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
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
    </div>
  );
};

export default FeaturesCards;
