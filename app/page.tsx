"use client";
import React, { use, useEffect, useState } from "react";
import SimliOpenAI from "./SimliOpenAI";
import DottedFace from "./Components/DottedFace";
import SimliHeaderLogo from "./Components/Logo";
import Navbar from "./Components/Navbar";
import Image from "next/image";
import GitHubLogo from "@/media/github-mark-white.svg";

interface avatarSettings {
  name: string;
  openai_voice: "alloy"|"ash"|"ballad"|"coral"|"echo"|"sage"|"shimmer"|"verse";
  openai_model: string;
  simli_faceid: string;
  initialPrompt: string;
}

// Customize your avatar here
const avatar: avatarSettings = {
  name: "Mohammad",
  openai_voice: "ash",
  openai_model: "gpt-4o-realtime-preview-2024-12-17", // Use "gpt-4o-mini-realtime-preview-2024-12-17" for cheaper and faster responses or gpt-4o-realtime-preview-2024-12-17
  simli_faceid: "d9c1545a-daca-4b46-bf5e-2245b634f406",
  initialPrompt:
    "You are an AI agent named Maya. You specialise in dealing with customers' queries. You have to answer questions about products. When you are finding information, Let the customer know that you are searching for information. Keep it engaging and casual."
};

const Demo: React.FC = () => {
  const [showDottedFace, setShowDottedFace] = useState(true);

  const onStart = () => {
    console.log("Setting setshowDottedface to false...");
    setShowDottedFace(false);
  };

  const onClose = () => {
    console.log("Setting setshowDottedface to true...");
    setShowDottedFace(true);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center font-abc-repro text-sm text-white p-8">
      {/* 
        If you'd like a custom logo at the top, uncomment and place your logo component:
        
        <div className="my-6">
          <Image
            src={MyCustomLogo}
            alt="Custom Logo"
            width={150}
            height={50}
            priority
            className="mx-auto"
          />
        </div>
      */}

      <div className="flex flex-col items-center gap-6 bg-effect15White p-6 pb-[40px] rounded-xl w-full">
      <SimliOpenAI
        openai_voice={avatar.openai_voice}
        openai_model={avatar.openai_model}
        simli_faceid={avatar.simli_faceid}
        initialPrompt={avatar.initialPrompt}
        onStart={onStart}
        onClose={onClose}
        showDottedFace={showDottedFace}
      />
    </div>
  </div>
);
};

export default Demo;
