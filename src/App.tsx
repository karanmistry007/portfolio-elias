import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Portfolio from './pages/Portfolio';
import ComingSoon from './pages/ComingSoon';

// ─── App ─────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/:section" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;