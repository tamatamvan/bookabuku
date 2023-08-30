import './globals.css';

import clsx from 'clsx';

import type { Metadata } from 'next';
import { Merriweather, Merriweather_Sans } from 'next/font/google';

import { HeartIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const merriweatherSans = Merriweather_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'bookabuku',
  description: 'Find book recommendations you will absolutely love',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={merriweatherSans.className}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="w-full my-8">
              <h1
                className={clsx(
                  merriweather.className,
                  'text-4xl font-bold underline md:mb-2'
                )}
              >
                bookabuku
              </h1>
              <p className="hidden italic text-sm md:inline-block">
                Find book recommendations you will absolutely love
              </p>
            </Link>
            <Link
              href="/favorites"
              className="flex flex-col justify-center items-center hover:underline ease-linear transition-all shrink-0"
            >
              <HeartIcon className="w-6 h-6 md:w-8 md:h-8 fill-red-600" />
              <span className="block shrink-0 text-sm">My Favs</span>
            </Link>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
