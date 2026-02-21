import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Portfolio from './pages/Portfolio';
import ComingSoon from './pages/ComingSoon';
import AllProjects from './pages/AllProjects';

// ─── App ─────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/:section" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;