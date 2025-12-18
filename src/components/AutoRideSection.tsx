import { motion } from "framer-motion";

import autoRideMain from "@/assets/auto-ride-main.png";
import autoRide2 from "@/assets/auto-ride-2.png";
import autoRide3 from "@/assets/auto-ride-3.png";
import autoRide4 from "@/assets/auto-ride-4.png";

const AutoRideSection = () => {
  return (
    <section id="auto-ride" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-8"
        >
          An Auto Ride:
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Main Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 lg:sticky lg:top-24 h-fit self-start"
          >
            <div className="artwork-container">
              <img
                src={autoRideMain}
                alt="Linocut printing - Auto Ride"
                className="artwork-image w-full rounded-sm"
              />
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-primary text-sm">Linocut Printing</p>
              <p className="text-xs text-muted-foreground">Size: A4</p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex items-start lg:sticky lg:top-24 h-fit lg:self-start"
          >
            <p className="text-primary/90 leading-relaxed text-sm md:text-base italic">
              This print reflects an auto driver's world, where Kolam lines,
              tile-inspired patterns, and small symbols of home travel with him.
              A moving space becomes warm, personal, and full of quiet cultural
              memory.
            </p>
          </motion.div>

          {/* Side Thumbnails */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=""
            >
              <div className="artwork-container flex-1">
                <img
                  src={autoRide2}
                  alt="Interior scene linocut"
                  className="artwork-image w-full aspect-square object-cover rounded-sm"
                />
              </div>
              <p className="text-xs text-muted-foreground text-right mt-2">
                Size: A4
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=""
            >
              <div className="artwork-container flex-1">
                <img
                  src={autoRide3}
                  alt="Birds linocut"
                  className="artwork-image w-full aspect-square object-cover rounded-sm"
                />
              </div>
              <p className="text-xs text-muted-foreground text-right mt-2">
                Size: A4
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className=""
            >
              <div className="artwork-container flex-1">
                <img
                  src={autoRide4}
                  alt="Archway sketch"
                  className="artwork-image w-full aspect-[4/5] object-cover rounded-sm"
                />
              </div>
              <p className="text-xs text-muted-foreground text-right mt-2">
                Size: 10x12 inches
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoRideSection;
