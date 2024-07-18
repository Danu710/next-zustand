'use client';
import React, { useEffect, useState } from 'react';
import { UseStore } from '../stores/bearStore';
import { UseFoodStore } from '../stores/foodStore';

type Props = {};

export default function Bearbox() {
  const { bears, increasePopulation, removeAllBears } = UseStore();

  const [bgColor, setBgColor] = useState('');
  //const fish = UseFoodStore((state) => state.fish);

  useEffect(() => {
    const unsub = UseFoodStore.subscribe((state, prevState) => {
      console.log(state, prevState);
      if (prevState.fish <= 5 && state.fish > 5) {
        setBgColor('bg-green-600');
      } else if (prevState.fish > 5 && state.fish <= 5) {
        setBgColor('bg-red-600');
      }
    });

    return unsub;
  }, []);

  return (
    <div
      className={`flex flex-col justify-center max-w-full my-auto ${bgColor}}`}>
      <div className='flex flex-row justify-between'>
        <h1 className='text-3xl font-bold'>Bears</h1>
        <p className='text-2xl font-normal'>Bears {bears}</p>
        <p>{Math.random()}</p>
      </div>
      <div className='grid grid-cols-3 gap-3'>
        <button className='px-4 py-2 bg-blue-500' onClick={increasePopulation}>
          Add one fish
        </button>
        <button className='px-4 py-2 bg-red-500' onClick={removeAllBears}>
          Add one fish
        </button>
      </div>
    </div>
  );
}
