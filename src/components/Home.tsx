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
import stillLife1 from "@/assets/still-life-1.png";
import stillLife2 from "@/assets/still-life-2.png";
import portrait1 from "@/assets/portrait-1.png";
import portrait2 from "@/assets/portrait-2.png";
import sketch1 from "@/assets/sketch-1.png";
import sketch2 from "@/assets/sketch-2.png";
import sketch3 from "@/assets/sketch-3.png";
import streetPainting from "@/assets/street-painting.png";
import photography1 from "@/assets/photography-1.png";
import photography2 from "@/assets/photography-2.png";
import photography3 from "@/assets/photography-3.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroSection />

      <div id="contents">
        <ContentsGrid />
      </div>

      <ArtworkSection
        id="sketches"
        title="Sketching What I See:"
        description="These are my observational sketches created in my sketchbook during my travels."
        artworks={[
          { image: sketch1, caption: "A5 - Ink drawing" },
          { image: sketch2, caption: "A5 - Ink painting" },
          { image: sketch3, caption: "A5 - Ink and water color" },
        ]}
        layout="flex"
      />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <ArtworkSection
        id="street-art"
        title="The Street That Remembers:"
        description="Inspired by South Indian temple streets, this artwork captures the presence of historical architecture and how it continues to shape movement, memory, and identity in a modernising environment."
        artworks={[
          {
            image: streetPainting,
            caption: "A3 - Watercolour and gouache painting",
          },
        ]}
        layout="featured"
      />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <ArtworkSection
        id="photography"
        title="Photography:"
        description="These are photos that were taken during my travels across my state. I've used a DSLR camera (Canon EOS 90D)."
        artworks={[
          {
            image: photography1,
            caption: `Iso - 120`,
            size: "Shutter speed - 1/500",
          },
          {
            image: photography2,
            caption: "Iso - 2500",
            size: "Shutter speed - 1/500",
            description:
              "Noticing what the eye often misses, where a subject blends into the structure and light.",
          },
          {
            image: photography3,
            caption: "Iso - 10",
            size: "Shutter speed - 1/120",
          },
        ]}
        layout="flex"
      />

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <ArtworkSection
        id="still-life"
        title="Still Life Drawing:"
        description="I've used graphite pencils to draw these observational drawings of objects around my house. I've set up the objects according to the pictures I found online."
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
        description="Drawing the human face from observation is a meticulous task, especially while balancing values to not only portray the image but also emotions such as happiness."
        artworks={[
          { image: portrait2, caption: "A4 - Pencil drawing" },
          { image: portrait1, caption: "A4 - Charcoal drawing" },
        ]}
        layout="grid"
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
