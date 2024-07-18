'use client';
import React from 'react';
import { UseCatStore } from '../stores/catStore';

type Props = {};

export default function Cats({}: Props) {
  //   const {
  //     cats: { bigCats, smallCats },
  //   } = UseCatStore();
  const bigCats = UseCatStore((state) => state.cats.bigCats);

  return (
    <div className='flex justify-center '>
      <h1>Partial states from catstore</h1>
      <p>BigCats: {bigCats}</p>
      <p>{Math.random()}</p>
    </div>
  );
}
