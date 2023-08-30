import clsx from 'clsx';
import { Merriweather } from 'next/font/google';
import { ComponentProps } from 'react';

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
});

type HeadingTextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function HeadingText({
  as = 'h1',
  children,
  className = '',
}: ComponentProps<'h1'> & HeadingTextProps) {
  const As = as;
  return (
    <As className={clsx(merriweather.className, className)}>{children}</As>
  );
}
