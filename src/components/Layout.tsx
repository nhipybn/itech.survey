import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShieldCheck, Calendar, MapPin, ExternalLink } from "lucide-react";
import { SiFacebook } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ROUTE_PATHS, WEBINAR_INFO } from "@/lib/index";
import { IMAGES } from "@/assets/images";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  useEffect(() => {
  // Scroll effect
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };
  window.addEventListener("scroll", handleScroll);

  const scriptId = "_bownow_ts";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.charset = "utf-8";
    script.src =
      "https://contents.bownow.jp/js/UTC_1d9e0c1d1dcfe0dd1cba/trace.js";
    document.head.appendChild(script);
  }

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  const navLinks = [
    { name: "Về Webinar", href: "https://itechwxwebinar26022026.netlify.app/#about" },
    { name: "Nội dung", href: "https://itechwxwebinar26022026.netlify.app/#content" },
    { name: "Lịch trình", href: "https://itechwxwebinar26022026.netlify.app/#schedule" },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-18 flex items-center",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link
            to={ROUTE_PATHS.HOME}
            className="flex items-center gap-3 group transition-transform active:scale-95"
          >
            <img 
              src={IMAGES.LOGO} 
              alt="iTechwx Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight">
                iTechwx
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Trusted Partners of Microsoft
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
           
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background md:hidden pt-20 px-4"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-semibold border-b border-border pb-4 flex justify-between items-center"
                >
                  {link.name}
                  <ExternalLink size={18} className="text-muted-foreground" />
                </a>
              ))}
              
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src={IMAGES.LOGO} 
                  alt="iTechwx Logo" 
                  className="h-8 w-auto object-contain"
                />
                <span className="font-bold text-xl">iTechwx</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                iTechwx - Đối tác tin cậy của Microsoft, chuyên cung cấp giải pháp Microsoft 365 và bảo mật doanh nghiệp cho các công ty SME tại Việt Nam.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61586700159766" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background border border-border hover:text-primary transition-colors">
                  <SiFacebook size={20} />
                </a>
              </div>
            </div>

            {/* Webinar Summary */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg uppercase tracking-wider">Thông tin Webinar</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Calendar className="text-primary shrink-0" size={20} />
                  <span className="text-sm">
                    {WEBINAR_INFO.date} | {WEBINAR_INFO.time}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-primary shrink-0" size={20} />
                  <span className="text-sm">{WEBINAR_INFO.location}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-primary shrink-0" size={20} />
                  <span className="text-sm">Số lượng tối đa: {WEBINAR_INFO.capacity} người</span>
                </li>
              </ul>
            </div>

            {/* CTA / Support */}
            <div className="space-y-6">
              <h4 className="font-semibold text-lg uppercase tracking-wider">Hỗ trợ</h4>
              <p className="text-sm text-muted-foreground">
                Mọi thắc mắc về chương trình vui lòng liên hệ đội ngũ qua email:
              </p>
              <div className="space-y-3">
                <a 
                  href="mailto:marketing@itechwx.com" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <span>📧</span>
                  marketing@itechwx.com
                </a>
                <Button asChild variant="outline" className="w-full md:w-auto block">
                  <a href="#registration">Đăng ký ngay</a>
                </Button>
              </div>
              <div className="pt-4">
                {WEBINAR_INFO.notes.map((note, idx) => (
                  <p key={idx} className="text-[11px] text-muted-foreground italic mb-1">
                    ※ {note}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>© 2026 iTechwx & Technova - Trusted Partners of Microsoft. Tất cả quyền được bảo lưu.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Chính sách bảo mật</a>
              <a href="#" className="hover:text-primary">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
