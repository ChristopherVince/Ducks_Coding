/* ============================================================
   App.jsx — Composición de la landing "Doble ruta"
   Depende de: data.jsx, ui.jsx, sections.jsx (cargados antes).
   Mantiene el estado de la ruta (PYME / Enterprise) y lo
   reparte a Nav, Hero y Services.
   ============================================================ */

const { useState: useAppState } = React;

function App() {
  const [route, setRoute] = useAppState('pyme'); // 'pyme' | 'enterprise'
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
