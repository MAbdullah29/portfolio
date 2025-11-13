import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Project from "./Pages/Projects/Project";
import AboutUs from "./Pages/AboutUs/About";
import ContactUs from "./Pages/ContactUs/Contact";
import Layout from "./Pages/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
