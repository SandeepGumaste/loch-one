import Image from "next/image";
import TestimonialsLayout from "./TestimonialsLayout";
import WhaleCardsLayout from "./WhaleCardsLayout";
import { useRef } from "react";

const HeroContent = () => {
  const testimonialsContainer = useRef<HTMLDivElement|null>(null)
  return (
    <div className="bg-gradient-to-bl from-black from-20% via-[#2F15D0] via-50% to-[#1FA911]/80 to-80% px-5 sm:px-10 md:px-[62px] pt-10 md:pt-20  min-h-screen overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col 2xl:justify-around h-full gap-11 2xl:gap-0">
        <div className="flex xl:flex-row flex-col items-start justify-between">
          <div className="flex flex-col max-w-sm">

            <Image src="/icons/Bell.svg" width={32} height={32} alt="bell"/>

            <div className="py-4">
            <h3 className="text-[#F2F2F2] text-[28px] md:text-[31px] leading-10 pb-2 text__shadow">
              Get notified when a highly correlated whale makes a move
            </h3>
            <p className="text-gray-300">
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
            </div>
          </div>
          <WhaleCardsLayout/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-10 items-start">
          <div className="flex justify-center items-center  h-[306px] relative ">
            <Image
              src="/images/cohorts.png"
              alt="cohorts"
              fill
              className="object-contain object-center md:object-left"
              />
          </div>
          <div className="flex flex-col items-end justify-center">
            <Image src="/icons/Eye.svg" alt="eye" width={32} height={32}/>
            <div className="text-right max-w-sm">
              <h3 className="text-[#F2F2F2] text-[28px] md:text-[31px] leading-10 ">
                Watch what the whales are doing
              </h3>
              <p className="text-gray-300">
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </div>
        </div>
        <div ref={testimonialsContainer} className="flex flex-col items-center md:items-end w-full pb-10">
          <h4 className="text-2xl font-medium text-[#F2F2F2] text-right pb-5">
            Testimonials
          </h4>
          <div className="w-full h-px bg-slate-300 mb-10"></div>
          <div className="flex w-full flex-col md:flex-row">
            <Image
              src="/icons/logo.svg"
              alt="Loch logo"
              width={80}
              height={80}
              className="object-contain object-bottom mr-5"
            />
            <TestimonialsLayout testimonialsContainer={testimonialsContainer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
