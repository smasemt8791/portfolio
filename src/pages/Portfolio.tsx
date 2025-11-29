import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolio = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'My',
      titleHighlight: 'Portfolio',
      subtitle: 'Progressive Web Applications built for healthcare excellence',
      keyFeatures: 'Key Features:',
      technologies: 'Technologies:',
      visitDemo: 'Visit Demo',
    },
    ar: {
      title: '',
      titleHighlight: 'الأعمال',
      subtitle: 'تطبيقات ويب تقدمية مبنية للتميز في الرعاية الصحية',
      keyFeatures: 'الميزات الرئيسية:',
      technologies: 'التقنيات:',
      visitDemo: 'زيارة العرض التجريبي',
    }
  };

  const t = content[isArabic ? 'ar' : 'en'];

  const apps = [
    {
      id: 1,
      name: isArabic ? 'حاسبة ضغط الدم' : 'BP Calculator',
      description: isArabic
        ? 'أداة متخصصة لمراقبة وحساب مقاييس ضغط الدم، مصممة لمساعدة المتخصصين في الرعاية الصحية والأفراد في تتبع صحة القلب والأوعية الدموية.'
        : 'A specialized tool for monitoring and calculating blood pressure metrics, designed to assist healthcare professionals and individuals in tracking cardiovascular health.',
      features: isArabic ? [
        'تصنيف ضغط الدم',
        'تتبع السجل',
        'مؤشرات بصرية',
        'توصيات صحية',
        'إمكانيات التصدير',
      ] : [
        'Blood pressure categorization',
        'History tracking',
        'Visual indicators',
        'Health recommendations',
        'Export capabilities',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      demoUrl: 'https://smasemt8791.github.io/BP_-calculator/',
      image: 'images/bp-calculator.png'
    },
    {
      id: 2,
      name: isArabic ? 'نظام إدارة المستشفيات المصغر' : 'Mini HIMS',
      description: isArabic
        ? 'نظام مدمج لإدارة معلومات المستشفى مصمم لتبسيط سجلات المرضى والمواعيد وسير العمل السريري الأساسي للمرافق الصحية الصغيرة.'
        : 'A compact Hospital Information Management System designed to streamline patient records, appointments, and basic clinical workflows for smaller healthcare facilities.',
      features: isArabic ? [
        'إدارة سجلات المرضى',
        'جدولة المواعيد',
        'الملاحظات السريرية',
        'التقارير الأساسية',
        'واجهة سهلة الاستخدام',
      ] : [
        'Patient record management',
        'Appointment scheduling',
        'Clinical notes',
        'Basic reporting',
        'User-friendly interface',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      demoUrl: 'https://smasemt8791.github.io/Mini_HIMS/',
      image: 'images/mini-hims.png'
    },
    {
      id: 3,
      name: isArabic ? 'مجموعة حاسبات الصحة واللياقة' : 'Fitness Health Calculator Suite',
      description: isArabic
        ? 'مجموعة شاملة من حاسبات الصحة واللياقة البدنية بما في ذلك مؤشر كتلة الجسم ومعدل الأيض الأساسي والمقاييس الحيوية الأخرى لدعم الأهداف الصحية الشخصية والمراقبة.'
        : 'A comprehensive suite of health and fitness calculators including BMI, BMR, and other vital metrics to support personal health goals and monitoring.',
      features: isArabic ? [
        'حاسبة مؤشر كتلة الجسم',
        'حاسبة معدل الأيض الأساسي',
        'نسبة دهون الجسم',
        'تقدير احتياجات السعرات الحرارية',
        'تتبع التقدم',
      ] : [
        'BMI Calculator',
        'BMR Calculator',
        'Body Fat Percentage',
        'Calorie needs estimation',
        'Progress tracking',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      demoUrl: 'https://smasemt8791.github.io/fitness_health_calculator_suite/',
      image: 'images/fitness-suite.png'
    },
  ];

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

          {/* Apps Grid */}
          <div className="space-y-12">
            {apps.map((app, index) => (
              <Card
                key={app.id}
                className="p-8 hover:shadow-elegant transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* App Icon/Preview */}
                  <div className="lg:col-span-1">
                    <div className="w-full aspect-video lg:aspect-square rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow overflow-hidden relative group">
                      {app.image ? (
                        <img
                          src={app.image}
                          alt={app.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <Smartphone className="w-24 h-24 text-white" />
                      )}
                    </div>
                  </div>

                  {/* App Details */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">{app.name}</h2>
                      <p className="text-muted-foreground">{app.description}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="font-semibold mb-3">{t.keyFeatures}</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {app.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="font-semibold mb-3">{t.technologies}</h3>
                      <div className="flex flex-wrap gap-2">
                        {app.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      className="shadow-elegant"
                      onClick={() => window.open(app.demoUrl, '_blank')}
                    >
                      <ExternalLink className={isArabic ? "ml-2 w-4 h-4" : "mr-2 w-4 h-4"} />
                      {t.visitDemo}
                    </Button>
                  </div>
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

export default Portfolio;
