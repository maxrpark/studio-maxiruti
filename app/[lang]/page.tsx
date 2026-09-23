import Hero from "@/components/Hero";
import AppsGrid from "@/components/AppsGrid";
import { APPS } from "@/data";

export default async function HomePage() {
  return (
    <div className='max-w-6xl mx-auto px-6 pt-16 pb-20'>
      <Hero />
      <AppsGrid apps={APPS} />
    </div>
  );
}
