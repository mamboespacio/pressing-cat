"use client"

import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import Paragraph from "./Paragraph";
import { ResponsivePlayer } from "@/components/ResponsivePlayer";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"], // empieza cuando top del target toca el top del viewport
});

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const opacity2 = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const paragraph = "At Pressing Cat, we are passionate about producing high quality vinyl records that excel in both sound and presentation. With a simple ordering system and a transparent price checker, we ensure that the ordering process is easy and accessible for artists, independent labels and record companies. In addition, we encourage open communication to ensure real-time feedback on every step of vinyl production."
  return (
    <>
      <header className="w-screen h-full overflow-hidden">
        <motion.div
          className="fixed w-screen h-screen opacity-[0.7]"
          style={{scale, opacity: opacity2}}
          ref={heroRef}
        >
          <ResponsivePlayer video="home"/>
          <div className="absolute inset-0 bg-black opacity-50" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-[20]">
          <motion.div
            id="info"
            style={{ opacity }}
            className="flex flex-col items-center justify-center"
          >
            <h1 className="font-sans text-center text-3xl md:text-7xl uppercase antialiased">
              Exceptional Sound,
              <br />Unmatched Craftsmanship
            </h1>
            <a href="#" className="font-mono bg-white p-4 rounded-full text-primary-100 mt-4 text-lg uppercase antialiased hover:bg-primary-100 hover:text-white transition-colors">
              Get a Quote
            </a>
          </motion.div>
        </div>
      </header>
      <section className="flex p-6 lg:p-8 justify-center items-center">
        <Paragraph paragraph={paragraph}/>
      </section>
    </>
  )
}