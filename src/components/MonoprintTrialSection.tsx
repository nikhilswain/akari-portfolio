import { motion } from "framer-motion";

import monoprintMain from "@/assets/monoprint-main.jpg";
import trial1 from "@/assets/monoprint-trial1.jpg";
import trial2 from "@/assets/monoprint-trial2.jpg";
import trial3 from "@/assets/monoprint-trial3.jpg";
import trial4 from "@/assets/monoprint-trial4.jpg";

interface Trial {
  image: string;
  label: string;
  note: string;
}

const trials: Trial[] = [
  {
    image: trial1,
    label: "Trial 1:",
    note: "I realised the handmade paper I used was too wet and did not hold the paint well, so I switched to cartridge paper.",
  },
  {
    image: trial2,
    label: "Trial 2:",
    note: "The paper was too damp, but the image produced was better.",
  },
  {
    image: trial3,
    label: "Trial 3:",
    note: "My first result I was satisfied with, after learning the right dampness and timing for a successful transfer.",
  },
  {
    image: trial4,
    label: "Trial 4:",
    note: "I wanted to try printing finer details by controlling the dampness of the paper.",
  },
];

const MonoprintTrialsSection = () => {
  return (
    <section id="monoprint-trials" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-8"
        >
          Watercolour Monoprints:
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Main Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 artwork-container"
          >
            <img
              src={monoprintMain}
              alt="Watercolour monoprint - Park scene"
              className="artwork-image w-full rounded-sm"
            />
            <p className="text-xs text-muted-foreground mt-3">
              Size: 8inch × 8inch
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex items-start"
          >
            <p className="text-primary/90 leading-relaxed text-sm italic">
              I wanted to explore more about printmaking after my linocut
              printmaking. I've used watercolour monoprinting to illustrate an
              old park I used to visit as a child from memory. I believe the
              fluidity and imperfection of the medium helped me capture the
              nostalgic tone.
            </p>
          </motion.div>

          {/* Trials Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {trials.map((trial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="artwork-container"
              >
                <p className="text-foreground text-sm font-medium mb-2">
                  {trial.label}
                </p>
                <img
                  src={trial.image}
                  alt={trial.label}
                  className="artwork-image w-full aspect-square object-cover rounded-sm"
                />
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {trial.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonoprintTrialsSection;
