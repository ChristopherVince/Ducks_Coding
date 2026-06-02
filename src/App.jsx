import { useState } from 'react';
import { Nav, Hero, LogoBand, BeforeAfter, Services, Process, LeadForm, SocialProof, Faq, About, Footer } from './sections.jsx';

export default function App() {
  const [route, setRoute] = useState('pyme');
  return (
    <>
      <span className="wf-tag">B · Doble ruta · React</span>
      <Nav route={route} setRoute={setRoute} />
      <Hero route={route} setRoute={setRoute} />
      <LogoBand />
      <BeforeAfter />
      <Services route={route} />
      <Process />
      <LeadForm />
      <SocialProof />
      <Faq />
      <About />
      <Footer />
    </>
  );
}
