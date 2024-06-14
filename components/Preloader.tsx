'use client'
import React, { useEffect } from "react";
import { preLoaderAnim } from "./ui/PreloaderAnimation.js";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader h-[100vh] w-[100vw] bg-black text-white fixed bottom-0 left-0 ring-0 z-50 flex justify-center items-center overflow-hidden">
      <div className="texts-container flex text-[20px] items-center justify-between h-[60px] gap-2 sm:text-[32px] font-[800] overflow-hidden text-white">
        <span>Create,</span>
        <span>Innovate,</span>
        <span>Elevate.</span>
      </div>
    </div>
  );
};

export default PreLoader;