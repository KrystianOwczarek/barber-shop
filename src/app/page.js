import Head from 'next/head';
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
      <Head>
        <title>Barber Shop | Raszków</title>
        <meta property="description" content="Oferujemy najlepsze usługi fryzjerskie i kosmetyczne. Odkryj profesjonalizm i styl. Obejrzyj nasze projekty!" />
        <meta name="keywords" content="fryzjer męski raszków, fryzjer męski ostrów wielkopolski, fryzjer męski ostrów wlkp, fryzura fade, style fryzur, fryzury męskie cieniowane, salon fryzjerski raszków, salon fryzjerski, salon fryzjerski ostrów wielkopolski, salon fryzjerski ostrów wlkp, eleganccy mężczyźni, dobry fyzjer, dobry fryzjer raszków, dobry fryzjer ostrów wielkopolski, dobry fryzjer ostrów wlpk, barber shop raszków, barbershop raszków, barbershop, barbershopraszków, barber shop raszkow, barbershopraszkow, barbershop raszkow, fryzjer raszkow, fryzjer, fryzjer ostrów wielkopolski, fryzjer ostrow wielkopolski, fryzjer ostrow, fryzjer ostrów, barber shop ostrów wielkopolski, barbershop ostrów wielkopolski, barbershopostrówwielkopolski, barber shop ostrow wielkopolski, barbershopostrowwielkopolski, barbershop ostrow wielkopolski, barber raszków, barber raszkow, barberraszków, barberraszkow, barber ostrów wielkopolski, barber ostrow wielkopolski, barberostrowwielkopolski, haircuts, beard trimming, grooming services, classic haircuts, modern haircuts, shaves, men's grooming, hair styling, najlepszy barber Raszków, najlepszy barber Ostrów Wielkopolski, barber shop blisko mnie, barber shop w mojej okolicy, polecany barber Raszków, polecany barber Ostrów Wielkopolski, barber shop z najlepszymi opiniami, top barber shop Raszków, top barber shop Ostrów Wielkopolski, barber dla mężczyzn, stylizacja brody, strzyżenie brody, stylizacja włosów, profesjonalne strzyżenie, premium barber services, barber Raszków Ostrów Wielkopolski, barber shop wielkopolska, fryzjer męski Raszków, fryzjer męski Ostrów Wielkopolski" />

      </Head>
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