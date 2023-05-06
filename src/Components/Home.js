import React from "react";
import HomeSlide from "./Slide";
import AboutUs from "./Aboutus";
import Footer from "./Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen justify-between">
        <HomeSlide className="mb-8" />
        <div className="flex-1 mb-8">
          <AboutUs />
        </div>
        <Footer className="mt-8" />
      </div>
    );
  }