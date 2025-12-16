import { motion } from "framer-motion";

// import stillLife1 from "@/assets/still-life-1.jpg";
// import portrait1 from "@/assets/portrait-1.jpg";
// import sketch1 from "@/assets/sketch-1.jpg";
// import streetPainting from "@/assets/street-painting.jpg";
// import autoRideMain from "@/assets/auto-ride-main.jpg";
// import monoprintMain from "@/assets/monoprint-main.jpg";
// import sculpture1 from "@/assets/sculpture-1.jpg";
// import processSketch from "@/assets/process-sketch.jpg";

import stillLife1 from "@/assets/placeholder.png";
import portrait1 from "@/assets/placeholder.png";
import sketch1 from "@/assets/placeholder.png";
import streetPainting from "@/assets/placeholder.png";
import autoRideMain from "@/assets/placeholder.png";
import monoprintMain from "@/assets/placeholder.png";
import sculpture1 from "@/assets/placeholder.png";
import processSketch from "@/assets/placeholder.png";

interface ContentsItem {
  id: number;
  title: string;
  image: string;
  sectionId: string;
}

const contents: ContentsItem[] = [
  { id: 1, title: "Still Life", image: stillLife1, sectionId: "still-life" },
  { id: 2, title: "Portraits", image: portrait1, sectionId: "portraits" },
  { id: 3, title: "Sketches", image: sketch1, sectionId: "sketches" },
  {
    id: 4,
    title: "Street Art",
    image: streetPainting,
    sectionId: "street-art",
  },
  { id: 5, title: "Auto Ride", image: autoRideMain, sectionId: "auto-ride" },
  {
    id: 6,
    title: "Monoprints",
    image: monoprintMain,
    sectionId: "monoprint-trials",
  },
  { id: 7, title: "Abstraction", image: sculpture1, sectionId: "abstraction" },
  { id: 8, title: "Process", image: processSketch, sectionId: "process" },
];

const ContentsGrid = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold font-serif gradient-text mb-12"
        >
          CONTENTS
        </motion.h2>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
          {contents.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => scrollToSection(item.sectionId)}
              className="contents-card aspect-square rounded-md overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover brightness-75 group-hover:brightness-50 transition-all duration-500"
              />
              <span className="contents-number">{item.id}</span>
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-foreground/80 truncate">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentsGrid;
