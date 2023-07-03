import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Observer } from "gsap/dist/Observer";
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
  const green = useRef();
  const firstPage = useRef();
  const homePage = useRef();
  gsap.registerPlugin(ScrollTrigger, Observer);

  const [firstPageOn, setFirstPageOn] = useState(true);

  useEffect(() => {
    const observer = Observer.create({
      target: firstPage.current,
      type: "wheel, touch, scroll, pointer",
      onUp: () => {
        gsap.to(firstPage.current, {
          duration: 2,
          opacity: 0,
          onComplete: () => {
            setFirstPageOn(false);
          },
        });
      },
      onDown: () => {
        setFirstPageOn(false);
      },
    });
    return () => {
      observer.disable();
    };
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(blue.current, {
        scrollTrigger: {
          trigger: pink.current,
          scrub: 1,
          pin: pink.current,
          start: "top 40%",
          end: "bottom 10%",
          markers: true,
        },
      });
      gsap.to(green.current, {
        scrollTrigger: {
          trigger: pink.current,
          scrub: 1,
          pin: pink.current,
          start: "top 60%",
          end: "bottom 10%",
        },
      });
      return () => ctx.revert();
    });
  }, []);

  return (
    <div>
      {firstPageOn ? (
        <div
          ref={firstPage}
          className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-black"
        >
          <h1 className="text-white">Loading...</h1>
        </div>
      ) : (
        <div>
          {/* <div className="sticky top-0" ref={navbarElem}>
            <Navbar />
          </div> */}
          <div
            className="bg-blue-700 h-screen w-screen flex justify-center items-center"
            ref={blue}
          >
            {/* <div className="absolute flex justify-center">
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
            </div> */}
            <div className="absolute bg-pink-500 w-32 h-32" ref={pink}>
              {/* <Banner /> */}
            </div>
          </div>
          <div className="h-screen w-screen bg-green-200" ref={green}></div>
          {/* <div ref={footerElem}>
            <Footer />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Backdrop;
