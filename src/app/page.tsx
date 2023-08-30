import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

import { z } from 'zod';
import { BookBaseSchema } from '~/schemas/book';
import { apiUrl } from '~/lib/apiUrl';

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/solid';

async function fetchBooks(params: { page: number; limit: number }) {
  const url = apiUrl('/books', {
    _page: params.page,
    _limit: params.limit,
  });
  const bookResp = await fetch(url);

  if (!bookResp.ok) {
    throw new Error('Failed to fetch data');
  }

  const books = await bookResp.json();
  const totalCount = parseInt(bookResp.headers.get('X-Total-Count') ?? '0');
  const pageCount = Math.ceil(totalCount / params.limit);

  return {
    ...params,
    totalCount,
    pageCount,
    books: z.array(BookBaseSchema).parse(books),
  };
}

type THomeProps = {
  searchParams?: Record<string, string | string[]>;
};

export default async function Home({ searchParams }: THomeProps) {
  const { page, pageCount, totalCount, books } = await fetchBooks({
    page: parseInt((searchParams?.page as string) ?? 1),
    limit: 5,
  });

  const isFirstPage = page === 1;
  const isLastPage = page >= pageCount;

  return (
    <main className="max-w-full flex flex-wrap items-start">
      {books.map((book) => (
        <div key={`book-item-${book.id}`} className="mb-4 w-full flex md:w-1/3">
          <Image
            className="aspect-[2/3] mr-4"
            alt={`Cover of ${book.title}`}
            src={book.cover}
            width={100}
            height={150}
            objectFit="contain"
          />
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-sm">by: {book.author}</p>
            <Link href={`/book/${book.id}`}>Read more</Link>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center w-full my-8">
        {!isFirstPage && (
          <Link href={`/?page=${page - 1}`}>
            <ChevronDoubleLeftIcon className="h-6 w-6 shrink-0 mr-2" />{' '}
          </Link>
        )}
        <div
          className={clsx('text-center', {
            'ml-6': page === 1,
            'mr-6': page === pageCount,
          })}
        >
          Page {page} of {pageCount}
        </div>
        {!isLastPage && (
          <Link href={`/?page=${page + 1}`}>
            <ChevronDoubleRightIcon className="h-6 w-6 shrink-0 ml-2" />
          </Link>
        )}
      </div>
    </main>
  );
}
