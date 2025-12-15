import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-border/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
              Let's Connect
            </h3>
            <p className="text-muted-foreground text-sm">
              Open for commissions and collaborations
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:artist@email.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Behance
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Art Portfolio. All artworks are
            original creations.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
