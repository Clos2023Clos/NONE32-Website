import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TreatmentPageEs } from '@/components/TreatmentPageEs';
import { treatmentPages, treatmentSlugs } from '@/lib/treatments';

export function generateStaticParams(){return treatmentSlugs.map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params; const data=treatmentPages[slug]; if(!data)return{};
 const names:Record<string,string>={'dental-implants-tijuana':'Implantes dentales en Tijuana','all-on-4-tijuana':'All-on-4 y rehabilitación de arco completo en Tijuana','dental-crowns-tijuana':'Coronas dentales en Tijuana','veneers-tijuana':'Carillas dentales en Tijuana','general-dentistry-tijuana':'Odontología general en Tijuana'};
 const title=names[slug]||data.navLabel; const url=`https://none32.com/es/treatments/${slug}`;
 return {title,description:`Información clara sobre ${title.toLowerCase()} en NONE32, Zona Río, Tijuana. Atención en español e inglés.`,alternates:{canonical:url,languages:{en:`https://none32.com/treatments/${slug}`,es:url}},openGraph:{type:'article',url,title:`${title} | NONE32`,siteName:'NONE32',locale:'es_MX'}};
}
export default async function SpanishTreatmentRoute({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const data=treatmentPages[slug];if(!data)notFound();return <TreatmentPageEs data={data}/>;}
