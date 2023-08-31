import Image from 'next/image';

import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { format } from 'date-fns';

import { apiUrl } from '~/lib/api-url';
import { BookSchema } from '~/schemas/book';
import { FavoriteButton } from '~/components/favorite-button';

async function getBookDetail(id: number | string) {
  const bookResp = await fetch(apiUrl(`/books/${id}`));

  if (!bookResp.ok) {
    throw new Error(bookResp.statusText);
  }

  return BookSchema.parse(await bookResp.json());
}

export default async function BookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const book = await getBookDetail(params.id);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">{book.title}</h1>
      <Image
        className="mb-4 aspect-[2/3]"
        alt={`Cover of ${book.title}`}
        src={book.cover}
        width={200}
        height={300}
        priority
      />
      <p className="mb-2">
        <span className="font-bold">Author:</span> {book.author}
      </p>
      <p className="mb-2">
        <span className="font-bold">Published date:</span>{' '}
        {format(new Date(book.publicationDate), 'dd MMM yyyy')}
      </p>
      <p>
        <span className="font-bold">Description:</span>
        <br />
        {book.description}
      </p>
      <div className="my-4 flex flex-col">
        <FavoriteButton bookId={book.id} />
        <Link href="/" className="flex items-center">
          <MagnifyingGlassIcon className="mr-2 h-6 w-6" /> Explore other books
        </Link>
      </div>
    </div>
  );
}
