import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Briefcase, GraduationCap, Code, Award, Languages, Brain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Resume = () => {
    const { language } = useLanguage();
    const isArabic = language === 'ar';

    const content = {
        en: {
            title: 'My Resume',
            download: 'Download CV',
            name: 'MOHAMMED ALSHEHRI',
            role: 'Health Informatics Specialist & Full-Stack Web/App Developer',
            summary: 'Health Informatics Specialist & Full-Stack Web/App Developer, licensed by the Saudi Commission for Health Specialties, with over 11 years of multidisciplinary professional experience spanning health informatics, full-stack web and PWA development, healthcare data analytics, and AI-driven workflow automation. Expert in building Progressive Web Apps (PWAs) including healthcare-focused applications using HTML, CSS, JavaScript, PHP, and MySQL. Skilled in clinical data analysis, EHR optimization, AI/ML tools, and integrating intelligent automation agents to enhance healthcare operations. Strong analytical background with the ability to translate complex healthcare data into actionable insights using Python, SQL, Tableau, and Power BI. In addition to core technical and informatics expertise, I bring broad real-world experience across diverse roles, including Employee Affairs Manager, Graphic Designer, Public Relations Officer, and legal-domain roles such as Court Clerk, Translator, and Ruling Enforcement Officer. This unique background strengthens my communication, leadership, problem-solving, and cross-disciplinary adaptability valuable assets in healthcare technology and digital transformation environments. Holds a BSc in Health Informatics (GPA 3.6/4), with experience in cloud computing, programming, medical coding (CPT, ICD-10-AM, HCPCS), and AI-driven healthcare systems.',
            competencies: 'Core Competencies',
            experience: 'Professional Experience',
            education: 'Education',
            certifications: 'Certifications & Training',
            skills: 'Technical Skills',
            languages: 'Languages'
        },
        ar: {
            title: 'سيرتي الذاتية',
            download: 'تحميل السيرة الذاتية',
            name: 'محمد الشهري',
            role: 'أخصائي معلوماتية صحية ومطوّر ويب/تطبيقات متكامل',
            summary: 'حاصل على ترخيص من الهيئة السعودية للتخصصات الصحية، ويمتلك أكثر من 11 عاماً من الخبرة المهنية المتعددة في مجالات المعلوماتية الصحية، وتطوير الويب وتطبيقات الـPWA، وتحليل بيانات الرعاية الصحية، وأتمتة سير العمل المعتمد على الذكاء الاصطناعي. خبير في تطوير تطبيقات الويب التقدمية (PWAs)، بما في ذلك التطبيقات الصحية، باستخدام HTML وCSS وJavaScript وPHP وMySQL. ماهر في تحليل البيانات السريرية، وتحسين أنظمة السجلات الصحية الإلكترونية (EHR)، وأدوات الذكاء الاصطناعي وتعلم الآلة، ودمج وكلاء الأتمتة الذكية لتحسين عمليات الرعاية الصحية. يمتلك خلفية تحليلية قوية وقدرة على تحويل البيانات الصحية المعقدة إلى رؤى قابلة للتنفيذ باستخدام Python وSQL وTableau وPower BI. إلى جانب الخبرة التقنية والإكلينيكية، أمتلك خبرة عملية واسعة في مجالات متعددة، تشمل إدارة شؤون الموظفين، والتصميم الجرافيكي، والعلاقات العامة، وكذلك الأعمال القانونية مثل كاتب المحكمة، والترجمة، وتنفيذ الأحكام. تمنحني هذه الخلفية المتنوعة قدرات قوية في الاتصال، والقيادة، وحل المشكلات، والمرونة بين التخصصات—وهي مهارات قيّمة في بيئات التكنولوجيا الصحية والتحول الرقمي. حاصل على بكالوريوس في المعلوماتية الصحية (المعدل: 3.6 من 4)، ولدي خبرة في الحوسبة السحابية، والبرمجة، والترميز الطبي (CPT, ICD-10-AM, HCPCS)، وأنظمة الرعاية الصحية المعتمدة على الذكاء الاصطناعي.',
            competencies: 'الكفاءات الأساسية',
            experience: 'الخبرات المهنية',
            education: 'التعليم',
            certifications: 'الشهادات والدورات',
            skills: 'المهارات التقنية',
            languages: 'اللغات'
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
                            {t.title.split(' ')[0]} <span className="bg-gradient-primary bg-clip-text text-transparent">{t.title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <div className="flex justify-center gap-4 mb-8">
                            <a href="https://raw.githubusercontent.com/smasemt8791/docs/main/CV_25_09_Novermber.pdf" download="Mohammed_Alshehri_CV.pdf" target="_blank" rel="noopener noreferrer">
                                <Button className="shadow-elegant">
                                    <Download className="mr-2 w-4 h-4" />
                                    {t.download}
                                </Button>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Profile Summary */}
                        <Card className="p-8 animate-fade-in">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h2 className="text-3xl font-bold mb-2">{t.name}</h2>
                                    <h3 className="text-xl text-primary mb-4">{t.role}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {t.summary}
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* Core Competencies */}
                        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Brain className="w-6 h-6 text-primary" />
                                {t.competencies}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Card className="p-6">
                                    <h4 className="font-bold mb-4 text-lg">{isArabic ? 'المهارات التقنية والتطوير' : 'Technical & Development'}</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• {isArabic ? 'تطوير ويب متكامل: HTML, CSS, JavaScript, PHP' : 'Full-Stack Web Development (HTML, CSS, JavaScript, PHP)'}</li>
                                        <li>• {isArabic ? 'تطوير تطبيقات PWA' : 'Progressive Web Apps (PWAs) – including healthcare apps'}</li>
                                        <li>• {isArabic ? 'تصميم قواعد البيانات SQL & MySQL' : 'SQL & MySQL Database Design'}</li>
                                        <li>• {isArabic ? 'تطوير واجهات خلفية ودمج الـAPIs' : 'Backend & API Integration'}</li>
                                        <li>• {isArabic ? 'الحوسبة السحابية: AWS, Firebase' : 'Cloud Computing (AWS, Firebase)'}</li>
                                        <li>• {isArabic ? 'إدارة أنظمة Linux' : 'Linux System Administration'}</li>
                                        <li>• {isArabic ? 'تحليل البيانات المرئية: Tableau, Power BI' : 'Data Visualisation (Tableau, Power BI)'}</li>
                                    </ul>
                                </Card>
                                <Card className="p-6">
                                    <h4 className="font-bold mb-4 text-lg">{isArabic ? 'المعلوماتية الصحية والتقنيات الطبية' : 'Health Informatics & Healthcare Technology'}</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• {isArabic ? 'أخصائي معلوماتية صحية مرخص (SCFHS)' : 'Licensed Health Informatics Specialist (SCFHS)'}</li>
                                        <li>• {isArabic ? 'تحليل بيانات الرعاية الصحية: Python, R' : 'Healthcare Data Analysis (Python, R)'}</li>
                                        <li>• {isArabic ? 'تحسين أنظمة السجلات الصحية الإلكترونية (EHR/HIMS)' : 'EHR / HIMS System Optimization'}</li>
                                        <li>• {isArabic ? 'الترميز الطبي (CPT, ICD-10-AM, HCPCS)' : 'Medical Coding (CPT, ICD-10-AM, HCPCS)'}</li>
                                        <li>• {isArabic ? 'أنظمة دعم القرار السريري (CDS)' : 'Clinical Decision Support (CDS)'}</li>
                                        <li>• {isArabic ? 'حوكمة البيانات الصحية والتشغيل البيني' : 'Healthcare Data Governance & Interoperability'}</li>
                                    </ul>
                                </Card>
                                <Card className="p-6">
                                    <h4 className="font-bold mb-4 text-lg">{isArabic ? 'الذكاء الاصطناعي والتقنيات الناشئة' : 'AI & Emerging Technologies'}</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• {isArabic ? 'أدوات تعلم الآلة (IBM Watson, Orange)' : 'Machine Learning Tools (IBM Watson, Orange)'}</li>
                                        <li>• {isArabic ? 'أتمتة الوكلاء الذكيين (n8n)' : 'AI Agent Automation (n8n)'}</li>
                                        <li>• {isArabic ? 'البلوك تشين للتطبيقات الصحية' : 'Blockchain for Healthcare Applications'}</li>
                                        <li>• {isArabic ? 'التحليلات التنبؤية وأتمتة سير العمل' : 'Predictive Analytics & Workflow Automation'}</li>
                                    </ul>
                                </Card>
                                <Card className="p-6">
                                    <h4 className="font-bold mb-4 text-lg">{isArabic ? 'مهارات عامة' : 'General Skills'}</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• {isArabic ? 'إدارة المشاريع' : 'Project Management'}</li>
                                        <li>• {isArabic ? 'كتابة الوثائق التقنية' : 'Technical Documentation'}</li>
                                        <li>• {isArabic ? 'تواصل ثنائي اللغة (العربية والإنجليزية)' : 'Bilingual Communication (Arabic & English)'}</li>
                                    </ul>
                                </Card>
                            </div>
                        </div>

                        {/* Professional Experience */}
                        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Briefcase className="w-6 h-6 text-primary" />
                                {t.experience}
                            </h3>
                            <div className="space-y-6">
                                <Card className="p-6">
                                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                        <div>
                                            <h4 className="text-xl font-bold">{isArabic ? 'العمل الحر / استراحة مهنية لتحقيق أهداف شخصية' : 'Freelancing & Consulting – Web Development & Health Informatics'}</h4>
                                            <p className="text-primary">{isArabic ? 'مطور ويب واستشاري معلوماتية صحية' : 'Personal Goal Pursuit / Career Break'}</p>
                                        </div>
                                        <span className="text-sm text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full">{isArabic ? 'سبتمبر 2025 – حتى الآن | الرياض، السعودية' : 'Sep 2025 – Present | Riyadh, Saudi Arabia'}</span>
                                    </div>
                                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                        <li>{isArabic ? 'تطوير تطبيقات PWA مخصصة للمستشفيات والعيادات والجهات الصحية.' : 'Developed Progressive Web Apps (PWAs) tailored for hospitals, clinics, and health organizations.'}</li>
                                        <li>{isArabic ? 'بناء أدوات سير العمل الصحية ولوحات المعلومات والتطبيقات المعتمدة على البيانات.' : 'Built healthcare workflow tools, dashboards, and data-driven web apps.'}</li>
                                        <li>{isArabic ? 'إجراء أبحاث في الذكاء الاصطناعي وتعلم الآلة والبلوك تشين للتحول الصحي.' : 'Conducted research in AI, machine learning, and blockchain for healthcare transformation.'}</li>
                                        <li>{isArabic ? 'تصميم أنظمة أتمتة باستخدام وكلاء الذكاء الاصطناعي (n8n) للعمليات السريرية والإدارية.' : 'Designed automation systems using AI agents (n8n) for clinical and administrative processes.'}</li>
                                    </ul>
                                </Card>

                                <Card className="p-6">
                                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                        <div>
                                            <h4 className="text-xl font-bold">{isArabic ? 'أخصائي معلوماتية صحية (تدريب تعاوني)' : 'Health Informatics Specialist (Internship)'}</h4>
                                            <p className="text-primary">{isArabic ? 'مجموعة مستشارك الطبية' : 'Mustasharak Medical Group'}</p>
                                        </div>
                                        <span className="text-sm text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full">{isArabic ? 'يونيو 2025 – سبتمبر 2025 | أبها، السعودية' : 'Jun 2025 – Sep 2025 | Abha, Saudi Arabia'}</span>
                                    </div>
                                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                        <li>{isArabic ? 'تنفيذ تحليلات بيانات متقدمة باستخدام SQL وR وPython.' : 'Performed advanced data analysis using SQL, R, and Python.'}</li>
                                        <li>{isArabic ? 'دعم تحسين السجلات الصحية الإلكترونية وتطبيق أنظمة دعم القرار.' : 'Supported EHR optimization and CDS implementation.'}</li>
                                        <li>{isArabic ? 'تطوير لوحات بيانات لـمؤشرات الأداء السريرية.' : 'Developed data dashboards for clinical KPIs.'}</li>
                                        <li>{isArabic ? 'المساهمة في حوكمة البيانات والتحسين المستمر وتدريب المستخدمين.' : 'Contributed to data governance, quality improvement, and user training.'}</li>
                                    </ul>
                                </Card>

                                <Card className="p-6">
                                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                        <div>
                                            <h4 className="text-xl font-bold">{isArabic ? 'مدير شؤون الموظفين' : 'Employee Affairs Manager'}</h4>
                                            <p className="text-primary">{isArabic ? 'مؤسسة الأوائل الأولى للمقاولات' : 'Al-Awael Al-Oula Construction Establishment'}</p>
                                        </div>
                                        <span className="text-sm text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full">{isArabic ? 'يوليو 2022 – مارس 2024 | الرياض، السعودية' : 'Jul 2022 – Mar 2024 | Riyadh, Saudi Arabia'}</span>
                                    </div>
                                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                        <li>{isArabic ? 'الإشراف على علاقات الموظفين وسياسات العمل وضمان الامتثال لأنظمة العمل.' : 'Oversaw employee relations and workplace policies, ensuring compliance with labor laws.'}</li>
                                        <li>{isArabic ? 'إدارة حل النزاعات والمزايا والوثائق.' : 'Managed conflict resolution, benefits, and HR documentation processes.'}</li>
                                        <li>{isArabic ? 'تحسين التواصل بين الموظفين والإدارة.' : 'Enhanced communication between employees and management to improve satisfaction and retention.'}</li>
                                    </ul>
                                </Card>

                                <Card className="p-6">
                                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                        <div>
                                            <h4 className="text-xl font-bold">{isArabic ? 'مصمم جرافيك حر (فريلانسر مرخص)' : 'Freelance Graphic Designer'}</h4>
                                            <p className="text-primary">{isArabic ? 'عن بُعد – السعودية' : 'Licensed Freelancer – Saudi Arabia (Remote)'}</p>
                                        </div>
                                        <span className="text-sm text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full">{isArabic ? 'أغسطس 2007 – يونيو 2022' : 'Aug 2007 – Jun 2022'}</span>
                                    </div>
                                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                        <li>{isArabic ? 'تصميم الهويات البصرية والمواد الدعائية وأغلفة الكتب.' : 'Designed visual identities, marketing materials, and book covers using the Adobe Creative Suite.'}</li>
                                        <li>{isArabic ? 'التعاون مع العملاء ودور الطباعة.' : 'Collaborated with clients and printing companies to deliver high-quality visual outputs.'}</li>
                                        <li>{isArabic ? 'التكيف مع تطور اتجاهات التصميم التقليدية والرقمية والمعززة بالذكاء الاصطناعي.' : 'Adapted to evolving design trends, from classic styles to digital and AI-enhanced design.'}</li>
                                    </ul>
                                </Card>

                                <Card className="p-6">
                                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                        <div>
                                            <h4 className="text-xl font-bold">{isArabic ? 'كاتب تقني / موظف نسخ احتياطي للبيانات' : 'Technical Writer / Data Backup Employee'}</h4>
                                            <p className="text-primary">{isArabic ? 'إدارة الهندسة والإسكان' : 'Engineering & Housing Administration'}</p>
                                        </div>
                                        <span className="text-sm text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full">{isArabic ? 'مارس 2000 – أغسطس 2007 | السعودية' : 'Mar 2000 – Aug 2007 | Saudi Arabia'}</span>
                                    </div>
                                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                        <li>{isArabic ? 'إعداد وصيانة الوثائق الفنية لمشاريع التخطيط والتطوير.' : 'Created and maintained technical documentation for project planning and development.'}</li>
                                        <li>{isArabic ? 'تنفيذ عمليات النسخ الاحتياطي باستخدام Linux وضمان سلامة البيانات.' : 'Executed Linux-based data backup operations, ensuring data integrity and disaster recovery readiness.'}</li>
                                    </ul>
                                </Card>

                                <Card className="p-6">
                                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                        <div>
                                            <h4 className="text-xl font-bold">{isArabic ? 'مسؤول علاقات عامة' : 'Public Relations Officer'}</h4>
                                            <p className="text-primary">{isArabic ? 'جمعية البر' : 'Al-Bir Charitable Society'}</p>
                                        </div>
                                        <span className="text-sm text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full">{isArabic ? 'مارس 1999 – فبراير 2000 | السعودية' : 'Mar 1999 – Feb 2000 | Saudi Arabia'}</span>
                                    </div>
                                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                        <li>{isArabic ? 'إدارة الاتصالات الإعلامية والعامة وتنظيم الفعاليات وجمع التبرعات.' : 'Managed media and public communications, organized fundraising events, and strengthened community relations.'}</li>
                                        <li>{isArabic ? 'تعزيز حضور الجمعية وخدماتها المجتمعية.' : 'Promoted charitable initiatives and improved organizational outreach and visibility.'}</li>
                                    </ul>
                                </Card>

                                <Card className="p-6">
                                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                                        <div>
                                            <h4 className="text-xl font-bold">{isArabic ? 'كاتب محكمة / مترجم / مأمور تنفيذ' : 'Court Clerk / Translator / Ruling Enforcement Officer'}</h4>
                                            <p className="text-primary">{isArabic ? 'وزارة العدل' : 'Ministry of Justice'}</p>
                                        </div>
                                        <span className="text-sm text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full">{isArabic ? 'أغسطس 1998 – فبراير 1999 | السعودية' : 'Aug 1998 – Feb 1999 | Saudi Arabia'}</span>
                                    </div>
                                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                        <li>{isArabic ? 'إدارة سجلات المحكمة وإعداد المستندات وجدولة الجلسات.' : 'Managed court records, prepared legal documents, and scheduled hearings.'}</li>
                                        <li>{isArabic ? 'ترجمة الإجراءات القانونية بين العربية والإنجليزية.' : 'Translated legal proceedings between Arabic and English.'}</li>
                                        <li>{isArabic ? 'تنفيذ الأحكام وضمان سلامة الإجراءات.' : 'Ensured enforcement of court rulings and maintained procedural integrity.'}</li>
                                    </ul>
                                </Card>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <GraduationCap className="w-6 h-6 text-primary" />
                                {t.education}
                            </h3>
                            <Card className="p-6">
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <div>
                                        <h4 className="text-xl font-bold">{isArabic ? 'بكالوريوس العلوم في المعلوماتية الصحية' : 'Bachelor of Science in Health Informatics'}</h4>
                                        <p className="text-primary">{isArabic ? 'الجامعة السعودية الإلكترونية – الرياض' : 'Saudi Electronic University – Riyadh, Saudi Arabia'}</p>
                                    </div>
                                    <span className="text-sm text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full">{isArabic ? 'خريج 2025 | المعدل: 3.6 / 4' : 'Graduated 2025 | GPA: 3.6 / 4.0'}</span>
                                </div>
                                <p className="mt-2 text-muted-foreground">{isArabic ? 'مرتبة الشرف الثانية' : 'Second Class Honours'}</p>
                            </Card>
                        </div>

                        {/* Certifications */}
                        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Award className="w-6 h-6 text-primary" />
                                {t.certifications}
                            </h3>
                            <Card className="p-6">
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                                    <li>• {isArabic ? 'أخصائي معلوماتية صحية – الهيئة السعودية للتخصصات الصحية' : 'Health Informatics Specialist - Saudi Commission for Health Specialties'}</li>
                                    <li>• AWS Cloud Practitioner</li>
                                    <li>• {isArabic ? 'البلوك تشين' : 'Blockchain'}</li>
                                    <li>• {isArabic ? 'Python، MATLAB، R، تحليل البيانات – جامعة الإمام عبدالرحمن بن فيصل' : 'Python, MATLAB, R Programming, Data Analysis & Visualization – Imam Abdulrahman Bin Faisal University'}</li>
                                    <li>• {isArabic ? 'البرمجة الخلفية والتسويق الرقمي – الاتحاد السعودي للبرمجة والدرونز' : 'Backend Programming & Digital Marketing – Saudi Federation for Programming and Drones'}</li>
                                    <li>• {isArabic ? 'الممارسات الأخلاقية، القيادة، أمن المعلومات – Droop' : 'Ethical Work Practices, Leadership, & Information Security – Droop'}</li>
                                    <li>• {isArabic ? 'إدارة الجودة، التحليل المالي، التخطيط الاستراتيجي – معهد ريادة الأعمال' : 'Quality Management, Financial Analysis, & Strategic Planning – Entrepreneurship Institute'}</li>
                                    <li>• {isArabic ? 'إجادة اللغة الإنجليزية – جامعة الملك فهد للبترول والمعادن' : 'English Proficiency (Listening, Writing, Reading, Grammar) – King Fahd University of Petroleum & Minerals'}</li>
                                </ul>
                            </Card>
                        </div>

                        {/* Technical Skills */}
                        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Code className="w-6 h-6 text-primary" />
                                {t.skills}
                            </h3>
                            <Card className="p-6">
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Python', 'Java', 'PHP', 'JavaScript', 'HTML', 'CSS', 'SQL', 'MySQL',
                                        'Tableau', 'Power BI', 'Excel', 'IBM Watson', 'Orange Data Mining',
                                        'Adobe Photoshop', 'Linux', 'Microsoft Office',
                                        'CPT', 'ICD-10', 'HCPCS', 'OpenEMR', 'PWA Development'
                                    ].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        {/* Languages */}
                        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Languages className="w-6 h-6 text-primary" />
                                {t.languages}
                            </h3>
                            <Card className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold mb-2">{isArabic ? 'العربية' : 'Arabic'}</h4>
                                        <p className="text-muted-foreground">{isArabic ? 'لغة أم' : 'Native'}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">{isArabic ? 'الإنجليزية' : 'English'}</h4>
                                        <p className="text-muted-foreground">{isArabic ? 'طلاقة' : 'Fluent'}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Resume;
