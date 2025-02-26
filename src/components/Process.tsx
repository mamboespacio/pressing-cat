import { OffBit, UAVOSDSansMono } from "@/fonts/Fonts";
import Image from "next/image";

export const Process = () => {
  return (
    <section className="p-6 pb-[25vh] lg:p-8 lg:pb-[25vh] flex justify-center items-center">
      <div className="grid mx-auto lg:grid-cols-12">
        <div className="lg:col-span-2 lg:flex">
          <h4 className={`${UAVOSDSansMono.className} text-xs uppercase mb-4`}>Our Process</h4>
        </div>
        <div className="space-y-4 lg:space-y-24 lg:col-span-10">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <h3 className={`${UAVOSDSansMono.className} text-xs mb-4 antialiased`}>Produce</h3>
              <Image
                src="/master.svg"
                alt="master"
                width={80}
                height={80}            
              />
              <p className={`${OffBit.className} text-lg antialiased pt-4`}>Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
            </div>
            <div>
              <h3 className={`${UAVOSDSansMono.className} text-xs mb-4 antialiased`}>Design</h3>
              <Image
                src="/produce.svg"
                alt="produce"
                width={80}
                height={80}            
              />
              <p className={`${OffBit.className} text-lg antialiased pt-4`}>Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
            </div>
            <div>
              <h3 className={`${UAVOSDSansMono.className} text-xs mb-4 antialiased`}>Deliver</h3>
              <Image
                src="/deliver.svg"
                alt="deliver"
                width={80}
                height={80}            
              />
              <p className={`${OffBit.className} text-lg antialiased pt-4`}>Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}