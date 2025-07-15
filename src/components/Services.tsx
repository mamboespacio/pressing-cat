"use client"

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from 'next/image'
import { Link } from "@/i18n/routing"


export const Services = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 0.8], ["0%", "-100%"]);

  return (
    <section ref={targetRef} className="p-6 lg:p-8 relative h-[300vh]">
      <div className="sticky top-0 flex flex-col h-screen items-start justify-center overflow-hidden">
        <h4 className="font-mono text-xs uppercase mb-4">Our Services</h4>
        <motion.div style={{ x }} className="bg-primary-100 flex flex-row gap-8  pr-8">
          {services.map((service, i) => {
            return <Card card={service} key={i} />;
          })}
        </motion.div>
          <Link
            href="/calculator" className="absolute mt-8 -z-10 h-[460px] font-sans w-[88vw] lg:w-[100vw] uppercase antialiased inline-flex items-center justify-center px-5 py-3 text-7xl text-center bg-white text-primary-100 hover:bg-primary-50 focus:ring-4 focus:ring-gray-100">
            Get a Quote
          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
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
    title: "Mastering",
    description: "We provide mastering solutions that refine your final mix for optimal sound on vinyl. We offer analog and hybrid mastering solutions that perfect the final mix to ensure the best sound quality for vinyl. Our engineers expertly balance frequencies, dynamics and clarity, delivering a polished result that honors your artistic vision and resonates across all playback systems.",
    image: "/01.jpg"
  },
  {
    id: "02", 
    title: "Pressing & Cutting",
    description: "We tailor vinyl pressings to any required format, color, or quantity, always using top-quality granulate. Our Neumann VMS 70 and 80 machines—whether cutting in lacquer or DMM—ensure exceptional results. Each record then undergoes a meticulous triple quality check by eye and by hand, not by machine, guaranteeing a flawless finish every time.",
    image: "/02.jpg"
  },
  {
    id: "03",
    title: "DESIGN & PACKAGING",
    description: "At Pressing Cat we know that covers and packaging are as important as the sound quality of the vinyl, that's why we have a creative team dedicated to developing the graphic design needed for each release. Our creatives and designers collaborate at any stage of the cover artwork process, whether you already have a fully formed idea or just an initial concept. Packaging does more than just protect the vinyl, it actually helps the vinyl become unique.",
    image: "/03.jpg"
  },
  {
    id: "04",
    title: "SHIPPING & DELIVERY",
    description: "Our strategic location gives us direct access to the main logistics centers, which reduces transit times and simplifies logistics procedures depending on the country of shipment. Our agreements guarantee deliveries within the agreed deadlines so that the vinyls arrive at their destination within the agreed delivery time.",
    image: "/05.jpg"
  }
];

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className="w-[88vw] lg:w-[100vw] h-full flex">
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col justify-end gap-4">
          <h1 className="font-sans font-medium flex justify-start text-xl lg:text-2xl uppercase antialiased">
            <span className="mr-2 px-2 bg-primary-50 text-black">{card.id}</span>
            <span className="text-primary-50">{card.title}</span>
          </h1>
          <p className="font-mono font-light text-left text-lg lg:text-4xl antialiased">
            {card.description}
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="h-[460px] relative">
            <Image
              src={card.image}
              alt={card.title}
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>    
  )
}