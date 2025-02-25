import Image from "next/image"
import { OffBit, UAVOSDSansMono } from "@/fonts/Fonts";


export const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 bg-primary-50 relative">
      <div className="mx-auto py-16 bottom-0 w-full">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Pressing CAT Logo"
                width={120}
                height={90}
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-2xl">
            <div className={`${OffBit.className} antialiased`}>
              <h2 className="mb-6 text-sm font-semibold text-primary-100 uppercase">FOLLOW US</h2>
              <ul className="text-primary-100">
                <li className="mb-4">
                  <a href="/" className="hover:underline">Instagram</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">SoundCloud</a>
                </li>
              </ul>
            </div>
            <div className={`${OffBit.className} antialiased`}>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Services</h2>
              <ul className="text-primary-100">
                <li className="mb-4">
                  <a href="/" className="hover:underline ">Pressing</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">Artwork</a>
                </li>
              </ul>
            </div>
            <div className={`${OffBit.className} antialiased`}>
              <h2 className="mb-6 text-sm font-semibold text-primary-100 uppercase">Legal</h2>
              <ul className="text-primary-100">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}