"use client";

import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import TestimonialCard from "./testimonialCard";

const testimonialsData=[
  {
    name:"Jack F",
    designation:"Ex Blackrock PM",
    review: "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name:"Yash P",
    designation:"Research, 3poch Crypto Hedge Fund",
    review: "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",

  },
  {
    name:"Shiv S",
    designation:"Co-Founder Magik Labs",
    review: "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.",
    

  }
]

const TestimonialCards=()=>{
return testimonialsData.map((data,index)=>{
  const {name,designation,review} = data
  return (
    <TestimonialCard key={name+index} name={name} designation={designation} review={review}/>
  )
})
}

const TestimonialsLayout = () => {
  return (
    <div className="w-[calc(100% - 80px)] overflow-visible ">
      <motion.div
        className="hidden md:flex flex-col md:flex-row gap-4 items-start justify-between min-w-max backdrop-blur-[2px] "
        drag="x"
        dragConstraints={window.innerWidth > 700 ? { left: -700, right: 0 }:{ left: 0, right: 0 }}
        dragElastic={0.5}
      >
        <TestimonialCards/>
      </motion.div>
      
      
    </div>
  );
};

export default TestimonialsLayout;
