'use client';

import { HeartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

import { shallow } from 'zustand/shallow';
import { useFavoriteStore } from '~/lib/favorite-store';

type FavoriteButtonProps = {
  bookId: number;
};

export function FavoriteButton({ bookId }: FavoriteButtonProps) {
  const [favorites, like, unlike] = useFavoriteStore((store) => [
    store.favorites,
    store.like,
    store.unlike,
  ]);

  const isFavorite = favorites.includes(bookId);

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
    >
      <HeartIcon
        className={clsx('h-6 w-6 mr-2', { 'fill-red-600': isFavorite })}
      />{' '}
      {isFavorite ? "You've liked this" : 'Add to favorites'}
    </button>
  );
}
