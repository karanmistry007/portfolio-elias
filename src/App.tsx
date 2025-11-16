import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

// ? MAIN APP COMPONENT
function App() {
  // ? RENDER
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* // ? HOME ROUTE */}
          <Route path="/" element={<Portfolio />} />

          {/* // ? DYNAMIC SECTION ROUTE */}
          <Route path="/:section" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;