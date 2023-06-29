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
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(bannerElem.current, {
        x: 600,
        duration: 10,
      });

      //   pin: backdrop.current,
      //   start: "50% 80%",
      //   end: "top, 30%",
      //   markers: {
      //     startColor: "green",
      //     endColor: "red",
      //     fontWeight: "80px",
      //   },
      return () => ctx.revert();
    });
  }, []);

  return (
    <div>
      <div className="sticky top-0" useRef={navbarElem}>
        <Navbar />
      </div>
      <div className="flex justify-center opacity-50" ref={backdrop}>
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
      </div>
      ;
      <div className="h-screen overflow-hidden" useRef={bannerElem}>
        <Banner />
      </div>
      <div ref={footerElem}>
        <Footer />
      </div>
      ;
    </div>
  );
};

export default Backdrop;
