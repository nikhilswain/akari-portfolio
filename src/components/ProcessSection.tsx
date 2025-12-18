import { motion } from "framer-motion";

import processSketch from "@/assets/process-sketch.png";
import processDigital from "@/assets/process-digital.png";
import processClay1 from "@/assets/process-clay1.png";
import processClay2 from "@/assets/process-clay2.png";

const steps = [
  "Sketching a bull.",
  "Breaking down the structures of the bull into shapes via tracing over the sketch.",
  "Reimagining and converting the 2D abstract shapes into 3D shapes.",
  "Arranging the shapes to form the structure.",
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="py-16 md:py-24 px-6 md:px-12 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Column - Sketches */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="artwork-container">
                <img
                  src={processSketch}
                  alt="Pencil sketch of bull"
                  className="artwork-image w-full rounded-sm"
                />
              </div>
              <p className="text-muted-foreground text-xs mt-2">
                A4 - pencil sketch
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className=""
            >
              <div className="artwork-container">
                <img
                  src={processDigital}
                  alt="Digital trace over"
                  className="artwork-image w-full rounded-sm"
                />
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-muted-foreground text-xs">
                  A4 - digital trace over
                </p>
                <p className="text-primary text-xs">Software: Krita</p>
              </div>
            </motion.div>
          </div>

          {/* Center Column - Process Title & Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-8 text-center">
              Process
            </h2>

            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary font-medium">{index + 1}.</span>
                  <span className="text-foreground/80 text-sm leading-relaxed italic">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Right Column - Clay Models */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="artwork-container"
            >
              <div className="artwork-container">
                <img
                  src={processClay1}
                  alt="Initial clay structure"
                  className="artwork-image w-full rounded-sm"
                />
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-muted-foreground text-xs">
                  Initial clay structure
                </p>
                <p className="text-primary text-xs">
                  Material: Modelling clay, skewers
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="artwork-container"
            >
              <div className="artwork-container">
                <img
                  src={processClay2}
                  alt="Bull head models"
                  className="artwork-image w-full rounded-sm"
                />
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-muted-foreground text-xs">
                  Bull head models
                </p>
                <p className="text-primary text-xs">
                  Material: Modelling clay, skewers
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
