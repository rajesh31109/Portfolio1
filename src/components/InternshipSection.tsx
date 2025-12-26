import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

// Use existing project images from `src/assets`. Filenames found: Project4.jpg, project5.jpg
import project4 from '@/assets/Project4.jpg';
import project5 from '@/assets/project5.jpg';

const internships = [
  {
    company: 'CoderOne',
    role: 'Web Development Intern',
    period: 'Dec 2024 - Feb 2025',
    image: project5,
    description:
      'Built and deployed a responsive feedback collection web application using Tailwind CSS and JavaScript, with live hosting on Vercel.',
    website: 'https://coder-one-internship.vercel.app/',
    certificate: 'https://drive.google.com/file/d/1MaPx-uIfqZ1gJn4yG3t14usgThcGuUfk/view?usp=sharing',
  },
  {
    company: 'DRDO',
    role: 'Software Intern',
    period: 'Jun 2024 - Jun 2024',
    image: project4,
    description:
      'Implemented file handling functions and developed a TCP/IP client program in C to transfer data in both offline and online modes.',
    certificate: 'https://drive.google.com/file/d/1bx4aoFpkvHluge5x-yqVjiJSGSzBb4l1/view?usp=sharing',
  },
];

export const InternshipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="internships" className="relative py-16 lg:py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-lg">Internships</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">Professional Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {internships.map((item) => (
            <motion.article
              key={item.company}
              className="glass p-6 rounded-2xl flex items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <img src={item.image} alt={item.company} className="w-20 h-20 rounded-full object-cover flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">{item.role}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.company} • {item.period}</p>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-16">
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
