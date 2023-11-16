'use client'
import HeroContent from "@/components/HeroContent";
import SignUp from "../components/SignUp";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const signUp = useRef<HTMLDivElement|null>(null)
  const scrollToSignup=()=>{
    if(signUp.current){
      signUp.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
     }
  }

  return (
    <div className="flex flex-col md:flex-row overflow-hidden justify-between w-full md:h-screen bg-gradient-to-bl from-black from-20% via-[#2F15D0] via-50% to-[#1FA911]/80 to-80% overflow-x-hidden">
        <Button variant="outline" className="absolute right-0 m-5 flex md:hidden" onClick={scrollToSignup}>Sign up</Button>
        <HeroContent />
        <div ref={signUp} className="flex">
          <SignUp />
        </div>
    </div>
  );
}
