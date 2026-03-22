"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import text from "@/app/content/global-text.json";
import { GradientHeader } from "@/app/component/ui";
import {
  Projects,
  ProfileSection,
  Affiliation,
  HistoryScreen,
  SoftwareSection,
  ContactUsSection,
} from "@/app/component/layout";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <div className="flex flex-col font-sans dark:bg-blac">
      <section
        aria-label="landing"
        className="relative main-container overflow-hidden"
      >
        <div className="overlay"></div>
        {/* <div className="backgroundVideo"> */}
        <video
          ref={videoRef}
          src="/video/gmc_modal.webm"
          autoPlay
          muted
          loop
          playsInline
          className="backgroundVideo"
        />
        {/* </div> */}
        <div className="absolute h-36.25 w-full bottom-0 left-0 z-4">
          <Image
            // className="dark:invert"
            className="w-full object-cover"
            src="image/yellow_wave.svg"
            alt="wave logo"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="absolute h-36.25 w-full bottom-0 right-0 z-4">
          <Image
            // className="dark:invert"
            className="w-full object-cover"
            src="image/yellow_wave.svg"
            alt="wave logo"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="absolute w-200 h-auto bottom-[-38px] right-[-86px] z-4">
          <Image
            // className="dark:invert"
            className="w-full object-cover"
            src="image/group_house.svg"
            alt="house logo"
            width={100}
            height={100}
            priority
          />
        </div>

        <div className="w-full flex z-5 relative justify-center items-center mt-[160px]">
          <div className="md:mx-[320px] px-4 py-8 sm:px-8 md:px-12 lg:px-16">
            <GradientHeader
              text="OUR VISION"
              className="justify-center"
              textMessage={text.vision}
              messageClass="font-medium  md:!text-[22px]"
            />
          </div>
        </div>
      </section>

      <section className="px-31.25 py-14">
        <Projects />
      </section>
      <section className="px-31.25 pt-14">
        <ProfileSection />
      </section>
      <section className="pb-14">
        <Affiliation />
      </section>
      <section className="pb-14 px-31.25">
        <HistoryScreen />
      </section>
      <section className="pb-14 ">
        <SoftwareSection />
      </section>
      <section className="p">
        <ContactUsSection />
      </section>
      {/* <GradientHeader text="PROJECTS" /> */}
      {/* <image src="/app_logo.svg" height="1  0" /> */}
      {/* <Image
        className="dark:invert"
        src="image/app_logo.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      /> */}
    </div>
  );
}
