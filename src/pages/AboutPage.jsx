import About from '../components/About';
import Team from '../components/Team';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Our Ethos"
        title="The Team Behind"
        highlight="NexifySpace."
        sub="We don't follow trends. We set them."
      />
      <About />
      <Team />
      <Footer />
    </>
  );
}
