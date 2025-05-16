import Link from 'next/link';
import { Button } from '../ui/button';
import { VscCode } from 'react-icons/vsc';
import { LuLampCeiling } from 'react-icons/lu';

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <LuLampCeiling className='w-6 h-6' />
      </Link>
    </Button>
  );
}
export default Logo;
