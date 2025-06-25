import Image from "next/image"
import { OffBit, UAVOSDSansMono } from "@/fonts/Fonts";


export const Footer = () => {
  return (
    <footer className="p-6 lg:p-8 bg-primary-50 relative h-screen flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <a href="/" className="flex items-center">
            <Image
              src="/logo-black.svg"
              alt="Pressing CAT Logo"
              width={70}
              height={70}
            />
          </a>
        </div>
        {/* <div className="flex gap-4">
          <a href="/" className="flex items-center">
            <Image
              src="/e4dlogo.svg"
              alt="Pressing CAT Logo"
              width={140}
              height={70}
            />
          </a>
        </div> */}
      </div>
      <div className="md:flex md:justify-between pt-8 md:pt-16">
        <div className="flex flex-col">
          <p className={`${UAVOSDSansMono.className} antialiased text-xs text-primary-100`}>
            Part Of the 24LAB Family
          </p>
          <p className={`${OffBit.className} antialiased text-primary-100`}>
            © 2025 Pressing CAT. All Rights Reserved. Website by Antena
          </p>
        </div>
        <div className="flex flex-col pt-4 md:pt-0">
          <p className={`${UAVOSDSansMono.className} antialiased text-xs text-primary-100`}>
            Socials
          </p>
          <div className={`${OffBit.className} flex antialiased text-primary-100 gap-4`}>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">TikTok</a>
            <a href="#" className="hover:underline">SoundCloud</a>
            <a href="#" className="hover:underline">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  )
}