import JoinWaitlist from "@/components/buttons/JoinWaitlist";
import ChangingWord from "@/components/common/ChangingWord";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col max-w-screen-md items-center justify-center gap-10 h-screen">
      <video
        src="/videos/dm.mp4"
        className="w-full h-full absolute -z-10 opacity-50"
        autoPlay={true}
        loop={true}
        muted
      >
        <source src="/videos/dm.mp4" type="video/mp4"></source>
      </video>
      <div className="border-[#777964] bg-[#525346] bg-opacity-20 hover:bg-opacity-30 border px-1 py-1 border-solid rounded-full text-sm cursor-default">
        Coming Soon!
      </div>
      <div className="text-4xl sm:text-6xl text-center">
        {/* <div>What if you can</div> */}
        <div className="mt-2">
          How to <ChangingWord /> Saas ROI?
        </div>
      </div>
      <div className="text-sm sm:text-base text-center opacity-90 mb-10 max-w-[480px]">
        If these questions resonate with your current challenges, join our
        waitlist to be the first to get the launch alert.
      </div>
      <JoinWaitlist />
    </div>
  );
};

export default ComingSoon;
