
import "./Home.css";
import About from "./Sections/About/About";
import Faq from "./Sections/Faq/Faq";
import LeadForm from "./Sections/LeadForm/LeadForm";
import LogoBand from "./Sections/LogoBand/LogoBand";
import Process from "./Sections/Process/Process";
import Services from "./Sections/Services/Services";
import SocialProof from "./Sections/SocialProof/SocialProof";
import BeforeAfter from "./Sections/BeforeAfter/BeforeAfter";
import Hero from "./Sections/Hero/Hero";
import { useState } from "react";

type Route = "pyme" | "enterprise";
export default function Home({ setPage }: { setPage: (page: string) => void }) {
  const [route, setRoute ] = useState<Route>("pyme");
  return (
    <div className="home">
      <Hero route={route} setRoute={setRoute} />
      <LogoBand />
      <BeforeAfter />
      <Services route={route} />
      <Process />
      <LeadForm />
      <SocialProof setPage={setPage} />
      <Faq />
      <About />
    </div>
  );
}