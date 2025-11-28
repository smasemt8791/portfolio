import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Send, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      title: 'Get in',
      titleHighlight: 'Touch',
      subtitle: "Let's discuss the latest developments in health informatics",
      email: 'Email',
      emailDesc: 'Send me an email anytime',
      emailAddress: 'mas_type@hotmail.com',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Quick message on WhatsApp',
      whatsappButton: 'Open WhatsApp',
      linkedin: 'LinkedIn',
      linkedinDesc: 'Connect on LinkedIn',
      linkedinButton: 'View Profile',
      formName: 'Name',
      formNamePlaceholder: 'Your name',
      formEmail: 'Email',
      formEmailPlaceholder: 'your.email@example.com',
      formMessage: 'Message',
      formMessagePlaceholder: 'Tell me about your project or inquiry...',
      sendButton: 'Send Message',
      successMessage: "Message sent! I'll get back to you soon.",
    },
    ar: {
      title: 'تواصل',
      titleHighlight: 'معي',
      subtitle: 'لنناقش آخر المستجدات في مجال المعلوماتية الصحية',
      email: 'البريد الإلكتروني',
      emailDesc: 'أرسل لي بريداً إلكترونياً في أي وقت',
      emailAddress: 'mas_type@hotmail.com',
      whatsapp: 'واتساب',
      whatsappDesc: 'رسالة سريعة عبر واتساب',
      whatsappButton: 'فتح واتساب',
      linkedin: 'لينكد إن',
      linkedinDesc: 'تواصل عبر لينكد إن',
      linkedinButton: 'عرض الملف الشخصي',
      formName: 'الاسم',
      formNamePlaceholder: 'اسمك',
      formEmail: 'البريد الإلكتروني',
      formEmailPlaceholder: 'your.email@example.com',
      formMessage: 'الرسالة',
      formMessagePlaceholder: 'أخبرني عن مشروعك أو استفسارك...',
      sendButton: 'إرسال الرسالة',
      successMessage: 'تم إرسال الرسالة! سأتواصل معك قريباً.',
    }
  };

  const t = content[isArabic ? 'ar' : 'en'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    toast.success(t.successMessage);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{t.email}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t.emailDesc}
                    </p>
                    <a
                      href={`mailto:${t.emailAddress}`}
                      className="text-sm text-primary hover:underline break-all"
                    >
                      {t.emailAddress}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{t.whatsapp}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t.whatsappDesc}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open('https://wa.me/966549950157', '_blank')}
                    >
                      {t.whatsappButton}
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{t.linkedin}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t.linkedinDesc}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open('https://www.linkedin.com/in/mohammed-alshehri-9b15781ab', '_blank')}
                    >
                      {t.linkedinButton}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="md:col-span-2 p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t.formName}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.formNamePlaceholder}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t.formEmail}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.formEmailPlaceholder}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t.formMessage}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.formMessagePlaceholder}
                    rows={6}
                    required
                    className="mt-2"
                  />
                </div>

                <Button type="submit" className="w-full shadow-elegant" size="lg">
                  <Send className="mr-2 w-4 h-4" />
                  {t.sendButton}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
