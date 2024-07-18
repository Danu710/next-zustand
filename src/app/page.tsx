import Link from 'next/link';
import FoodBox from './component/FoodBox';
import Bearbox from './component/Bearbox';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <Link href={'/product'}>Helloo</Link>
        <FoodBox />
      </div>
      <div>
        <Bearbox />
      </div>
    </main>
  );
}
