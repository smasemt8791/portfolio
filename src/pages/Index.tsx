import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedArticles from '@/components/FeaturedArticles';
import FeaturedApps from '@/components/FeaturedApps';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedArticles />
      <FeaturedApps />
      <Footer />
    </div>
  );
};

export default Index;
