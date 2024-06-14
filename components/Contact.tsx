"use client";
import { Canvas } from "@react-three/fiber";
import { SignupFormDemo } from "./ui/ContactForm";
import { OrbitControls } from "@react-three/drei";
import GridGlobeFull from "./ui/GridGlobeFull";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] relative pt-10" id='contact'>
      <GridGlobeFull />
      <SignupFormDemo />
    </div>
  );
};

export default Contact;
