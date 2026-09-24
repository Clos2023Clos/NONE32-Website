import c0 from '@/lib/treatment-approved/chunk00';
import c1 from '@/lib/treatment-approved/chunk01';
import c2 from '@/lib/treatment-approved/chunk02';
import c3 from '@/lib/treatment-approved/chunk03';
import c4 from '@/lib/treatment-approved/chunk04';

const base64 = c0 + c1 + c2 + c3 + c4;
const bytes = Buffer.from(base64, 'base64');

export async function GET() {
  return new Response(bytes, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
