import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ServicesPreview from '../components/ServicesPreview';
import Team from '../components/Team';
import ProjectsPreview from '../components/ProjectsPreview';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesPreview />
      <ProjectsPreview />
      <Testimonials />
      <Footer />
    </>
  );
}
