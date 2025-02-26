"use client"

import { useEffect, useState } from "react"
import Image from "next/image";
import { useAnimate, motion } from 'framer-motion';
import { UAVOSDSansMono } from "@/fonts/Fonts";

export const Loader = () => {
  const [scope, animate] = useAnimate();
  // const [isLoading, setIsLoading] = useState(true)

  const sequence: [any, { [key: string]: any }, { duration: number }][] = [
    ["#logo", { scale: 1 }, { duration: 0.35 }],
    ["#percent", { scale: 1, opacity: 0 }, { duration: 0.35 }],
    ["#loaderBg", { y: "-100%" }, { duration: 0.35 }],
  ]

  useEffect(() => {
    setTimeout(() => {
      animate(sequence);
    }, 1000)
  }, [])

  return (
    <>
    <div ref={scope}>
      <motion.div
        id="loaderContainer"
        className="fixed flex h-screen w-screen z-50"
        style={{ originX: 0, originY: 0 }}
      />
      <motion.div
        id="loaderBg"
        className="fixed flex h-screen w-screen bg-primary-50 z-40"
        style={{ y: 0, originX: 0, originY: 0 }}
      />
      <div className="fixed left-8 top-8 flex h-screen w-1/2 items-start justify-start z-50">
        <motion.div
          id="logo"
          className="text-4xl"
          style={{ scale: 4, originX: 0, originY: 0 }}
        >
          <Image
            src="/logo.svg"
            alt="Pressing CAT Logo"
            width={70}
            height={70}
          />
        </motion.div>
      </div>
      <div className="fixed right-8 bottom-8 flex h-screen w-1/2 items-end justify-end z-50">
        <h1 className={`${UAVOSDSansMono.className} text-7xl uppercase antialiased`}>
          35%
        </h1>
      </div>
      {/* <h1 className="text-4xl uppercase antialiased">Loading...</h1> */}
    </div>
    </>
  )
}