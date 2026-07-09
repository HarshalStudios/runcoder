import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import FeaturesSection from './components/FeaturesSection';
import ProSection from './components/ProSection';
import DownloadSection from './components/DownloadSection';
import SupportSection from './components/SupportSection';
import ContactSection from './components/ContactSection';
import { PrivacySection, TermsSection } from './components/LegalSections';
import VerifierSection from './components/VerifierSection';
import SecuritySection from './components/SecuritySection';
import RefundSection from './components/RefundSection';
import DeletionSection from './components/DeletionSection';
import { Page } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  // Handle page transitions with scroll to top
  const handlePageChange = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update window hash for bookmarking / browser back navigation support
    window.location.hash = page;
  };

  // Synchronize hash with page state on mount/change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'features', 'pro', 'download', 'support', 'contact', 'privacy', 'terms', 'verifier', 'security', 'refund', 'deletion'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    // Trigger on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderActiveSection = () => {
    switch (activePage) {
      case 'home':
        return <HomeSection onPageChange={handlePageChange} />;
      case 'features':
        return <FeaturesSection />;
      case 'pro':
        return <ProSection />;
      case 'download':
        return <DownloadSection />;
      case 'support':
        return <SupportSection />;
      case 'contact':
        return <ContactSection />;
      case 'privacy':
        return <PrivacySection />;
      case 'terms':
        return <TermsSection />;
      case 'verifier':
        return <VerifierSection />;
      case 'security':
        return <SecuritySection />;
      case 'refund':
        return <RefundSection />;
      case 'deletion':
        return <DeletionSection />;
      default:
        return <HomeSection onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0e15] text-[#f8fafc] flex flex-col justify-between font-sans">
      
      {/* Dynamic Header Toolbar Navigation */}
      <Navbar activePage={activePage} onPageChange={handlePageChange} />

      {/* Main Container Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="w-full h-full"
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Sitemap */}
      <Footer onPageChange={handlePageChange} />

    </div>
  );
}
