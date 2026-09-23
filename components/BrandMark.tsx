'use client';

import { useState } from 'react';

const logoUrl = 'https://framerusercontent.com/images/KKpZfPwzmZcT7F6ex8PXATYkw4.png?height=450&width=800';

export function BrandMark({ width = 160 }: { width?: number }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-label="NONE32"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          minHeight: 42,
          fontFamily: 'var(--font-display), Georgia, serif',
          fontSize: width >= 190 ? 34 : 28,
          fontWeight: 500,
          letterSpacing: '.08em',
          color: '#fbf8f3'
        }}
      >
        NONE32
      </span>
    );
  }

  return (
    <img
      src={logoUrl}
      alt="NONE32"
      width={width}
      height={Math.round(width * 0.35)}
      onError={() => setFailed(true)}
      style={{ width, height: 'auto', objectFit: 'contain' }}
    />
  );
}
