import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import LiveDemo from './components/LiveDemo';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Onboarding from './pages/Onboarding';
import Subscription from './pages/Subscription';
import Dashboard from './pages/Dashboard';
import SavedPlans from './pages/SavedPlans';
import Recommendations from './pages/Recommendations';
import Preferences from './pages/Preferences';
import DashboardSubscription from './pages/DashboardSubscription';
import DashboardSettings from './pages/DashboardSettings';
import DashboardHelp from './pages/DashboardHelp';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <HowItWorks />
      <Features />
      <LiveDemo />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/saved-plans" element={<SavedPlans />} />
        <Route path="/dashboard/recommendations" element={<Recommendations />} />
        <Route path="/dashboard/preferences" element={<Preferences />} />
        <Route path="/dashboard/subscription" element={<DashboardSubscription />} />
        <Route path="/dashboard/settings" element={<DashboardSettings />} />
        <Route path="/dashboard/help" element={<DashboardHelp />} />
      </Routes>
    </Router>
  );
}

export default App;