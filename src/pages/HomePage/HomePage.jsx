import Section2 from './sections/Section2/Section2';
import Section3 from './sections/Section3/Section3';
import Section4 from './sections/Section4/Section4';
import Section5 from './sections/Section5/Section5';
import Footer from '../../components/Footer/Footer';
import { Preloader } from '../../widgets/Preloader';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isPreloader, setIsPreloader] = useState(true);

  useEffect(() => {
    // Kiểm tra xem đã có trạng thái preloader trong localStorage chưa
    const preloaderState = sessionStorage.getItem('preloaderState');
    if (preloaderState === 'false') {
      setIsPreloader(false);
    } else {
      // Nếu chưa có, set trạng thái preloader là true và lưu vào localStorage
      setIsPreloader(true);
      sessionStorage.setItem('preloaderState', 'false');
    }
  }, []);
  return (
    <>
      <Preloader isPreloader={isPreloader}>
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

