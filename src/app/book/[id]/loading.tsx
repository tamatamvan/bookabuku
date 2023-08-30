import { HeadingText } from '~/components/heading-text';

export default function Loading() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <HeadingText as="h1" className="text-4xl animate-pulse">
        Getting your book from the shelf...
      </HeadingText>
    </div>
  );
}
