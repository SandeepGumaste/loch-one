"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    window.location.href = "https://app.loch.one/welcome";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    const isValid = /^\S+@\S+\.\S+$/.test(inputValue);
    setIsValidEmail(isValid);
  };
  return (
      <div className="w-full xl:min-w-[640px] lg:min-w-[500px] flex px-10 py-20 bg-white  md:min-h-screen h-full  flex-col items-center justify-center shadow-2xl z-50">
        <form onSubmit={handleSubmit}>
            <div className="mx-auto w-[340px]">
              <h2 className="text-[39px] text-[#B0B1B3] leading-[48px] font-medium pb-6">
                Sign up for exclusive access.
              </h2>
              <Input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Your email address"
                className=" placeholder:text-gray-300 mb-2 py-7"
              />
              <Button
                type="submit"
                className="w-full mt-2 py-7"
              >
                Get Started
              </Button>
            </div>
              <p className="text-base font-semibold text-center pt-4 ml-2">
                You&apos;ll receive an email with an invite link to join.
              </p>
          </form>
      </div>
  );
};

export default SignUp;
