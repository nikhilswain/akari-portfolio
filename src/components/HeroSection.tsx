import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContents = () => {
    const element = document.getElementById("contents");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Visual Artist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8"
        >
          <span className="block text-primary">Art</span>
          <span className="block gradient-text">Portfolio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light"
        >
          A collection of observational drawings, portraits, sketches, and
          paintings exploring the intersection of memory, place, and emotion
          through traditional mediums.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <button
            onClick={scrollToContents}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
