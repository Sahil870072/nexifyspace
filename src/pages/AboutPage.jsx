import About from '../components/About';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Our Ethos"
        title="The Studio Behind"
        highlight="NexifySpace."
        sub="We don't follow trends. We set them."
      />
      <About />
      <Footer />
    </>
  );
}

