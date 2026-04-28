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
  FooterSection,
  Navbar,
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
      <Navbar />
      <h1 className="sr-only">
        Consult2T — Urban Planning &amp; Architecture in Bhutan
      </h1>
      <main>
      <section
        aria-label="landing"
        className="relative main-container overflow-hidden"
      >
        <div className="overlay"></div>
        {/* <div className="backgroundVideo"> */}
        <video
          ref={videoRef}
          src="/video/gmc_modal.webm"
          poster="/video/poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="backgroundVideo"
        />
        {/* </div> */}
        <div aria-hidden="true" className="absolute w-full bottom-0 left-0 z-4">
          <Image
            className="w-full object-cover"
            src="image/yellow_wave.svg"
            alt=""
            width={100}
            height={100}
            priority
          />
        </div>
        {/* <div className="absolute h-36.25 w-full bottom-0 right-0 z-4">
          <Image
            // className="dark:invert"
            className="w-full object-cover"
            src="image/yellow_wave.svg"
            alt="wave logo"
            width={100}
            height={100}
            priority
          />
        </div> */}
        <div aria-hidden="true" className="absolute w-full md:w-200 h-auto bottom-[-38px] right-[-86px] z-4">
          <Image
            className="w-full object-cover"
            src="image/group_house.svg"
            alt=""
            width={100}
            height={100}
            priority
          />
        </div>

        <div className="w-full flex z-5 relative justify-center items-center mt-[120px]">
          <div className="md:mx-[100px] lg:mx-[320px] px-4 py-8 sm:px-8 md:px-12 lg:px-16">
            <GradientHeader
              text="OUR VISION"
              className="justify-center"
              textMessage={text.vision}
              messageClass="font-medium  md:!text-[22px]"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="p-5 md:px-31.25 md:py-14">
        <Projects />
      </section>
      <section id="our-team" className="p-5 md:px-31.25 md:py-14">
        <ProfileSection />
      </section>
      <section id="affiliations" className="pb-14">
        <Affiliation />
      </section>
      <section id="history" className="pb-5 px-5 md:pb-14 md:px-31.25">
        <HistoryScreen />
      </section>
      <section className="pb-14 ">
        <SoftwareSection />
      </section>
      <section id="contact-us" className="p">
        <ContactUsSection />
      </section>
      </main>
      <FooterSection />
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
