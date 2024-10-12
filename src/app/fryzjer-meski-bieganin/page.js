
    import dynamic from 'next/dynamic';
    import Head from 'next/head';

    export default function Home() {
      const DynamicCityHeader = dynamic(() => import('../../components/CityHeader3'), { ssr: false });
      const DynamicServices = dynamic(() => import('../../components/Services'), { ssr: false });
      const DynamicGallery = dynamic(() => import('../../components/Gallery'), { ssr: false });
      const DynamicPrices = dynamic(() => import('../../components/Prices'), { ssr: false });
      const DynamicReviews = dynamic(() => import('../../components/Reviews'), { ssr: false });
      const DynamicFooter = dynamic(() => import('../../components/Footer'), { ssr: false });

      return (
        <>
          <Head>
            <title>Fryzjer męski Bieganin</title>
            <meta name="description" content="Profesjonalne usługi fryzjerstwa męskiego w Bieganinie. Zapraszamy!" />
            <meta name="keywords" content="fryzjer męski bieganin, fryzjer męski" />
          </Head>
          <DynamicCityHeader city="Bieganin" city2="Bieganina" />
          <main className="subpage max-w-full w-full">
            <DynamicServices />
            <DynamicPrices />
            <DynamicGallery />
            <DynamicReviews />
          </main>
          <DynamicFooter />
        </>
      );
    }
  