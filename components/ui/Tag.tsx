import { durk } from "@/lib/fonts";
import React from "react";

const Tag = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  return (
    <span
      data-animation-tag
      data-delay={delay}
      className={`${durk.className} ${className} opacity-0 translate-x-5 tracking-wider text-2xl md:text-4xl z-30 bg-primary px-5 md:px-6 text-white uppercase py-2.5 md:py-3`}
    >
      {text}
    </span>
  );
};

export default Tag;
