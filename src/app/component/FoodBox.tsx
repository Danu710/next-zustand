'use client';
import React from 'react';
import {
  UseFoodStore,
  addOneFish,
  removeOneFish,
  removeAllFish,
  add5Fish,
} from '../stores/foodStore';

export default function FoodBox() {
  //const { addOneFish, removeOneFish, removeAllFish } = UseFoodStore();
  //fish

  //const fish = UseFoodStore.getState().fish;
  const fish = UseFoodStore((state) => state.fish);
  // const add5Fish = () => {
  //   UseFoodStore.setState((state) => ({ fish: state.fish + 5 }));
  // };

  return (
    <div className='flex flex-col justify-center max-w-full my-auto'>
      <div className='flex flex-row justify-between'>
        <h1 className='text-3xl font-bold'>FoodBox</h1>
        <p className='text-2xl font-normal'>Fish {fish}</p>
      </div>
      <div className='grid grid-cols-3 gap-3'>
        <button className='px-4 py-2 bg-blue-500' onClick={addOneFish}>
          Add one fish
        </button>
        <button className='px-4 py-2 bg-red-500' onClick={removeOneFish}>
          Remove one fish
        </button>
        <button className='px-4 py-2 bg-red-500' onClick={removeAllFish}>
          remove all fish
        </button>
        <button className='px-4 py-2 bg-green-500' onClick={add5Fish}>
          Add 5 fish
        </button>
      </div>
    </div>
  );
}
