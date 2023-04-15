import React from "react";
import Header from "../Layouts/Header";
import Carousel from "../Components/Carousel";
import Footer from "../Layouts/Footer";
import { SecondSection } from "../Components/SecondSection";
import { FifthSection } from "../Components/FifthSection";
import { SixthSection } from "../Components/SixthSection";
import { SeventhSection } from "../Components/SeventhSection";
import FirstSection from "../Components/FirstSection";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Carousel />
      <FirstSection />
      <SecondSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </>
  );
}
