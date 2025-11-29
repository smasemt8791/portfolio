import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'About',
      titleHighlight: 'Me',
      subtitle: 'Licensed Health Informatics Specialist with 11+ years of experience across healthcare, technology, and digital transformation',
      bio1: 'As a Licensed Health Informatics Specialist certified by the Saudi Commission for Health Specialties (SCFHS), I bring over a decade of comprehensive experience spanning healthcare, legal, HR, design, and technology sectors.',
      bio2: 'My expertise lies in bridging the gap between healthcare and technology, with a focus on building Progressive Web Applications (PWAs), implementing AI/ML solutions, and optimizing Electronic Health Record (EHR) systems. I specialize in transforming complex healthcare workflows into efficient digital solutions that improve patient outcomes and operational excellence.',
      downloadCV: 'Download CV',
      coreSkills: 'Core Skills',
      professionalJourney: 'Multi-Domain Expertise',
      skills: [
        'Full-Stack Development (PHP, JavaScript, MySQL)',
        'Progressive Web App Development',
        'Health Informatics & HIMS',
        'AI & Machine Learning (Python, R)',
        'Data Analytics (SQL, Tableau, Power BI)',
        'Workflow Automation (n8n)',
        'Cloud Platforms (AWS, Firebase)',
        'EHR Systems & Interoperability',
      ],
      experience: [
        {
          title: 'Healthcare Technology',
          description: 'EHR optimization, clinical analytics, data governance, and AI/ML tools.',
        },
        {
          title: 'Software Engineering',
          description: 'Full-stack web and PWA development using PHP, JavaScript, MySQL, and cloud platforms.',
        },
        {
          title: 'Operational & Legal Experience',
          description: 'Broad roles across legal documentation, HR management, and technical operations.',
        },
      ]
    },
    ar: {
      title: 'عن',
      titleHighlight: 'الموقع',
      subtitle: 'أخصائي معلوماتية صحية مرخص مع أكثر من 11 عاماً من الخبرة في الرعاية الصحية والتكنولوجيا والتحول الرقمي',
      bio1: 'بصفتي أخصائي معلوماتية صحية مرخص من قبل الهيئة السعودية للتخصصات الصحية (SCFHS)، أمتلك أكثر من عقد من الخبرة الشاملة في قطاعات الرعاية الصحية والقانون والموارد البشرية والتصميم والتكنولوجيا.',
      bio2: 'تكمن خبرتي في سد الفجوة بين الرعاية الصحية والتكنولوجيا، مع التركيز على بناء تطبيقات الويب التقدمية (PWAs)، وتطبيق حلول الذكاء الاصطناعي وتعلم الآلة، وتحسين أنظمة السجلات الصحية الإلكترونية (EHR). أتخصص في تحويل سير العمل الصحي المعقد إلى حلول رقمية فعالة تحسن نتائج المرضى والتميز التشغيلي.',
      downloadCV: 'تحميل السيرة الذاتية',
      coreSkills: 'المهارات الأساسية',
      professionalJourney: 'الخبرات متعددة المجالات',
      skills: [
        'تطوير متكامل (PHP, JavaScript, MySQL)',
        'تطوير تطبيقات الويب التقدمية',
        'المعلوماتية الصحية وأنظمة HIMS',
        'الذكاء الاصطناعي وتعلم الآلة (Python, R)',
        'تحليل البيانات (SQL, Tableau, Power BI)',
        'أتمتة سير العمل (n8n)',
        'المنصات السحابية (AWS, Firebase)',
        'أنظمة السجلات الصحية الإلكترونية والتشغيل البيني',
      ],
      experience: [
        {
          title: 'تكنولوجيا الرعاية الصحية',
          description: 'تحسين السجلات الصحية الإلكترونية، التحليلات السريرية، حوكمة البيانات، وأدوات الذكاء الاصطناعي وتعلم الآلة.',
        },
        {
          title: 'هندسة البرمجيات',
          description: 'تطوير ويب متكامل وتطبيقات PWA باستخدام PHP وJavaScript وMySQL والمنصات السحابية.',
        },
        {
          title: 'الخبرة التشغيلية والقانونية',
          description: 'أدوار واسعة في التوثيق القانوني، وإدارة الموارد البشرية، والعمليات التقنية.',
        },
      ]
    }
  };

  const t = content[isArabic ? 'ar' : 'en'];

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

          {/* Bio */}
          <Card className="max-w-4xl mx-auto p-8 mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                {t.bio1}
              </p>
              <p className="text-lg leading-relaxed mt-4">
                {t.bio2}
              </p>
            </div>

            <div className="mt-8">
              <a href="https://raw.githubusercontent.com/smasemt8791/docs/main/CV_25_09_Novermber.pdf" download="Mohammed_Alshehri_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="shadow-elegant">
                  <Download className="mr-2 w-4 h-4" />
                  {t.downloadCV}
                </Button>
              </a>
            </div>
          </Card>

          {/* Skills */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-8">{t.coreSkills}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.skills.map((skill, index) => (
                <Card
                  key={index}
                  className="p-4 flex items-center gap-3 hover:shadow-elegant transition-smooth animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{skill}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t.professionalJourney}</h2>
            <div className="space-y-6">
              {t.experience.map((exp, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-elegant transition-smooth animate-fade-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
