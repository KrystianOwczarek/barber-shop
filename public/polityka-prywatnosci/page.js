import dynamic from 'next/dynamic'

export default function Home() {
    const DynamicHeader = dynamic(() => import('../../src/components/Header'), { ssr: false });
    const DynamicPrivacyPolicy = dynamic(() => import('../../src/components/PrivacyPolicy'), { ssr: false });
    const DynamicFooter = dynamic(() => import('../../src/components/Footer'), { ssr: false });



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