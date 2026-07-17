import "./Home.css";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import About from "./Sections/About/About";
import Faq from "./Sections/Faq/Faq";
import LeadForm from "./Sections/LeadForm/LeadForm";
import LogoBand from "./Sections/LogoBand/LogoBand";
import Process from "./Sections/Process/Process";
import Services from "./Sections/Services/Services";
import SocialProof from "./Sections/SocialProof/SocialProof";
import BeforeAfter from "./Sections/BeforeAfter/BeforeAfter";
import Hero from "./Sections/Hero/Hero";
import type { Route, Page } from "../../types";

export default function Home({ setPage }: { setPage: (page: Page) => void }) {
  const [route, setRoute] = useState<Route>("pyme");

  return (
    <div className="home" id="top">
      <Navbar route={route} setRoute={setRoute} />
      <Hero route={route} setRoute={setRoute} />
      <LogoBand />
      <BeforeAfter />
      <Services route={route} />
      <Process />
      <LeadForm />
      <SocialProof setPage={setPage} />
      <Faq />
      <About />
      <Footer />
    </div>
  );
}
