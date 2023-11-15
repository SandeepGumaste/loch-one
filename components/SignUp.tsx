"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    window.location.href = "https://app.loch.one/welcome";
  };

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    const isValid = /^\S+@\S+\.\S+$/.test(inputValue);
    setIsValidEmail(isValid);
  };
  return (
      <div className="xl:min-w-[640px] md:min-w-[500px] flex px-10 bg-white min-h-screen h-full  flex-col items-center justify-center shadow-md ">
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
