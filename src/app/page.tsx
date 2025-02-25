import { Suspense } from "react";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Loader } from "@/components/Loader";

export default function Home() {
  
  return (
    <>
      {/* <Loader/> */}
      <Hero/>
      <Services/>
      <Process/>
      <Footer/>
    </>
  );
}
