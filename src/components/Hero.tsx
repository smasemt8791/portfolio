import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t('hero.subtitle')}
            </span>
          </h2>

          {/* Description */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto ${isArabic ? 'leading-loose' : 'leading-relaxed'}`}>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => navigate('/portfolio')}
              className="shadow-elegant hover:shadow-glow transition-smooth group"
            >
              {t('hero.viewPortfolio')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/magazine')}
              className="shadow-elegant"
            >
              {t('hero.readMagazine')}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate('/contact')}
            >
              {t('hero.contactMe')}
            </Button>
          </div>

          {/* Stats or highlights grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-12 max-w-3xl mx-auto">
            {[
              t('highlights.healthInformatics'),
              t('highlights.pwa'),
              t('highlights.ai'),
              t('highlights.ehr'),
              t('highlights.analytics'),
              t('highlights.automation'),
            ].map((highlight, index) => (
              <div
                key={index}
                className="p-4 rounded-lg glass-effect hover:shadow-elegant transition-smooth cursor-default"
              >
                <p className="text-sm font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
