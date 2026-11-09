'use client';

import { useEffect } from 'react';

/** The root shell is shared with English routes. Keep the document language
 * aligned with the active Spanish route, including client-side navigation. */
export function SpanishDocumentLanguage() {
  useEffect(() => {
    document.documentElement.lang = 'es-MX';
    return () => { document.documentElement.lang = 'en'; };
  }, []);
  return null;
}
