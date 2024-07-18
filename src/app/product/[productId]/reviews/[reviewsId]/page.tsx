import React from 'react';
import { notFound } from 'next/navigation';
import { parse } from 'path';

type Props = {};

export default function page({
  params,
}: {
  params: { productId: string; reviewsId: string };
}) {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review{params.reviewsId} for product {params.productId}
    </div>
  );
}
