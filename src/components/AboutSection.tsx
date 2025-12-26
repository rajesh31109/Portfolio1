import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';

const skills = [
  { name: 'C', level: 95 },
  { name: 'Java', level: 60 },
  { name: 'HTML & CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 50 },
  { name: 'Networking System', level: 85 },
];

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating website templates and presentation slides (PPT)',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed and seamless user experiences.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Embracing cutting-edge technologies and methodologies.',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-16 lg:py-20" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium text-lg">About Me</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-2 mb-4">
            Passionate <span className="text-gradient">Developer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            With 2 years web development experience and practical skills in procedural languages, delivering projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I am Rajesh Pulluri from KL University, currently pursuing my final year in Bachelor of Computer Applications. I have completed two internships in C programming and web development, participated in extracurricular activities such as hackathons, and aspire to work on real-time projects.
            </p>
           

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-strong p-8 rounded-3xl">
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-8">
                Technical Skills
              </h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats removed */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
