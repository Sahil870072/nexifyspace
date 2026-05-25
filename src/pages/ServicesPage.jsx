import Services from '../components/Services';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="What We Do"
        title="Services Built for"
        highlight="Impact."
        sub="We craft digital products that don't just look good — they grow businesses."
      />
      <Services />
      <Footer />
    </>
  );
}
