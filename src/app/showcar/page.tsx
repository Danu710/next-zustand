'use client';
import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';

export default function Page() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    'https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles',
    fetcher
  );

  console.log('data', data);

  if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Vehicles</h1>
      <ul>
        {data?.type.map((item: any) => (
          <div key={item.id}>
            <h2>Category ID: {item.category_id}</h2>
            <ul>
              {item.car_type.map((car: any) => (
                <li key={car.vehicle}>
                  <p>Vehicle: {car.vehicle}</p>
                  <Image
                    src={car.imageURL}
                    alt={car.vehicle}
                    width={100}
                    height={100}
                  />
                  <p>Price: {car.price}</p>
                  <p>Description: {car.description.join(', ')}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}
