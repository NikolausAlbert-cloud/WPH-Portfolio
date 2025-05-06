import Faq from './home/partials/faq';
import Hero from './home/partials/hero';
import Hero_picture from './home/partials/hero_picture';
import Navbar from './home/partials/navbar';
import What_people_say from './home/partials/what_people_say';
import Who_I_am from './home/partials/who_I_am';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Hero />
      <Hero_picture />
      <Who_I_am />
      <Faq />
      <What_people_say />
    </div>
  );
}
