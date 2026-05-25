import Team from '../components/Team';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

export default function TeamPage() {
  return (
    <>
      <PageHero
        tag="The Builders"
        title="Meet the"
        highlight="NexifySpace Team."
        sub="Two builders. One vision. Infinite execution."
      />
      <Team />
      <Footer />
    </>
  );
}
