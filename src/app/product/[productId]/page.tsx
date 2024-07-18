import React from 'react';

type Props = {};

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <div>page {params.productId}</div>;
}
