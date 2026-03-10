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

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wmo-form" element={<WMOForm />} />
            <Route path="/alle-onderwerpen" element={<AllTopics />} />
            <Route path="/categorie/:category" element={<CategoryDetail />} />
            <Route path="/artikel/:category/:topic" element={<Article />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
