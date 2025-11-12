import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './Home/Home';
import ArzepakCaseStudy from './Projects/ArzepakCaseStudy';
import DealCartPortfolio from './Projects/DealCart';
import HumaanAICaseStudy from './Projects/HumaanAI';
import PingCaseStudy from './Projects/Ping';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/arzepak" element={<ArzepakCaseStudy />} />
        <Route path="/case-study/dealcart" element={<DealCartPortfolio />} />
        <Route path="/case-study/humaan-ai" element={<HumaanAICaseStudy />} />
        <Route path="/case-study/ping" element={<PingCaseStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
