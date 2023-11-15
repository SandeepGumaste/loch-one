'use client'
import HeroContent from "@/components/HeroContent";
import SignUp from "../components/SignUp";
import React, { useEffect, useRef } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <div className="flex flex-col md:flex-row overflow-hidden justify-between w-screen md:h-screen bg-gradient-to-bl from-black from-20% via-[#2F15D0] via-50% to-[#1FA911]/80 to-80%">
        <HeroContent />
        <div className="flex">
          <SignUp />
        </div>
    </div>
  );
}
