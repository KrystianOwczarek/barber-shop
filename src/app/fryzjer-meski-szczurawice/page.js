
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
            <title>Fryzjer męski Szczurawice</title>
            <meta name="description" content="Profesjonalne usługi fryzjerstwa męskiego w Szczurawicach. Zapraszamy!" />
            <meta name="keywords" content="fryzjer męski szczurawice, fryzjer męski" />
          </Head>
          <DynamicCityHeader city="Szczurawice" city2="Szczurawic" />
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
  