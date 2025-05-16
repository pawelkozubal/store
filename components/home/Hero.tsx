import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl text-primary'>
          Heaven & Hue
        </h1>
        <h3 className='mt-8 max-w-2xl font-semibold text-2xl tracking-tight sm:text-3xl'>
          Where Comfort Meets Character
        </h3>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Discover thoughtfully designed pieces that turn your space into a sanctuary. From cozy beds to statement lighting and stylish accents,
          Haven & Hue brings comfort and personality home.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products'>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
