import React, { useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import Banner from "@/components/banner/Banner";
import LargeButton from "@/components/buttons/LargeButton";
import LargeText from "@/components/text/LargeText";

const LandingPage = () => {
  const boxes = useRef([null, null, null]);
  const currentIndex = useRef(0);
  const scrollDistance = useRef(0);
  const scrollThreshold = 300; // Adjust this value as needed

  const handleScroll = (event) => {
    const deltaY = event.deltaY;

    // Accumulate scroll distance
    scrollDistance.current += Math.abs(deltaY);

    if (scrollDistance.current >= scrollThreshold) {
      if (deltaY > 0) {
        // Scrolling down
        if (currentIndex.current < boxes.current.length - 1) {
          gsap.to(boxes.current[currentIndex.current], {
            opacity: 0,
            visibility: "hidden",
            duration: 0.5,
            ease: Power2.easeOut,
          });
          currentIndex.current += 1;
          gsap.to(boxes.current[currentIndex.current], {
            opacity: 1,
            visibility: "visible",
            duration: 0.5,
            ease: Power2.easeIn,
          });
        }
      } else if (deltaY < 0) {
        // Scrolling up
        if (currentIndex.current > 0) {
          gsap.to(boxes.current[currentIndex.current], {
            opacity: 0,
            visibility: "hidden",
            duration: 0.5,
            ease: Power2.easeOut,
          });
          currentIndex.current -= 1;
          gsap.to(boxes.current[currentIndex.current], {
            opacity: 1,
            visibility: "visible",
            duration: 0.5,
            ease: Power2.easeIn,
          });
        }
      }

      // Reset scroll distance
      scrollDistance.current = 0;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Banner />

      <div className="absolute top-1/4 text-center">
        <div
          ref={(el) => (boxes.current[0] = el)}
          className="boxA"
          style={{ opacity: 0 }}
        >
          <LargeText
            titleClassName="text-5xl text-bold text-white w-full"
            title="Welcome to Londons leading luxury lifestyle website"
          />
        </div>
        <div
          ref={(el) => (boxes.current[1] = el)}
          className="boxB"
          style={{ opacity: 0 }}
        >
          <LargeText
            titleClassName="text-5xl text-bold text-white"
            title="With over 15 years of experience in the industry we can cater for all your accomodation and transportation needs and wants"
          />
        </div>
        <div
          ref={(el) => (boxes.current[2] = el)}
          className="boxC"
          style={{ opacity: 0 }}
        >
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
