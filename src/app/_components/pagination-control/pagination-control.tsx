import Link from 'next/link';

import clsx from 'clsx';

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/solid';

type PaginationControlProps = {
  page: number;
  pageCount: number;
};

export function PaginationControl({ page, pageCount }: PaginationControlProps) {
  const isFirstPage = page === 1;
  const isLastPage = page >= pageCount;

  return (
    <div className="my-8 flex w-full items-center justify-center">
      {!isFirstPage && (
        <Link href={`/?page=${page - 1}`}>
          <ChevronDoubleLeftIcon className="mr-2 h-6 w-6 shrink-0" />{' '}
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
          <ChevronDoubleRightIcon className="ml-2 h-6 w-6 shrink-0" />
        </Link>
      )}
    </div>
  );
}
