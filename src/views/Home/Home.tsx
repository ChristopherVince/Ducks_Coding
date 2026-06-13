
import "./Home.css";
import About from "./Sections/About/About.js";
import Faq from "./Sections/Faq/Faq.js";
import LeadForm from "./Sections/LeadForm/LeadForm";
import LogoBand from "./Sections/LogoBand/LogoBand";
import Process from "./Sections/Process/Process";
import Services from "./Sections/Services/Services";
import SocialProof from "./Sections/SocialProof/SocialProof";
import BeforeAfter from "./Sections/BeforeAfter/BeforeAfter";
import Hero from "./Sections/Hero/Hero";
import { useState } from "react";

type Route = "pyme" | "enterprise";
export default function Home() {
  const [route, setRoute ] = useState<Route>("pyme");
  return (
    <div className="home">
      <Hero route={route} setRoute={setRoute} />
      <LogoBand />
      <BeforeAfter />
      <Services route={route} />
      <Process />
      <LeadForm />
      <SocialProof />
      <Faq />
      <About />
    </div>
  );
}