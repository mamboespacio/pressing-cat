import Image from "next/image";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export default function Home() {
  
  return (
    <>
      <Hero/>
      <Services/>
      <Process/>
      <Footer/>
    </>
  );
}
