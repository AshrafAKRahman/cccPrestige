import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(false);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document
      .querySelectorAll("video, p, h1, h2, h3, h4, h5, h6")
      .forEach((el) => {
        el.addEventListener("mouseover", expandCursor);
        el.addEventListener("mouseleave", shrinkCursor);
      });
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document
      .querySelectorAll("video, p, h1, h2, h3, h4, h5, h6")
      .forEach((el) => {
        el.removeEventListener("mouseover", expandCursor);
        el.removeEventListener("mouseleave", shrinkCursor);
      });
  };

  const onMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const expandCursor = () => {
    setExpanded(true);
  };

  const shrinkCursor = () => {
    setExpanded(false);
  };

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <motion.div
      animate={{
        scale: expanded ? 2.5 : 1,
      }}
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "2px solid #ffff",
        backgroundColor: "rgba(0,0,0,0.1)",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default CustomCursor;
