'use client';

import { useState } from 'react';

type SafeImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  width?: number;
  height?: number;
};

export default function SafeImage({
  src,
  alt,
  fill,
  sizes,
  className,
  width,
  height
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-label={alt}
        role="img"
        style={{
          position: fill ? 'absolute' : 'relative',
          inset: fill ? 0 : undefined,
          width: fill ? '100%' : width ?? '100%',
          height: fill ? '100%' : height ?? '100%',
          minHeight: fill ? '100%' : undefined,
          display: 'grid',
          placeItems: 'center',
          overflow: 'hidden',
          background:
            'radial-gradient(circle at 20% 20%, rgba(200,157,82,.24), transparent 28%), radial-gradient(circle at 78% 70%, rgba(75,22,59,.34), transparent 34%), linear-gradient(135deg,#0b0b0b,#162118 55%,#1c1018)',
          color: 'rgba(255,255,255,.72)',
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '.28em',
          textTransform: 'uppercase',
          textAlign: 'center',
          padding: 24,
          zIndex: 0
        }}
      >
        NONE32 · ZONA RÍO · TIJUANA
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      onError={() => setFailed(true)}
      style={fill ? { position: 'absolute', inset: 0, width: '100%', height: '100%' } : undefined}
    />
  );
}
