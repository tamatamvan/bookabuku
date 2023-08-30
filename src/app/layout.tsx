import './globals.css';

import type { Metadata } from 'next';
import { Merriweather_Sans } from 'next/font/google';

import Link from 'next/link';
import { HeadingText } from '~/components/heading-text';

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
              <HeadingText
                as="h1"
                className="text-4xl font-bold underline md:mb-2"
              >
                bookabuku
              </HeadingText>
              <p className="hidden italic text-sm md:inline-block">
                Find book recommendations you will absolutely love
              </p>
            </Link>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
