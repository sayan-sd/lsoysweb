"use client";
import React from "react";
import { Label } from "./label";
import { Input, Textarea } from "./input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { HoverBorderGradient } from "./HoverBorderGradient";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="mx-auto">
      <HoverBorderGradient className="text-left">
        <div className="max-w-lg rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-white md:text-2xl">
            Welcome to LSOYS
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-white-100 font-semibold">
            Have questions or need assistance? Contact us and we'll respond
            promptly. Let's connect!
          </p>

          <form className=" mt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Sayan" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Das" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="sayan@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Write your message here..." />
            </LabelInputContainer>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <button
              className="bg-[#020617] relative group/btn block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#E4ECFF40_inset,0px_-1px_0px_0px_#E4ECFF40_inset] "
              type="submit"
            >
              Send Message &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </HoverBorderGradient>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
