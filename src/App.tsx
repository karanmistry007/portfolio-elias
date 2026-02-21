import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Portfolio from './pages/Portfolio';

// ─── App ─────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/:section" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;