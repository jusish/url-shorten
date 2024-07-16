'use client';
import { useState } from 'react';
import ShortenerForm from '../app/components/ShortenerForm';

export default function Home() {
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async (url) => {
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    setShortUrl(`${window.location.origin}/${data.id}`);
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">URL Shortener</h1>
        <ShortenerForm onSubmit={handleShorten} />
        {shortUrl && (
            <div className="mt-4">
              <a href={shortUrl} className="text-blue-500">
                {shortUrl}
              </a>
            </div>
        )}
      </div>
  );
}
