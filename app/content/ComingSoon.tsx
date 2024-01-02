import JoinWaitlist from "@/components/buttons/JoinWaitlist";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col max-w-screen-sm items-center justify-center gap-10 h-screen">
      <video
        src="/videos/dm.mp4"
        className="w-screen h-screen px-10 absolute -z-10 opacity-50"
        autoPlay={true}
        loop={true}
        muted
      >
        <source src="/videos/dm.mp4" type="video/mp4"></source>
      </video>
      <div className="border-[#777964] bg-[#525346] bg-opacity-20 hover:bg-opacity-30 border px-3 py-1 border-solid rounded-full text-xs cursor-default">
        Coming Soon!
      </div>
      <div className="text-4xl sm:text-5xl text-center">
        <div>What if you can</div>
        <div className="mt-2">
          <span className="text-apple">Monitor </span>Saas ROI?
        </div>
      </div>
      <div className="text-sm sm:text-base text-center opacity-90 mb-10 max-w-[480px]">
        If the idea seems exclusive, secure your spot on the website for
        exclusive launch alert and witness the reality firsthand
      </div>
      <JoinWaitlist />
    </div>
  );
};

export default ComingSoon;
