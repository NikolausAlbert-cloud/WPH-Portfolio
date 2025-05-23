import Career_journey from './home/partials/career_journey';
import Contact_me from './home/partials/contact_me';
import Core_skill from './home/partials/core_skill';
import Faq from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Hero_picture from './home/partials/hero_picture';
import Navbar from './home/partials/navbar';
import Project_exp from './home/partials/project_exp';
import What_people_say from './home/partials/what_people_say';
import Who_I_am from './home/partials/who_I_am';
import Why_standout_table from './home/partials/why_standout_table';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero_picture />
      <Who_I_am />
      <Career_journey />
      <Core_skill />
      <Faq />
      <Why_standout_table />
      <Project_exp />
      <What_people_say />
      <Contact_me />
      <Footer />
    </div>
  );
}
