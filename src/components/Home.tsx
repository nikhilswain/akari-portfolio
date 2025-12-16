import HeroSection from "@/components/HeroSection";
import ContentsGrid from "@/components/ContentsGrid";
import ArtworkSection from "@/components/ArtworkSection";
import AutoRideSection from "@/components/AutoRideSection";
import AbstractionSection from "@/components/AbstractionSection";
import MonoprintTrialsSection from "@/components/MonoprintTrialsSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

// Import artwork images
// import stillLife1 from "@/assets/still-life-1.jpg";
// import stillLife2 from "@/assets/still-life-2.jpg";
// import portrait1 from "@/assets/portrait-1.jpg";
// import portrait2 from "@/assets/portrait-2.jpg";
// import sketch1 from "@/assets/sketch-1.jpg";
// import sketch2 from "@/assets/sketch-2.jpg";
// import streetPainting from "@/assets/street-painting.jpg";

import stillLife1 from "@/assets/placeholder.png";
import stillLife2 from "@/assets/placeholder.png";
import portrait1 from "@/assets/placeholder.png";
import portrait2 from "@/assets/placeholder.png";
import sketch1 from "@/assets/placeholder.png";
import sketch2 from "@/assets/placeholder.png";
import streetPainting from "@/assets/placeholder.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection />

      <div id="contents">
        <ContentsGrid />
      </div>

      <ArtworkSection
        id="still-life"
        title="Still Life Drawing:"
        description="I've used graphite pencils to draw these observational drawings of objects around my house. I've set up the objects according to the pictures I found online, focusing on light, shadow, and the subtle gradations that bring everyday objects to life."
        artworks={[
          { image: stillLife1, caption: "A4 - Pencil drawing" },
          { image: stillLife2, caption: "A4 - Pencil drawing" },
        ]}
        layout="grid"
      />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <ArtworkSection
        id="portraits"
        title="Portraits:"
        description="Drawing the human face from observation is a meticulous task, especially while balancing values to not only portray the image but also emotions such as happiness, wisdom, and contemplation. Each portrait tells a story of the subject's inner world."
        artworks={[
          { image: portrait2, caption: "A4 – Pencil drawing" },
          { image: portrait1, caption: "A4 – Charcoal drawing" },
        ]}
        layout="grid"
      />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <ArtworkSection
        id="sketches"
        title="Sketching What I See:"
        description="These are my observational sketches created in my sketchbook during my travels. Quick captures of architectural details, natural landscapes, and urban scenes that caught my eye – each sketch preserving a moment in time."
        artworks={[
          { image: sketch1, caption: "A5 – Ink drawing" },
          { image: sketch2, caption: "A5 – Ink painting" },
        ]}
        layout="grid"
      />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <ArtworkSection
        id="street-art"
        title="The Street That Remembers:"
        description="Inspired by South Indian temple streets, this artwork captures the presence of historical architecture and how it continues to shape movement, memory, and identity in a modernising environment. The vibrant colors reflect the energy of daily life against ancient structures."
        artworks={[
          {
            image: streetPainting,
            caption: "A3 – Watercolour and gouache painting",
            size: "Size: 16inch × 20inch",
          },
        ]}
        layout="featured"
      />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <AutoRideSection />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <MonoprintTrialsSection />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <AbstractionSection />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <ProcessSection />

      <Footer />
    </div>
  );
};

export default Home;
