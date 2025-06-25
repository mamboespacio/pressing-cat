import { useScroll, useTransform, useInView, motion, inView } from 'framer-motion';
import React, { useRef, useEffect } from 'react';
import { fadeUp } from "@/components/animations";

interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef(null);
  const isInView = useInView(container);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.65", "start 0.25"]
  })

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  const words = paragraph.split(" ");
  
  return (
    <motion.p
      ref={container}
      variants={fadeUp}
      initial="initial"
      animate={isInView ? "active" : "initial"}
      className="font-sans font-medium flex flex-wrap text-center gap-2 text-sm lg:gap-3 lg:text-2xl uppercase antialiased"
    >
      {
        words.map((word, i) => {
          const start = i / words.length
          const end = start + (1 / words.length)
          return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
        })
      }
    </motion.p>
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
      <span className="absolute opacity-5">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  )
}