import Hero from '../components/Hero';
import Intro from '../components/Intro';
import FeaturedWork from '../components/FeaturedWork';
import Featured from '../components/Featured';
import Capabilities from '../components/Capabilities';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedWork />
      <Featured />
      <Capabilities variant="light" />
    </>
  );
}
