import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
    <head>
      <meta property="og:title" content="Barber Shop | Raszków" />
      <meta property="og:description" content="Oferujemy najlepsze usługi fryzjerskie i kosmetyczne. Odkryj profesjonalizm i styl. Obejrzyj nasze projekty!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://barbershopraszkow.pl" />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="640" />
      <meta property="og:image:alt" content="Logo Barber Shop Raszków" />
      <meta name="twitter:title" content="Barber Shop | Raszków" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="Oferujemy najlepsze usługi fryzjerskie i kosmetyczne. Odkryj profesjonalizm i styl. Obejrzyj nasze projekty!" />
      <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Barber Shop | Raszków" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-LHMCFL9JZ4" />
      </body>
    </html>
  );
}
