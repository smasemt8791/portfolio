import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturedApps = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const apps = [
    {
      id: 1,
      name: 'BP Calculator',
      description: 'A specialized tool for monitoring and calculating blood pressure metrics, designed to assist healthcare professionals and individuals in tracking cardiovascular health.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://smasemt8791.github.io/BP_-calculator/',
    },
    {
      id: 2,
      name: 'Mini HIMS',
      description: 'A compact Hospital Information Management System designed to streamline patient records, appointments, and basic clinical workflows for smaller healthcare facilities.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://smasemt8791.github.io/Mini_HIMS/',
    },
    {
      id: 3,
      name: 'Fitness Health Calculator Suite',
      description: 'A comprehensive suite of health and fitness calculators including BMI, BMR, and other vital metrics to support personal health goals and monitoring.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://smasemt8791.github.io/fitness_health_calculator_suite/',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('featured.apps')}</h2>
            <p className="text-muted-foreground">
              Progressive Web Apps for healthcare excellence
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate('/portfolio')}
            className="hidden md:flex"
          >
            View All
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <Card
              key={app.id}
              className="p-6 hover:shadow-elegant transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {app.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {app.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {app.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/portfolio')}
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  {t('featured.viewDemo')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button onClick={() => navigate('/portfolio')}>
            View All Apps
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;
