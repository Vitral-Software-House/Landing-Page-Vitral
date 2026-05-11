import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Capacidades } from '@/components/Capacidades';
import { Processo } from '@/components/Processo';
import { Time } from '@/components/Time';
import { Stack } from '@/components/Stack';
import { Cta } from '@/components/Cta';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Capacidades />
        <Processo />
        <Time />
        <Stack />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
