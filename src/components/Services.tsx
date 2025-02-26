"use client"

import { useRef } from "react";
import { OffBit, UAVOSDSansMono } from "@/fonts/Fonts";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from 'next/image'


export const Services = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 0.8], ["0%", "-72%"]);

  return (
    <section ref={targetRef} className="p-6 lg:p-8 relative h-[300vh]">
      <div className="sticky top-0 flex flex-col h-screen items-start justify-center overflow-hidden">
        <h4 className={`${UAVOSDSansMono.className} text-xs uppercase mb-4`}>Our Services</h4>
        <motion.div style={{ x }} className="flex flex-row gap-8">
          {services.map((service, i) => {
            return <Card card={service} key={i} />;
          })}
          <a href="#" className={`${OffBit.className} w-[88vw] lg:w-[100vw] uppercase antialiased inline-flex items-center justify-center px-5 py-3 text-7xl text-center bg-white text-primary-100 hover:bg-white focus:ring-4 focus:ring-gray-100`}>
            Get a Quote
          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        </motion.div>
      </div>
    </section>
  )
}

interface CardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: CardProps[] = [
  {
    id: "01", 
    title: "Pressing",
    description: "Experience the difference of hand-crafted vinyl at Pressing CAT. We offer high-quality pressings in a wide array of colors and effects, with short runs starting at 100 copies and fast turnaround times.",
    image: "/pressing.jpg"
  },
  {
    id: "02",
    title: "Mastering",
    description: "Our mastering engineers have years of experience in the industry and will ensure your music sounds its best on vinyl. We offer a range of mastering services, from standard stereo mastering to stem mastering and lacquer cutting.",
    image: "/pressing.jpg"
  },
  {
    id: "03",
    title: "Packaging",
    description: "Make your release stand out with custom vinyl packaging. We offer a range of options, from standard jackets and gatefolds to custom die-cut sleeves and colored vinyl.",
    image: "/pressing.jpg"
  }
];

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className="w-[88vw] lg:w-[80vw] flex">
      <div className="grid lg:grid-cols-12 gap-8 ">
      <div className="lg:col-span-8">
        <div className="aspect-[3/2] relative">
          <Image
            src={card.image}
            alt={card.title}
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className="lg:col-span-4 flex flex-col justify-start gap-4">
        <h1 className={`${UAVOSDSansMono.className} flex justify-start text-xl lg:text-2xl uppercase antialiased`}>
          <span className="lg:text-xs mr-1">{card.id}</span>
          {card.title}
        </h1>
        <p className={`${OffBit.className} text-justify text-lg lg:text-lg antialiased`}>
          {card.description}
        </p>
      </div>
      </div>
    </div>    
  )
}