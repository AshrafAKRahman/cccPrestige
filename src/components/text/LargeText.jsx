import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LargeText = ({ titleClassName, title }) => {
  const largeTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: largeTextRef.current,
        start: "top 80%", // Adjust the scroll trigger start position as needed
        toggleActions: "play none none none", // Play the animation once on scroll and don't reverse it
      },
    });

    tl.from(largeTextRef.current, { opacity: 0, y: 50, duration: 1 });

    return () => {
      // Cleanup the ScrollTrigger instance when the component unmounts
      ScrollTrigger.getById(largeTextRef.current.id)?.kill();
    };
  }, []);

  return (
    <div ref={largeTextRef} className={titleClassName}>
      {title}
    </div>
  );
};

export default LargeText;

// const LargeText = ({ titleClassName, title }) => {
//   return (
//     <div className="relative">
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h1 className={`text-white ${titleClassName}`}>{title}</h1>
//       </div>
//     </div>
//   );
// };
// export default LargeText;
