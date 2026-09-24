'use client';

import { useEffect, useState } from 'react';

const chunkUrls = [
  '/assets/clinic-display-0.txt',
  '/assets/clinic-display-1.txt',
  '/assets/clinic-display-2.txt'
];

export function ClinicPhoto() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    Promise.all(
      chunkUrls.map(async (url) => {
        const response = await fetch(url, { cache: 'force-cache' });
        if (!response.ok) throw new Error(`Unable to load ${url}`);
        return response.text();
      })
    )
      .then((parts) => {
        if (active) setSrc(`data:image/webp;base64,${parts.join('')}`);
      })
      .catch(() => {
        if (active) setSrc(null);
      });

    return () => {
      active = false;
    };
  }, []);

  if (!src) {
    return (
      <div
        aria-hidden="true"
        className="photo-cover evening-photo"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: '#100d0b' }}
      />
    );
  }

  return (
    <img
      src={src}
      alt="NONE32 clinic reception in Zona Río, Tijuana"
      className="photo-cover evening-photo"
      decoding="async"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  );
}
