import { useState } from 'react';
// import { Nav, Hero, LogoBand, BeforeAfter, Services, Process, LeadForm, SocialProof, Faq, About, Footer } from './sections.js';
import ProjectsPage from './ProjectsPage.js';
import Home from './views/Home/Home';

export default function App() {
  const [route, setRoute] = useState('pyme');
  const [page, setPage] = useState('home');

  if (page === 'projects') {
    return <ProjectsPage onBack={() => { setPage('home'); window.scrollTo(0, 0); }} />;
  }

  return (
    <>
      <Home/>
      
    </>
  );
}
