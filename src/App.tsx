import { useRoute } from '@/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import HowItWorksPage from '@/pages/HowItWorksPage';
import ReviewsPage from '@/pages/ReviewsPage';
import PricingPage from '@/pages/PricingPage';

function App() {
  const [route] = useRoute();

  const renderPage = () => {
    switch (route) {
      case '/how-it-works':
        return <HowItWorksPage />;
      case '/reviews':
        return <ReviewsPage />;
      case '/pricing':
        return <PricingPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
