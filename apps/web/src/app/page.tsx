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
import axios from "axios";
import TestimonialForm from "@/components/testimonial-form";

export default async function Campaign() {
  let testimonials = undefined;
  try {
    const testimonialsRaw = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL + "/data/testimonials"
    );
    testimonials = testimonialsRaw.data.data;
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Hero />
      <VideoIntro />
      {/* <Feature /> */}
      {/* <MobileConvenience /> */}
      <Testimonials testimonials={testimonials} />
      <TestimonialForm />
      {/* <Faqs /> */}
      <Footer />
    </>
  );
}
