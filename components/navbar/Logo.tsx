import Link from 'next/link';
import { Button } from '../ui/button';
import { VscCode } from 'react-icons/vsc';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <h1 className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl'>Haven & Hue</h1>
        <VscCode className='w-6 h-6' />
      </Link>
    </Button>
  );
}
export default Logo;
