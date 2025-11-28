import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturedArticles = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const articles = [
    {
      id: 1,
      title: 'AI Integration in Healthcare: Survey of U.S. Health System Leaders',
      excerpt: 'Comprehensive analysis of AI adoption challenges and opportunities in U.S. healthcare systems.',
      category: 'Artificial Intelligence',
      date: '2024',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Evolution of AI in Healthcare: 30-Year Bibliometric Analysis',
      excerpt: 'Three decades of AI research in healthcare reveals transformative trends and future directions.',
      category: 'Research',
      date: '2025',
      readTime: '12 min read',
    },
    {
      id: 3,
      title: 'AI-Powered Medical Documentation Systems',
      excerpt: 'Systematic review of automated clinical documentation and its impact on healthcare efficiency.',
      category: 'EHR Systems',
      date: '2025',
      readTime: '10 min read',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('featured.articles')}</h2>
            <p className="text-muted-foreground">
              Latest insights from health informatics research
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate('/magazine')}
            className="hidden md:flex"
          >
            View All
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card
              key={article.id}
              className="p-6 hover:shadow-elegant transition-smooth cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/magazine/${article.id}`)}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {article.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary group-hover:translate-x-1 transition-transform"
                  >
                    {t('featured.readMore')}
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button onClick={() => navigate('/magazine')}>
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
