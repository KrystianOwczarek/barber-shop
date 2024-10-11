import dynamic from 'next/dynamic'

export default function Home() {
  const DynamicHero = dynamic(() => import('../components/Hero'), { ssr: false });
  const DynamicServices = dynamic(() => import('../components/Services'));
  const DynamicGallery = dynamic(() => import('../components/Gallery'));
  const DynamicPrices = dynamic(() => import('../components/Prices'));
  const DynamicReviews = dynamic(() => import('../components/Reviews'));
  const DynamicFooter = dynamic(() => import('../components/Footer'));


  return (
    <>
      <DynamicHero />
      <main className="max-w-full w-full">
        <DynamicServices />
        <DynamicPrices />
        <DynamicGallery />
        <DynamicReviews />
      </main>
      <DynamicFooter />
    </>
  );
}