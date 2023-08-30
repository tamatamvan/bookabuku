import clsx from 'clsx';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  weight: ['700'],
  subsets: ['latin'],
});

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <h1 className={clsx(merriweather.className, 'text-4xl animate-pulse')}>
        Getting your book from the shelf...
      </h1>
    </div>
  );
}
