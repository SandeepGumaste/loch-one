"use client";

import { BarChart2, Bell, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Card = () => {
  return (
    <>
      <div className="flex relative overflow-hidden gap-2 w-[420px] md:w-[445px] ">
        <div className="absolute w-full h-full bg-opacity-10 blur-sm bg-gradient-to-r from-neutral-500/30 from-5% via-white/10 via-80% to-gray-900/90  z-10"></div>
        <div className=" shadow w-[190px] h-[172px] bg-gradient-to-b from-white via-white to-indigo-100 rounded-xl relative mr-3 z-0 animate-infinite-scroll">
          <div className="absolute right-2 top-1">
            <Button variant="link" className="text-[9px] font-semibold ">
              Save
            </Button>
          </div>
          <div className="flex flex-col items-start pt-3 px-5">
            <Bell
              className="w-7 h-7 text-[#19191A]"
              fill="#165dff"
              fillOpacity="10%"
            />
            <p className="text-[14px] font-semibold text-[#19191A] pt-4 leading-4">
              We&apos;ll be sending notifications to you here
            </p>
            <Input
              placeholder="hello@loch.one"
              className="placeholder:text-[9px] mt-4 w-[162px] h-[35px]"
            />
          </div>
        </div>
        <div className="min-w-[190px] min-h-[172px] bg-white rounded-xl relative shadow-md mr-3 animate-infinite-scroll">
          <div className="absolute right-5 top-3">
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex flex-col items-start pt-3 px-5">
            <BarChart2
              className="w-7 h-7 text-[#19191A]"
              fill="#165dff"
              fillOpacity="10%"
            />
            <p className="text-[11px] font-semibold text-[#19191A] pt-12 leading-4">
              Notify me when any wallets move more than
            </p>
            <select
              name="amount"
              id="amount"
              className="w-16 h-5 text-[9px] font-medium bg-[#E5E5E6]/50 rounded-sm mt-4"
              defaultValue="1000"
            >
              <option value="1000">$1,000.00</option>
              <option value="2000">$2,000.00</option>
              <option value="3000">$3,000.00</option>
            </select>
          </div>
        </div>
        <div className="min-w-[190px] min-h-[172px] bg-white rounded-xl relative shadow-md mr-3 animate-infinite-scroll">
          <div className="absolute right-5 top-3">
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex flex-col items-start pt-3 px-5">
            <Clock className="w-7 h-7 text-[#19191A]" />
            <p className="text-[11px] font-semibold text-[#19191A] pt-8 leading-4">
              Notify me when any wallet dormant for
            </p>
            <select
              name="amount"
              id="amount"
              className="w-16 h-5 text-[9px] font-medium bg-[#E5E5E6]/50 rounded-sm mt-2"
              defaultValue="1000"
            >
              <option value="1000">&gt;30 Days</option>
              <option value="2000">&gt;60 Days</option>
              <option value="3000">&gt;90 Days</option>
            </select>
            <p className="text-[11px] font-semibold text-[#19191A] pt-2 leading-4">
              becomes active
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
