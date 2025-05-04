import Hero from "./home/partials/hero";
import Navbar from "./home/partials/navbar";
import Subhero from "./home/partials/subhero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Subhero />
    </div>
  );
}
