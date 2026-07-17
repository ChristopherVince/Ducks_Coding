import { useState } from 'react';
import ProjectsPage from './ProjectsPage';
import Home from './views/Home/Home';
import type { Page } from './types';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  if (page === 'projects') {
    return <ProjectsPage onBack={() => { setPage('home'); window.scrollTo(0, 0); }} />;
  }

  return <Home setPage={setPage} />;
}
