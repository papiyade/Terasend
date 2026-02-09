import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Countries from './components/Countries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ConformiteFloatingModal from './components/ConformiteFloatingModal';
import CGU from './components/CGU';
import Confidentialite from './components/Confidentialite';
import Securite from './components/Securite';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
                  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        {/* Route principale : Landing page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen">

              <Header />
              <main>
                <Hero />
                <Services />
                <HowItWorks />
                <Countries />
                <ConformiteFloatingModal />
                <Contact />
              </main>
              <CookieBanner />
              <Footer />

            </div>
          }
        />

        {/* Route vers la page CGU */}
        <Route path="/cgu" element={<CGU />} />
        {/* Route vers la page Politique de Confidentialité */}
        <Route path="/confidentialite" element={<Confidentialite />} />
        {/* Route vers la page Sécurité */}
        <Route path="/securite" element={<Securite />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;