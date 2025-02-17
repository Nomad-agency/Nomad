import Section2 from './sections/Section2/Section2';
import Section3 from './sections/Section3/Section3';
import Section4 from './sections/Section4/Section4';
import Section5 from './sections/Section5/Section5';
import Footer from '../../components/Footer/Footer';
import { Preloader } from '../../widgets/Preloader';

export default function HomePage() {
  return (
    <>
      <Preloader>
        <main>
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </main>
        <Footer />
      </Preloader>
    </>
  );
}
