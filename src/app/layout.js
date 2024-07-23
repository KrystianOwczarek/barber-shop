import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import Head from 'next/head';
import GoogleAnalytics from './GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Barber Shop | Raszków",
  description: "Strona barbera z najlepszymi usługami fryzjerskimi i kosmetycznymi. Odkryj profesjonalizm i styl. Obejrzyj nasze projekty już dziś!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <GoogleAnalytics />
      <Head>
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://barbershopraszkow.pl",
          "@type": "Website",
          "headline": "Barber Shop | Raszków",
          "datePublished": "2024-06-11",
          "author": {
            "@type": "Person",
            "name": "Krystian Owczarek"
          },
          // Additional structured data properties...
        })}</script>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Barber Shop | Raszków</title>
        <meta name="description" content="Strona barbera z najlepszymi usługami fryzjerskimi i kosmetycznymi. Odkryj profesjonalizm i styl. Obejrzyj nasze projekty już dziś!"/>
        <meta property="og:title" content="Barber Shop | Raszków"/>
        <meta property="og:description" content="Strona barbera z najlepszymi usługami fryzjerskimi i kosmetycznymi. Odkryj profesjonalizm i styl. Obejrzyj nasze projekty już dziś!" />
        <meta property="og:image" content="https://barbershopraszkow.pl/img/opengraph.jpg" />
        <meta property="og:image:secure_url" content="https://barbershopraszkow.pl/img/opengraph.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:width" content="1200" />
        <meta property="og:height" content="640" />
        <meta property="og:image:alt" content="barber shop banner" />
        <meta name="twitter:title" content="Barber Shop | Raszków" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://barbershopraszkow.pl/img/opengraph.jpg" />
        <meta name="twitter:description" content="Strona barbera z najlepszymi usługami fryzjerskimi i kosmetycznymi. Odkryj profesjonalizm i styl. Obejrzyj nasze projekty już dziś!" />
        <meta property="og:url" content="https://barbershopraszkow.pl"/>
        <meta property="og:type" content="website"/>

        <meta property="twitter:domain" content="barbershopraszkow.pl"/>
        <meta property="twitter:url" content="https://barbershopraszkow.pl"/>

        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LHMCFL9JZ4"></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
