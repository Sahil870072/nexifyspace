import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Get In Touch"
        title="Ready to Build Something"
        highlight="Extraordinary?"
        sub="Let's turn your vision into a digital reality. We reply within 24 hours."
      />
      <Contact />
      <Footer />
    </>
  );
}
