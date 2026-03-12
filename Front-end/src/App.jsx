import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WMOForm from './pages/WMOForm';
import CategoryDetail from './pages/CategoryDetail';
import AllTopics from './pages/AllTopics';
import Article from './pages/Article';
import LoginPage from './pages/LoginPage.jsx';
import PersonalPage from './pages/PersonalPage.jsx';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WMOHelp from "./pages/WMOHelp";
import WMOForm from "./pages/WMOForm";
import CategoryDetail from "./pages/CategoryDetail";
import AllTopics from "./pages/AllTopics";
import Article from "./pages/Article";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-blue-700 focus:shadow"
        >
          Ga direct naar inhoud
        </a>
        <Navbar />
        <main id="main-content" className="grow" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/wmo-help" element={<WMOHelp/>}/>
            <Route path="/alle-onderwerpen" element={<AllTopics />} />
            <Route path="/categorie/:category" element={<CategoryDetail />} />
            <Route path="/artikel/:category/:topic" element={<Article />} />
              <Route path="/wmo-form" element={<WMOForm/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/persoonlijke-gegevens" element={<PersonalPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
