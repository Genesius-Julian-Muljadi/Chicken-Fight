"use client";

import React from "react";
import videoData from "@/data/video/videoData";
import { CldVideoPlayer } from "next-cloudinary";

export function VideoIntro() {
  return (
    <div className="container px-5 overflow-hidden rounded-xl relative mx-auto mt-4 lg:max-w-6xl">
      <video
        className="mx-auto min-w-[75vw] max-w-[90vw] rounded-lg"
        controls
        aria-label="cock-fight-video"
      >
        <source
          src={
            videoData.videoIntro ||
            "https://docs.material-tailwind.com/demo.mp4"
          }
          type={"video/" + (videoData.videoType || "mp4")}
        />
        Your browser does not support the video tag.
      </video>
      {/* {videoData.videoIntro ? (
          <CldVideoPlayer
            className="h-full w-full rounded-lg"
            src={videoData.videoIntro}
          />
        ) : (
          <span>insert video here</span>
        )} */}
    </div>
  );
}

export default VideoIntro;
