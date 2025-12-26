import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-heading font-bold text-gradient mb-2 block">
              Pulluri Rajesh
            </a>
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> © {currentYear}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </motion.nav>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/20 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
