import Hero from './home/partials/hero';
import Hero1 from './home/partials/hero1';
import Hero2 from './home/partials/hero2';
import Navbar from './home/partials/navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero1 />
      <Hero2 />
    </div>
  );
}
