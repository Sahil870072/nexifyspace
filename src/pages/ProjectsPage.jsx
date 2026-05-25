import Projects from '../components/Projects';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        tag="Our Work"
        title="Projects That"
        highlight="Define Eras."
        sub="Six bold builds that moved the needle for ambitious brands."
      />
      <Projects />
      <Footer />
    </>
  );
}
