import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Artwork {
  image: string;
  caption: string;
  size?: string;
}

interface ArtworkSectionProps {
  id: string;
  title: string;
  description: string;
  artworks: Artwork[];
  layout?: "grid" | "featured" | "asymmetric" | "flex";
}

const ArtworkSection = ({
  id,
  title,
  description,
  artworks,
  layout = "grid",
}: ArtworkSectionProps) => {
  return (
    <section id={id} className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            layout === "flex"
              ? ""
              : "grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12"
          )}
        >
          {/* Artworks Grid */}
          <div
            className={`${
              layout === "featured" ? "lg:col-span-7" : "lg:col-span-8"
            }`}
          >
            {layout === "grid" && (
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {artworks.map((artwork, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className="artwork-container">
                      <img
                        src={artwork.image}
                        alt={artwork.caption}
                        className="artwork-image aspect-4/5 rounded-sm"
                      />
                    </div>
                    <p className="caption-text mt-4">{artwork.caption}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {layout === "featured" && artworks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="artwork-container"
              >
                <img
                  src={artworks[0].image}
                  alt={artworks[0].caption}
                  className="artwork-image w-full rounded-sm"
                />
                <p className="caption-text mt-4">{artworks[0].caption}</p>
                {artworks[0].size && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {artworks[0].size}
                  </p>
                )}
              </motion.div>
            )}

            {layout === "asymmetric" && (
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {artworks.map((artwork, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="artwork-container"
                  >
                    <img
                      src={artwork.image}
                      alt={artwork.caption}
                      className="artwork-image aspect-square rounded-sm"
                    />
                    <p className="caption-text mt-2 text-xs">
                      {artwork.caption}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Title and Description */}
          <div
            className={`${
              layout === "featured" ? "lg:col-span-5" : "lg:col-span-4"
            } lg:sticky lg:top-24 lg:self-start`}
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="section-heading mb-6">{title}</h2>
              <p className="text-foreground/70 leading-relaxed text-sm md:text-base font-light">
                {description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {layout === "flex" && (
          <div className="flex flex-wrap gap-4 mt-4">
            {artworks.map((artwork, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="md:flex-1"
              >
                <div className="artwork-container">
                  <img
                    src={artwork.image}
                    alt={artwork.caption}
                    className="artwork-image rounded-sm"
                  />
                </div>
                <p className="caption-text mt-4">{artwork.caption}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtworkSection;
