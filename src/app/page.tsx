import Header from "@/app/components/Header";
import HeaderMain from "@/app/components/Headermain"
import Hero from "@/app/components/Hero";
import HeroMain from "@/app/components/HeroMain";
import HeroBottom from "@/app/components/HeroBottom";
import Middle from "@/app/components/Middle";
import MiddleLow from "@/app/components/MiddleLow";
import Courses from "@/app/components/Courses";
import Team from "@/app/components/Team";
import Testimonial from "@/app/components/Testimonial";
import Footer from "@/app/components/Footer";
// import { Roboto } from "next/font/google";


// const roboto= Roboto({
// weight:"100",
// subsets:["latin"],
// display:"swap"


// })
export default function Home() {
  return (
    <div>
      <Header />
      <HeaderMain />
      <Hero />
      <HeroMain />
      <HeroBottom />
      <Middle />
      <MiddleLow />
      <Courses />
      <Team />
      <Testimonial />
      <Footer /> 
     </div>
    
  );
}
