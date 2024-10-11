import dynamic from 'next/dynamic'

export default function Home() {
  const DynamicHero = dynamic(() => import('../components/Hero'), { ssr: false });
  const DynamicServices = dynamic(() => import('../components/Services'), { ssr: false });
  const DynamicGallery = dynamic(() => import('../components/Gallery'), { ssr: false });
  const DynamicPrices = dynamic(() => import('../components/Prices'), { ssr: false });
  const DynamicReviews = dynamic(() => import('../components/Reviews'), { ssr: false });
  const DynamicFooter = dynamic(() => import('../components/Footer'), { ssr: false });


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