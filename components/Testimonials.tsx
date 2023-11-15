"use client";

import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <motion.div
        className="flex md:flex-row flex-col items-center justify-between mt-8"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
      >
        <div className="bg-white shadow-lg rounded-lg mx-4 min-w-[360px] my-4 md:my-0 md:max-w-2xl max-w-[360px]">
          <div className="p-4">
            <p className="text-[16px] font-semibold">
              Jack F{" "}
              <span className="text-[#96979A] text-[13px] font-medium tracking-normal pl-2">
                Ex Blackrock PM
              </span>
            </p>
            <p className="text-[16px] font-medium text-[#1D2129]">
              “Love how Loch integrates portfolio analytics and whale watching
              into one unified app.”
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg my-4 md:my-0 min-w-[360px] md:max-w-2xl max-w-[360px]">
          <div className="p-4">
            <p className="text-[16px] font-semibold">
              Yash P{" "}
              <span className="text-[#96979A] text-[13px] font-medium tracking-normal pl-2">
                Research, 3poch Crypto Hedge Fund
              </span>
            </p>
            <p className="text-[16px] font-medium text-[#1D2129]">
              “I use Loch everyday now. I don&apos;t think I could analyze
              crypto whale trends markets without it. I&apos;m addicted!”
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg md:hidden my-4 md:my-0 md:max-w-xl max-w-[360px]">
          <div className="p-4">
            <p className="text-[16px] font-semibold">
              Shiv S{" "}
              <span className="text-[#96979A] text-[13px] font-medium tracking-normal pl-2">
                Co-Founder Magik Labs
              </span>
            </p>
            <p className="text-[16px] font-medium text-[#1D2129]">
              “Managing my own portfolio is helpful and well designed.
              What&apos;s really interesting is watching the whales though. No
              one else has made whale tracking so simple.”
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
