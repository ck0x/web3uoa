import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Events } from "@/components/events";
import { Sponsors } from "@/components/sponsors";
import { Footer } from "@/components/footer";
import "./App.css";

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Sponsors />
      <Footer />
    </main>
  );
}

export default App;
