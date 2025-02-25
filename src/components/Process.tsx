import { OffBit, UAVOSDSansMono } from "@/fonts/Fonts";

export const Process = () => {
  return (
    <section className="p-8">
      <div className="mx-auto">
        <div className="mb-8 lg:mb-16 text-center">
          <h2 className={`${UAVOSDSansMono.className} text-4xl mb-4 uppercase antialiased`}>Our Process</h2>
          <p className={`${OffBit.className} text-2xl antialiased`}>
          Get high-quality 12″ vinyl records with fast turnaround times.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <h3 className={`${UAVOSDSansMono.className} text-lg antialiased`}>Produce</h3>
            <p className={`${OffBit.className} text-2xl antialiased`}>Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
          </div>
          <div>
          <h3 className={`${UAVOSDSansMono.className} text-lg antialiased`}>Design</h3>
            <p className={`${OffBit.className} text-2xl antialiased`}>Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
          </div>
          <div>
          <h3 className={`${UAVOSDSansMono.className} text-lg antialiased`}>Deliver</h3>
            <p className={`${OffBit.className} text-2xl antialiased`}>Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
          </div>
        </div>
        <div className="flex justify-center mt-8 pb-48">
          <a href="#" className={`${UAVOSDSansMono.className} antialiased inline-flex items-center justify-center px-5 py-3 text-xs text-center text-primary-100 border border-white rounded-full hover:bg-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-primary-100`}>
            Get a Quote
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section>
  )
}