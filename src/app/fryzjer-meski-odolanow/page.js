
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
            <title>Fryzjer męski Odolanów</title>
            <meta name="description" content="Profesjonalne usługi fryzjerstwa męskiego w Odolanowie. Zapraszamy!" />
            <meta name="keywords" content="fryzjer męski odolanow, fryzjer męski" />
          </Head>
          <DynamicCityHeader city="Odolanów" city2="Odolanowa" />
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
  