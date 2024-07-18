'use client';

import React from 'react';
import Link from 'next/link';
import { UseStore } from '../stores/bearStore';
import { UseCatStore } from '../stores/catStore';
import { shallow } from 'zustand/shallow';
import Cats from '../component/Cats';

type Props = {};

export default function page({}: Props) {
  const productId = 100;

  // const bears = UseStore((state) => state.bears);
  // const increasePopulation = UseStore((state) => state.increasePopulation);
  // const removeAllBears = UseStore((state) => state.removeAllBears);
  const { bears, increasePopulation, removeAllBears, reset } = UseStore(
    (state) => state
  );

  // const bigCats = UseCatStore((state) => state.cats.bigCats);
  // const smallCats = UseCatStore((state) => state.cats.smallCats);
  // const increaseBigCats = UseCatStore((state) => state.increaseBigCats);
  // const increaseSmallCats = UseCatStore((state) => state.increaseSmallCats);
  // const summary = UseCatStore((state) => state.summary);
  // console.log('summary', summary());

  // const {
  //   cats: { bigCats, smallCats },
  //   increaseBigCats,
  //   increaseSmallCats,
  //   summary,
  // } = UseCatStore((state) => state);

  const { increaseBigCats, increaseSmallCats } = UseCatStore(
    (state) => ({
      increaseBigCats: state.increaseBigCats,
      increaseSmallCats: state.increaseSmallCats,
    }),
    shallow
  );

  return (
    <div>
      <Link href={'/'}>product list</Link>
      <h1>
        <Link href='product/1'>product 1</Link>
      </h1>
      <h1>
        <Link href='product/2' replace>
          product 2
        </Link>
      </h1>
      <h1>
        <Link href={`product/${productId}`}>product {productId}</Link>
      </h1>

      <div className='flex justify-center'>
        <h1 className='text-2xl font-bold font-mono'>Zustand Component</h1>
        <h1 className='text-xl font-mono'>Total {bears}</h1>
        <div className='flex justify-between'>
          <button onClick={increasePopulation} className='bg-blue-600'>
            Add
          </button>
          <button onClick={removeAllBears} className='bg-red-600'>
            Remove
          </button>
          <button onClick={reset}>clear storage</button>
        </div>
      </div>

      <div className='flex flex-col justify-center'>
        <h1 className='text-2xl font-bold font-mono'>Cat Store</h1>
        {/* <h1 className='text-2xl font-bold font-mono'>Big cat {bigCats}</h1> */}
        <h1 className='text-2xl font-bold font-mono'>
          {/* Small Store {smallCats} */}
        </h1>
        <Cats />
        <div className='flex flex-col justify-between'>
          <button onClick={increaseBigCats}>Add big cats</button>
          <button onClick={increaseSmallCats}>Add small cats</button>
        </div>
      </div>
    </div>
  );
}
