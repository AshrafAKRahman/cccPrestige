import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";

const Backdrop = () => {
  const backdrop = useRef(null);
  const footerElem = useRef();
  const navbarElem = useRef();
  const bannerElem = useRef();
  const pink = useRef();
  const blue = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(bannerElem.current, {
      scrollTrigger: {
        trigger: bannerElem.current,
        scrub: 1,
        pin: bannerElem.current,
        start: "bottom 60%",
        end: "bottom 10%",
        markers: true,
      },
      // x: 600,
      duration: 10,
    });
  }, []);

  return (
    <div>
      <div className="sticky top-0" ref={navbarElem}>
        <Navbar />
      </div>
      <div
        className="relative bg-black h-screen w-screen flex justify-center opacity-70"
        ref={blue}
      >
        <div className="absolute flex center">
          <Image
            src="/star_background.gif"
            alt="background"
            width={0}
            height={0}
            style={{
              objectFit: "cover",
              width: "50%",
              height: "50%",
            }}
          />

          <Image
            src="/star_background.gif"
            alt="background"
            width={0}
            height={0}
            style={{
              objectFit: "cover",
              width: "50%",
              height: "50%",
            }}
          />
          <div className="absolute mb-40" ref={bannerElem}>
            <Banner />
          </div>
        </div>
      </div>
      <div className="h-screen bg-green-200 overflow-hidden"></div>
      <div ref={footerElem}>
        <Footer />
      </div>
      ;
    </div>
  );
};

export default Backdrop;
