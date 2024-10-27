"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const TestimonialTooltip = ({
  active = false,
  content,
}: {
  active: boolean;
  content: string;
}) => {
  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0); // going to set this value on mouse move

  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-10, 10], [-25, 25]), springConfig);

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-10, 10], [-20, 20]),
    springConfig
  );

  const [invert, setInvert] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const tooltipElement = document.getElementById("tooltip");
      if (tooltipElement) {
        const rect = tooltipElement.getBoundingClientRect();
        if (rect.right > window.innerWidth || rect.left < 0) {
          setInvert(true);
        } else {
          setInvert(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [content, active]);

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <div className="-mr-2 relative group" key={content}>
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              id="tooltip"
              initial={{ opacity: 0, y: 10, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 10, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className={`absolute ${
                invert ? "right-[-20px]" : "left-[-20px]"
              }  flex text-xs items-center justify-center rounded-md bg-black z-50 shadow-xl px-2 py-1`}
            >
              <div className="font-bold text-white relative z-30 text-xs">
                {content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialTooltip;
