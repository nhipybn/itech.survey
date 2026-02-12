import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Cpu, 
  Smartphone, 
  MailWarning, 
  AlertCircle 
} from 'lucide-react';
import { IMAGES } from '@/assets/images';
import { WEBINAR_INFO } from '@/lib/index';
import { RegistrationForm } from '@/components/RegistrationForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
     

      {/* Registration Section */}
      <section id="registration" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{WEBINAR_INFO.ctaText}</h2>
              <p className="text-muted-foreground">
                Ý kiến của quý vị là cơ sở để chúng tôi nâng cao chất lượng các chương trình sau.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-border"
            >
              <RegistrationForm />
            </motion.div>

            <div className="mt-12 text-center text-sm text-muted-foreground">
              © 2026 iTechwx & Technova - Trusted Partners of Microsoft. Bảo lưu mọi quyền.
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <Button 
          className="w-full h-14 rounded-full text-lg font-bold shadow-2xl shadow-primary/40"
          asChild
        >
          <a href="#registration">Đăng ký ngay</a>
        </Button>
      </div>
    </div>
  );
};

export default Home;