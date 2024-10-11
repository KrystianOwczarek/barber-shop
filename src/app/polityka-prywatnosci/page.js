import dynamic from 'next/dynamic'

export default function Home() {
    const DynamicHeader = dynamic(() => import('../../components/Header'), { ssr: false });
    const DynamicPrivacyPolicy = dynamic(() => import('../../components/PrivacyPolicy'), { ssr: false });
    const DynamicFooter = dynamic(() => import('../../components/Footer'), { ssr: false });



  return (
    <>
      <DynamicHeader />
      <main className="max-w-full w-full">
        <DynamicPrivacyPolicy />
      </main>
      <DynamicFooter />
    </>
  );
}