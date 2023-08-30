import './globals.css';

import clsx from 'clsx';

import type { Metadata } from 'next';
import { Merriweather, Merriweather_Sans } from 'next/font/google';

import { HeartIcon } from '@heroicons/react/24/solid';

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
            <div className="w-full my-8">
              <h1
                className={clsx(
                  merriweather.className,
                  'text-3xl md:text-4xl font-bold underline mb-2'
                )}
              >
                bookabuku
              </h1>
              <p className="hidden italic text-sm md:inline-block">
                Find book recommendations you will absolutely love
              </p>
            </div>
            <Link
              href="/favorites"
              className="flex items-center hover:underline ease-linear transition-all "
            >
              <HeartIcon className="w-8 h-8 fill-red-600 mr-2 md:w-6 md:h-6 shrink-0" />
              <span className="hidden md:block shrink-0">Your Favorites</span>
            </Link>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
