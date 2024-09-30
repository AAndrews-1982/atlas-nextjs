import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  // Page loading
  await new Promise((r) => setTimeout(r, 3000));
    
  return <div>Topics Page: {params.id}</div>;
  }