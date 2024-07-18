import React from 'react';

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div>
      <h2 className='text-2xl'>PAGE NOT FOUND</h2>
      <p>Could not find requested resource</p>
    </div>
  );
}
