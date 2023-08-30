import Image from 'next/image';
import Link from 'next/link';

import { BookOpenIcon } from '@heroicons/react/24/outline';

import { z } from 'zod';
import { BookBaseSchema } from '~/schemas/book';

import { FavoriteButton } from '~/components/favorite-button';

type BookListItemProps = z.infer<typeof BookBaseSchema>;

export function BookListItem(book: BookListItemProps) {
  return (
    <div className="mb-4 w-full flex md:w-1/3">
      <Image
        className="aspect-[2/3] mr-4"
        alt={`Cover of ${book.title}`}
        src={book.cover}
        width={100}
        height={150}
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">{book.title}</h3>
        <p className="text-sm">by: {book.author}</p>
        <div className="my-2">
          <Link href={`/book/${book.id}`} className="flex items-center my-1">
            <BookOpenIcon className="h-6 w-6 mr-2" /> Read more
          </Link>
          <FavoriteButton bookId={book.id} />
        </div>
      </div>
    </div>
  );
}
