import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Banner from "@/components/banner/Banner";
import LargeButton from "@/components/buttons/LargeButton";
import LargeText from "@/components/text/LargeText";

const LandingPage = () => {
  const textA = React.createRef();
  const textB = React.createRef();
  const textC = React.createRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const handleScroll = (event) => {
        const deltaY = event.deltaY;

        gsap.to(textA.current, {
          scrollTrigger: {
            trigger: textA.current,
          },
          x: deltaY > 0 ? "+=100" : "-=100",
          duration: 0.05,
          scrub: true,
        });
      };
      window.addEventListener("wheel", handleScroll);

      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    });
  }, []);

  return (
    <div className="relative">
      <Banner />

      <div className="absolute top-1/4 text-center">
        <div ref={textA} className="textA">
          <LargeText
            titleClassName="text-5xl text-bold text-white w-full"
            title="Welcome to Londons leading luxury lifestyle website"
          />
        </div>
        <div ref={textB} className="textB">
          <LargeText
            titleClassName="text-5xl text-bold text-white"
            title="With over 15 years of experience in the industry we can cater for all your accomodation and transportation needs and wants"
          />
        </div>
        <div ref={textC} className="textC">
          <LargeText
            titleClassName="text-5xl text-bold text-white"
            title="Choose your vehicle and propoerty as well as any other concierge services in one place"
          />
        </div>
      </div>
      <div className="absolute mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <LargeButton
          text="Book now"
          href="/Properties"
          className="bg-blue-200 shadow-xl shadow-white/30"
        />
      </div>
    </div>
  );
};

export default LandingPage;
