import Career_journey from './home/partials/career_journey';
import Contact_me from './home/partials/contact_me';
import Faq from './home/partials/faq';
import Hero from './home/partials/hero';
import Hero_picture from './home/partials/hero_picture';
import Navbar from './home/partials/navbar';
import Project_exp from './home/partials/project_exp';
import What_people_say from './home/partials/what_people_say';
import Who_I_am from './home/partials/who_I_am';
import Why_standout_table from './home/partials/why_standout_table';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Hero />
      <Hero_picture />
      <Who_I_am />
      <Career_journey />
      <Faq />
      <Why_standout_table />
      <Project_exp />
      <What_people_say />
      <Contact_me />
    </div>
  );
}
