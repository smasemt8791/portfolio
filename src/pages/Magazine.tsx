import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Magazine = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [selectedCategory, setSelectedCategory] = useState('All Articles');

  const content = {
    en: {
      title: 'Health Informatics',
      titleHighlight: 'Magazine',
      subtitle: 'Insights on AI, digital transformation, and innovation in healthcare',
      allArticles: 'All Articles',
      readArticle: 'Read Article',
      source: 'Source:',
    },
    ar: {
      title: 'مجلة',
      titleHighlight: 'المعلوماتية الصحية',
      subtitle: 'رؤى حول الذكاء الاصطناعي والتحول الرقمي والابتكار في الرعاية الصحية',
      allArticles: 'جميع المقالات',
      readArticle: 'قراءة المقال',
      source: 'المصدر:',
    }
  };

  const t = content[isArabic ? 'ar' : 'en'];

  const categories = [
    'All Articles',
    'Artificial Intelligence',
    'EHR & Interoperability',
    'Data Analytics',
    'Telemedicine',
    'Medical Coding',
    'Cybersecurity',
    'Blockchain',
  ];

  const articles = [
    {
      id: 1,
      title: 'Artificial intelligence integration in healthcare: perspectives and trends in a survey of U.S. health system leaders',
      excerpt: 'A comprehensive survey of U.S. health system leaders examining the current state, perspectives, and trends of AI integration in healthcare.',
      category: 'Artificial Intelligence',
      date: '2024',
      readTime: '15 min read',
      source: 'BMC Digital Health',
      url: 'https://link.springer.com/article/10.1186/s44247-024-00135-3',
    },
    {
      id: 2,
      title: 'Evolution of artificial intelligence in healthcare: a 30-year bibliometric study',
      excerpt: 'A bibliometric analysis covering 30 years of AI research in healthcare, highlighting key trends, influential works, and the evolution of the field.',
      category: 'Artificial Intelligence',
      date: '2024',
      readTime: '20 min read',
      source: 'Frontiers in Medicine',
      url: 'https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2024.1505692/full',
    },
    {
      id: 3,
      title: 'Artificial Intelligence (AI) – Powered Documentation Systems in Healthcare: A Systematic Review',
      excerpt: 'A systematic review evaluating the efficiency, quality, and stakeholder experiences with AI-powered documentation systems in healthcare settings.',
      category: 'Artificial Intelligence',
      date: '2025',
      readTime: '18 min read',
      source: 'Journal of Medical Systems',
      url: 'https://link.springer.com/article/10.1007/s10916-025-02177-0',
    },
    {
      id: 4,
      title: 'Artificial intelligence in healthcare and medicine: promises, ethical challenges and governance',
      excerpt: 'Exploring the promises of AI in healthcare along with the ethical challenges and governance frameworks needed for responsible implementation.',
      category: 'Artificial Intelligence',
      date: '2024',
      readTime: '12 min read',
      source: 'European Journal of Medical Research',
      url: 'https://link.springer.com/article/10.1186/s40001-024-02093-8',
    },
    {
      id: 5,
      title: 'Blockchain-based access control and privacy preservation in healthcare: a comprehensive survey',
      excerpt: 'A comprehensive survey of blockchain-based access control frameworks in healthcare, covering permissioned and permissionless approaches with privacy-preserving techniques.',
      category: 'Blockchain',
      date: '2025',
      readTime: '25 min read',
      source: 'Cluster Computing',
      url: 'https://link.springer.com/article/10.1007/s10586-025-05308-x',
    },
    {
      id: 6,
      title: 'Medical data security and effective organization using integrated Blockchain principles in AI-based healthcare 6.0 infrastructures',
      excerpt: 'Developing the ISMDI system using integrated blockchain constructions for secure medical data interoperability in Healthcare 6.0 infrastructures.',
      category: 'Blockchain',
      date: '2025',
      readTime: '20 min read',
      source: 'Discover Computing',
      url: 'https://link.springer.com/article/10.1007/s10791-025-09588-0',
    },
    {
      id: 7,
      title: 'Generative AI, IoT, and blockchain in healthcare: application, issues, and solutions',
      excerpt: 'Discussing Blockchain and Generative AI in healthcare, including their uses, difficulties, and solutions for improving medical research and therapy.',
      category: 'Artificial Intelligence',
      date: '2025',
      readTime: '22 min read',
      source: 'Discover Internet of Things',
      url: 'https://link.springer.com/article/10.1007/s43926-025-00095-8',
    },
    {
      id: 8,
      title: 'A blockchain secured metaverse framework for scalable and immersive telemedicine',
      excerpt: 'A blockchain-secured metaverse framework designed for scalable and immersive telemedicine applications, enhancing patient care delivery.',
      category: 'Telemedicine',
      date: '2025',
      readTime: '18 min read',
      source: 'Scientific Reports',
      url: 'https://www.nature.com/articles/s41598-025-12068-6',
    },
    {
      id: 9,
      title: 'Digital Health Market Size to Worth USD 2688 Billion by 2035 at 22.55% CAGR',
      excerpt: 'Market research projecting the Global Digital Health Market to grow from USD 288.55 billion in 2024 to USD 2,688 billion by 2035.',
      category: 'Data Analytics',
      date: '2025',
      readTime: '8 min read',
      source: 'Vantage Market Research',
      url: 'https://www.prnewswire.com/news-releases/digital-health-market-size-to-worth-usd-2688-billion-by-2035-at-22-55-cagr--vantage-market-research-302584686.html',
    },
    {
      id: 10,
      title: 'Toward a New Era of Smart and Secure Healthcare Information Exchange Systems: Combining Blockchain and Artificial Intelligence',
      excerpt: 'A survey presenting the architecture of HIE systems and categorizing state-of-the-art techniques using blockchain and AI technologies.',
      category: 'EHR & Interoperability',
      date: '2024',
      readTime: '24 min read',
      source: 'Applied Sciences (MDPI)',
      url: 'https://www.mdpi.com/2076-3417/14/19/8808',
    },
    {
      id: 11,
      title: 'Cybersecurity governance in the healthcare sector during digital transformation: an integrated model and hybrid analytical approach',
      excerpt: 'Examining cybersecurity governance challenges in healthcare during digital transformation with an integrated model and hybrid analytical approach.',
      category: 'Cybersecurity',
      date: '2025',
      readTime: '20 min read',
      source: 'Frontiers in Public Health',
      url: 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1703689/full',
    },
    {
      id: 12,
      title: 'How AI Is Transforming Medical Coding in 2025',
      excerpt: 'Exploring how AI is transforming medical coding in 2025, improving accuracy, enhancing revenue cycle management, and reducing errors through NLP, CAC, and predictive analytics.',
      category: 'Medical Coding',
      date: '2025',
      readTime: '10 min read',
      source: 'Quad One',
      url: 'https://www.quadone.com/how-ai-is-transforming-medical-coding-in-2025',
    },
    {
      id: 13,
      title: 'Revamping medical coding with AI: a systematic review of interdisciplinary applications and perspectives for plastic surgery',
      excerpt: 'A systematic review of AI applications in medical coding across specialties, with perspectives for plastic surgery and interdisciplinary healthcare applications.',
      category: 'Medical Coding',
      date: '2024',
      readTime: '16 min read',
      source: 'Artificial Intelligence Surgery',
      url: 'https://www.oaepublish.com/articles/ais.2024.78',
    },
  ];

  // Filter articles based on selected category
  const filteredArticles = (selectedCategory === 'All Articles' || selectedCategory === t.allArticles)
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-16 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.title} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.titleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t.subtitle}
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'All Articles' ? t.allArticles : category}
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <Card
                key={article.id}
                className="p-6 hover:shadow-elegant transition-smooth cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                onClick={() => window.open(article.url, '_blank')}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs flex-wrap">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-primary transition-smooth line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.source} {article.source}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-full text-primary hover:text-primary transition-transform ${isArabic ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                  >
                    {t.readArticle}
                    <ArrowRight className={isArabic ? "mr-2 w-3 h-3" : "ml-2 w-3 h-3"} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Magazine;
