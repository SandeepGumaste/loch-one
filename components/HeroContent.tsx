import Image from "next/image";
import Testimonials from "./Testimonials";
import WhaleCardsLayout from "./WhaleCardsLayout";

const HeroContent = () => {
  return (
    <div className="bg-gradient-to-bl from-black from-20% via-[#2F15D0] via-50% to-[#1FA911]/80 to-80% px-5 py-5 sm:px-10 md:px-[62px] md:py-[92px]">
      <div className="flex flex-col justify-between gap-[72px]">
        <div className="flex xl:flex-row flex-col items-start justify-between">
          <div className="flex flex-col">

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex justify-center items-center  h-[306px] relative ">
            <Image
              src="/images/cohorts.png"
              alt="cohorts"
              fill
              className="object-contain object-left"
              />
          </div>
          <div className="flex flex-col items-end justify-center">
            <Image src="/icons/Eye.svg" alt="eye" width={32} height={32}/>
            <div className="text-right">
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
        {/* <div className="flex flex-col items-center md:items-end ">
          <div className="md:mr-20 mr-6">
            <h4 className="text-[25px] font-medium text-[#F2F2F2] md:text-right text-center">
              Testimonials
            </h4>
          </div>

            <div className="w-full h-px bg-slate-300"></div>
          <div className="flex items-center">
            <Image
              src="/Vector.png"
              alt="Loch logo"
              width={60}
              height={60}
              className="mt-20 mx-16 hidden md:block"
            />
            <Testimonials />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroContent;
