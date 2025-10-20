import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Sponsors } from "@/components/sponsors";
import { Footer } from "@/components/footer";
import "./App.css";

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Sponsors />
      <Footer />
    </main>
  );
}

export default App;
