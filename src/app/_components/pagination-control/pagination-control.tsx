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
  );
}
