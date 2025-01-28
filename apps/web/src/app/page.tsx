// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import MobileConvenience from "./mobile-convenience";
import Testimonials from "./testimonials";
import Faqs from "./faqs";
import Header from "@/components/imported/Header";

export default function Campaign() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Hero />
      <VideoIntro />
      {/* <Feature /> */}
      {/* <MobileConvenience /> */}
      <Testimonials />
      <Faqs />
      <Footer />
    </>
  );
}
