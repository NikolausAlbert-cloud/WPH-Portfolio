import Hero from './home/partials/hero';
import Hero1 from './home/partials/hero1';
import Hero2 from './home/partials/hero2';
import Navbar from './home/partials/navbar';
import What_people_say from './home/partials/what_people_say';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Hero1 />
      <Hero2 />
      <What_people_say />
    </div>
  );
}
