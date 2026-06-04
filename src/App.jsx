import { useState } from 'react';
import { Nav, Hero, LogoBand, BeforeAfter, Services, Process, LeadForm, SocialProof, Faq, About, Footer } from './sections.jsx';
import ProjectsPage from './ProjectsPage.jsx';

export default function App() {
  const [route, setRoute] = useState('pyme');
  const [page, setPage] = useState('home');

  if (page === 'projects') {
    return <ProjectsPage onBack={() => { setPage('home'); window.scrollTo(0, 0); }} />;
  }

  return (
    <>
      <Nav route={route} setRoute={setRoute} />
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
    </>
  );
}
