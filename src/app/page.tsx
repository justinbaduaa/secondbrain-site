import Background from "@/components/Background";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div style={{ position: "relative" }}>
        <Background />
        <Hero />
      </div>
      <ProductSection />
      <Footer />
    </main>
  );
}
