import { OffBit, UAVOSDSansMono } from "@/fonts/Fonts";
import Image from 'next/image'


export const Services = () => {
  return (
    <section className="p-8 lg:py-48">
      <div className="grid mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-6 lg:py-16">
          <h1 className={`${UAVOSDSansMono.className} text-4xl mb-4 uppercase antialiased`}>
            Vinyl Pressing
          </h1>
          <p className={`${OffBit.className} text-2xl mb-10 antialiased mr-8`}>
            Experience the difference of hand-crafted vinyl at Pressing CAT. We offer high-quality pressings in a wide array of colors and effects, with short runs starting at 100 copies and fast turnaround times. 
            <br/><br/>
            Our on-site pressing and hand-sleeving process allows us to inspect each record for exceptional quality.
          </p>
          <a href="#" className={`${UAVOSDSansMono.className} antialiased inline-flex items-center justify-center px-5 py-3 text-xs text-center text-primary-100 border border-white rounded-full hover:bg-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-primary-100`}>
            Get a Quote
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
        <div className="relative lg:mt-0 lg:col-span-6 lg:flex">
          <Image
            src="/pressing.jpg"
            alt="Picture of the author"
            fill={true}
          />
        </div>
      </div>
      <div className="grid mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="relative lg:mt-0 lg:col-span-6 lg:flex">
          <Image
            src="/pressing.jpg"
            alt="Picture of the author"
            fill={true}
          />
        </div>
        <div className="place-self-center lg:col-span-6 lg:py-16 ml-8">
          <h1 className={`${UAVOSDSansMono.className} text-4xl mb-4 uppercase antialiased`}>
            Vinyl Pressing
          </h1>
          <p className={`${OffBit.className} text-2xl antialiased mb-10`}>
            Experience the difference of hand-crafted vinyl at Pressing CAT. We offer high-quality pressings in a wide array of colors and effects, with short runs starting at 100 copies and fast turnaround times. 
            <br/><br/>
            Our on-site pressing and hand-sleeving process allows us to inspect each record for exceptional quality.
          </p>
          <a href="#" className={`${UAVOSDSansMono.className} antialiased inline-flex items-center justify-center px-5 py-3 text-xs text-center text-primary-100 border border-white rounded-full hover:bg-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-primary-100`}>
            Get a Quote
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section>
  )
}