'use client'
import HeroContent from "@/components/HeroContent";
import SignUp from "../components/SignUp";
import React, { useRef } from "react";

export default function Home() {
  const signUp=useRef<HTMLDivElement|null>(null)
  console.log(signUp.current)
  return (
    <div className="flex flex-row overflow-hidden justify-between w-screen min-h-screen bg-gradient-to-bl from-black from-20% via-[#2F15D0] via-50% to-[#1FA911]/80 to-80%">
        <HeroContent />
        <div ref={signUp}>
          <SignUp />
        </div>
    </div>
  );
}
