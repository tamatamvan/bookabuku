import { z } from 'zod';
import { BookBaseSchema } from '~/schemas/book';
import { apiUrl } from '~/lib/api-url';

import { BookListItem } from './_components/book-list-item';
import { PaginationControl } from './_components/pagination-control';

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
    pageCount,
    books: z.array(BookBaseSchema).parse(books),
  };
}

type THomeProps = {
  searchParams?: Record<string, string | string[]>;
};

export default async function Home({ searchParams }: THomeProps) {
  const { page, pageCount, books } = await fetchBooks({
    page: parseInt((searchParams?.page as string) ?? 1),
    limit: 5,
  });

  return (
    <main className="flex max-w-full flex-wrap items-start">
      {books.map((book) => (
        <BookListItem key={`book-item-${book.id}`} {...book} />
      ))}
      <PaginationControl page={page} pageCount={pageCount} />
    </main>
  );
}
