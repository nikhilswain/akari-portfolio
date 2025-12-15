import { motion } from "framer-motion";

import sculpture1 from "@/assets/sculpture-1.jpg";
import sculpture2 from "@/assets/sculpture-2.jpg";
import sculpture3 from "@/assets/sculpture-3.jpg";
import sculpture4 from "@/assets/sculpture-4.jpg";

const AbstractionSection = () => {
  return (
    <section id="abstraction" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-8"
        >
          Abstraction:
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* First Image with Description */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 artwork-container"
          >
            <img
              src={sculpture1}
              alt="Abstract clay sculpture - Side view"
              className="artwork-image w-full aspect-4/5 object-cover rounded-sm"
            />
            <p className="text-primary/90 text-sm italic mt-4 leading-relaxed">
              My purpose was to explore how I can imagine a sketch creatively.
              Imagining abstract 2D shapes into a 3D model.
            </p>
          </motion.div>

          {/* Middle Column - Two Images */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="artwork-container"
            >
              <img
                src={sculpture2}
                alt="Abstract clay sculpture - Front view"
                className="artwork-image w-full aspect-5/4 object-cover rounded-sm"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="artwork-container"
            >
              <img
                src={sculpture4}
                alt="Abstract clay sculpture - Sitting pose"
                className="artwork-image w-full aspect-5/4 object-cover rounded-sm"
              />
            </motion.div>
          </div>

          {/* Right Column - Image with Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 artwork-container"
          >
            <img
              src={sculpture3}
              alt="Abstract clay sculpture - With shadow"
              className="artwork-image w-full aspect-4/5 object-cover rounded-sm"
            />
            <div className="mt-4 space-y-1">
              <p className="text-foreground text-sm">Abstract sculpture</p>
              <p className="text-muted-foreground text-xs">
                Size: 10x5x17cm approx.
              </p>
              <p className="text-primary text-xs">
                Materials used: Modelling clay, Wooden skewers
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AbstractionSection;
