import { HeadingText } from '~/components/heading-text';

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <HeadingText as="h1" className="animate-pulse text-4xl">
        Getting your book from the shelf...
      </HeadingText>
    </div>
  );
}
