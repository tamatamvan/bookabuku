'use client';

import { HeartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

import { useStore } from '~/lib/use-store';
import { useFavoriteStore } from '~/lib/favorite-store';
import { ComponentProps } from 'react';

type FavoriteButtonProps = {
  bookId: number;
};

export function FavoriteButton({
  bookId,
  ...otherProps
}: FavoriteButtonProps & ComponentProps<'button'>) {
  const favorites = useStore(useFavoriteStore, (state) => state.favorites);

  const { like, unlike } = useFavoriteStore((action) => ({
    like: action.like,
    unlike: action.unlike,
  }));

  const isFavorite = favorites?.includes(bookId);

  const toggleFavorite = (bookId: number) => {
    if (isFavorite) {
      unlike(bookId);
    } else {
      like(bookId);
    }
  };

  return (
    <button
      className="flex items-center my-1"
      onClick={() => toggleFavorite(bookId)}
      {...otherProps}
    >
      <HeartIcon
        className={clsx('h-6 w-6 mr-2', { 'fill-red-600': isFavorite })}
      />{' '}
      {isFavorite ? "You've liked this" : 'Add to favorites'}
    </button>
  );
}
