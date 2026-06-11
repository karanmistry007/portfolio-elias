import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Portfolio from './pages/Portfolio';

// ─── App ─────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/all-projects" element={<Navigate to="/work" replace />} />
        <Route path="/:section" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
