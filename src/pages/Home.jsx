import Hero from '../components/Hero';
import Intro from '../components/Intro';
import FeaturedWork from '../components/FeaturedWork';
import Capabilities from '../components/Capabilities';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedWork />
      <Capabilities variant="light" />
    </>
  );
}
