"use client"

import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import { OffBit, UAVOSDSansMono } from "@/fonts/Fonts";
import Paragraph from "./Paragraph";

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  // useMotionValueEvent(scrollYProgress, "change", value => {
  //   console.log(value);
  // });
  const opacity = useTransform(scrollYProgress, [0, 0.025, 0.25], [1, 0.1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05, 0.25], [1, 1.5, 2]);
  const paragraph = "Based in Barcelona Pressing CAT combines a passion for music with expertise in vinyl production. We offer a full range of services, from mastering and pressing to custom packaging, ensuring your vinyl release is of the highest quality."
  return (
    <>
      <motion.div
        className="fixed flex justify-center items-center h-screen w-screen -z-50 pointer-events-none"
        style={{ opacity, scale }}
      >
        <h1 className={`${UAVOSDSansMono.className} text-3xl md:text-5xl xl:text-7xl uppercase antialiased`}>
          Who we are?
        </h1>
      </motion.div>
      
      <section className="flex h-screen p-6 lg:p-8 justify-center items-end">
        <Paragraph paragraph={paragraph}/>
      </section>
    </>
  )
}