"use client"

import { useEffect, useState } from "react"
import Image from "next/image";
import { useAnimate, motion, AnimatePresence } from 'framer-motion';
import { UAVOSDSansMono } from "@/fonts/Fonts";

export const Loader = () => {
  // const [scope, animate] = useAnimate();
  const [isLoading, setIsLoading] = useState(true);

  // const sequence: [any, { [key: string]: any }, { duration: number }][] = [
  //   ["#logo", { scale: 1 }, { duration: 0.35 }],
  //   ["#percent", { scale: 1, opacity: 0 }, { duration: 0.35 }],
  //   ["#loaderBg", { y: "-100%" }, { duration: 0.35 }],
  // ]

  const Preloader = () => {
    useEffect( () => {
      if(index == words.length - 1) return;
      setTimeout( () => {
        setIndex(index + 1)
      }, 10)
    }, [index]);

    return (
      <>      
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className="fixed flex h-screen w-screen bg-primary-50 z-40"
        />
        <div className="fixed w-screen h-screen z-50 p-8">
          <motion.div
            id="logo"
            className="relative w-[70px] h-[70px]"
            variants={scaleDown} initial="initial" exit="exit"
            style={{ originX: 0, originY: 0 }}
          >
            <Image
              src="/logo-black.svg"
              alt="Pressing CAT Logo"
              className="top-0"
              fill
              style={{objectFit: "contain"}}             
            />
          </motion.div>
        </div>
        <div className="fixed flex items-end justify-end w-screen h-screen z-50">
            <p

              className={`${UAVOSDSansMono.className} text-primary-100 text-7xl text-right p-8 uppercase antialiased`}
            >
              <span></span>{words[index]}
            </p>
        </div>
      </>
    )
  }

  const [index, setIndex] = useState(0);
  const words = ["*", "-", "/", "+"]

  const scaleDown = {
    initial: {
      scale: 4,
      opacity: 1
    },
    exit: {
      scale: 1,
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  }
  const slideUp = {
    initial: {
      top: 0
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000)
  }, [])

  return (
    <AnimatePresence mode='wait'>
      {isLoading && <Preloader />}
    </AnimatePresence>
  )
}