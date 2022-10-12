import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const checkVariants = {
  initial: {
    color: "#fff",
  },
  checked: {
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
  },
};

const boxVariants = {
  checked: {
    background: "#8b5cf6",
    transition: {
      duration: 0.1,
    },
  },
  unchecked: {
    background: "#e1e1e1",
    transition: {
      duration: 0.1,
    },
  },
};

function CheckBox({ checked, checkHandler }) {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      variants={boxVariants}
      animate={checked ? "checked" : "unchecked"}
      className="p-[6px] mr-4 min-h-7 min-w-7 h-7 w-7 flex justify-center items-center rounded-md cursor-pointer shadow-md"
      onClick={checkHandler}
    >
      <motion.svg
        className="flex justify-center items-center stroke-white w-full h-full "
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          style={{ pathLength, opacity }}
          variants={checkVariants}
          animate={checked ? "checked" : "unchecked"}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></motion.path>
      </motion.svg>
    </motion.div>
  );
}

export default CheckBox;
