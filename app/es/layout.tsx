import type { ReactNode } from 'react';
import { SpanishDocumentLanguage } from '@/components/SpanishDocumentLanguage';

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SpanishDocumentLanguage />
      {children}
    </>
  );
}
