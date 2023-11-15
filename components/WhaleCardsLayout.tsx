import React from "react";
import { Input } from "./ui/input";
import WhaleCard from "./WhaleCard";
import { WhaleCardProps } from "@/types";
import Image from "next/image";


const whaleCardsData: WhaleCardProps[]=[
  {
    iconUrl:"/icons/cardBell.svg",
    action:"save",
    content:<p className="text-base tracking-wide leading-4 font-medium">We’ll be sending notifications to you here </p>,
    footer:<Input type='text' className='placeholder:text-xs disabled:border-gray-300 disabled:placeholder:text-gray-900' disabled placeholder='hello@gmail.com'/> 
  },
  {
    iconUrl:"/icons/bar-chart-2.svg",
    content:<p className="font-semibold text-xs leading-3 mt-8">Notify me when any wallets
    move more than </p>,
    footer:<div className="bg-gray-200 text-gray-800 bg-opacity-50 text-xs font-medium flex p-2 rounded-md gap-1">
        <p className="text-xs">
            $1,000.00
        </p>
        <Image src="/icons/triangle-down.svg" alt="triangle-down" width={12} height={12} className="object-scale-down" />
    </div> 
  },
  {
    iconUrl:"/icons/clock.svg",
    content:
    <div className="flex flex-col items-start">
        <p className="font-semibold text-xs leading-3 w-3/4">Notify me when any wallet dormant for</p>
        <div className="bg-gray-200 text-gray-800 bg-opacity-50 text-xs font-medium flex p-2 rounded-md mt-2">
            <p className="text-xs">
                &gt; 30 days
            </p>
            <Image src="/icons/triangle-down.svg" alt="triangle-down" width={12} height={12} className="object-scale-down" />
        </div>
    </div>,
    footer:<p className="text-xs font-medium p-0">becomes active</p>
  }
]

const WhaleCardsLayout = () => {
  const cardsDataX2 =[...whaleCardsData,...whaleCardsData] 
  return (
    <div className="whaleCards__layout overflow-x-hidden scroller lg:translate-x-16">
        <div className="flex scroller__inner w-fit">
            {
              cardsDataX2.map(
                  (cardData,index)=>{
                      const {iconUrl,action,content,footer} = cardData
                    return <WhaleCard key={iconUrl+index} iconUrl={iconUrl} action={action} content={content} footer={footer} />}
              )
            }
          </div>
    </div>
  );
};

export default WhaleCardsLayout;
