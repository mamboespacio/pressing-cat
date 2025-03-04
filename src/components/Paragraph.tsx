import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import { OffBit, UAVOSDSansMono } from "@/fonts/Fonts";

interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({ paragraph }: ParagraphProps) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.65", "start 0.25"]
  })

  const words = paragraph.split(" ")
  return (
    <p
      ref={container}
      className={`${UAVOSDSansMono.className} flex flex-wrap text-justify gap-2 text-sm lg:gap-3 lg:text-3xl uppercase antialiased`}
    >
      {
        words.map((word, i) => {
          const start = i / words.length
          const end = start + (1 / words.length)
          return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
        })
      }
    </p>
  )
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className="relative">
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }
    </span>
  )
}

interface CharProps {
  children: string;
  progress: any;
  range: [number, number];
}

const Char = ({ children, progress, range }: CharProps) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span>
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  )
}