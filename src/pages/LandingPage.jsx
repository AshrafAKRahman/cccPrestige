// import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Banner from "@/components/banner/Banner";
import LargeButton from "@/components/buttons/LargeButton";
import LargeText from "@/components/text/LargeText";
import React, { useEffect, useRef } from "react";

// const LandingPage = (props) => {
//   const boxA = useRef(null);
//   const boxB = useRef(null);
//   const boxC = useRef(null);

//   const handleScroll = (event) => {
//     const deltaY = event.deltaY;

//     if (deltaY > 0) {
//       // Scrolling down
//       if (boxA.current.style.opacity === "0") {
//         gsap.to(boxA.current, { opacity: 1 });
//         gsap.to(boxB.current, { opacity: 0 });
//         gsap.to(boxC.current, { opacity: 0 });
//       } else if (boxB.current.style.opacity === "0") {
//         gsap.to(boxB.current, { opacity: 1 });
//         gsap.to(boxA.current, { opacity: 0 });
//         gsap.to(boxC.current, { opacity: 0 });
//       } else if (boxC.current.style.opacity === "0") {
//         gsap.to(boxC.current, { opacity: 1 });
//         gsap.to(boxA.current, { opacity: 0 });
//         gsap.to(boxB.current, { opacity: 0 });
//       }
//     } else if (deltaY < 0) {
//       // Scrolling up
//       if (boxC.current.style.opacity === "1") {
//         gsap.to(boxC.current, { opacity: 0 });
//         gsap.to(boxB.current, { opacity: 1 });
//       } else if (boxB.current.style.opacity === "1") {
//         gsap.to(boxB.current, { opacity: 0 });
//         gsap.to(boxA.current, { opacity: 1 });
//       } else if (boxA.current.style.opacity === "1") {
//         gsap.to(boxA.current, { opacity: 0 });
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("wheel", handleScroll);

//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <Banner />
//       <div ref={boxA} className="boxA" style={{ opacity: 0 }}>
//         <LargeText
//           titleClassName="text-5xl text-bold text-white"
//           title="Hello World !"
//         />
//       </div>
//       <div ref={boxB} className="boxB" style={{ opacity: 0 }}>
//         <LargeText
//           titleClassName="text-5xl text-bold text-white"
//           title="Hello you !"
//         />
//       </div>
//       <div ref={boxC} className="boxC" style={{ opacity: 0 }}>
//         <LargeText
//           titleClassName="text-5xl text-bold text-white"
//           title="Hello C!"
//         />
//       </div>
//       <div className="absolute mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
//         <LargeButton
//           text="Book now"
//           href="/Properties"
//           className="bg-blue-200 shadow-xl shadow-white/30"
//         />
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
const LandingPage = (props) => {
  const boxes = useRef([null, null, null]);
  const currentIndex = useRef(0);

  const handleScroll = (event) => {
    const deltaY = event.deltaY;

    if (deltaY > 0) {
      // Scrolling down
      if (currentIndex.current < boxes.current.length - 1) {
        gsap.to(boxes.current[currentIndex.current], {
          opacity: 0,
          visibility: "hidden",
        });
        currentIndex.current += 1;
        gsap.to(boxes.current[currentIndex.current], {
          opacity: 1,
          visibility: "visible",
        });
      }
    } else if (deltaY < 0) {
      // Scrolling up
      if (currentIndex.current > 0) {
        gsap.to(boxes.current[currentIndex.current], {
          opacity: 0,
          visibility: "hidden",
        });
        currentIndex.current -= 1;
        gsap.to(boxes.current[currentIndex.current], {
          opacity: 1,
          visibility: "visible",
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div>
      <Banner />
      <div
        ref={(el) => (boxes.current[0] = el)}
        className="boxA"
        style={{ opacity: 1, visibility: "visible" }}
      >
        <LargeText
          titleClassName="text-5xl text-bold text-white"
          title="Hello World !"
        />
      </div>
      <div
        ref={(el) => (boxes.current[1] = el)}
        className="boxB"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        <LargeText
          titleClassName="text-5xl text-bold text-white"
          title="Hello you !"
        />
      </div>
      <div
        ref={(el) => (boxes.current[2] = el)}
        className="boxC"
        style={{ opacity: 0, visibility: "hidden" }}
      >
        <LargeText
          titleClassName="text-5xl text-bold text-white"
          title="Hello C!"
        />
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
