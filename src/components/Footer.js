import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section
      id="fotter"
      className="relative m-auto max-w-full p-6 pb-16 padding"
    >
    <div className='box-5'></div>
    <div className='box-6'></div>
    <div className="max-w-7xl m-auto">
      <ul className="margin list-none mx-auto flex flex-col sm:flex-row items-start gap-8">
      <div className="w-full flex flex-row justify-between">
        <li
          style={{
            height: "auto",
            position: "relative",
          }}
          className="w-full sm:w-5/6 flex flex-col"
        >
          <Image className="image-5" src='/image/logo.webp' alt='logo' width={160} height={160} loading='lazy' />
          <Link target='_blank' href='https://www.facebook.com/people/Barber-Shop-Raszków/100095056908881/'><div className="image-6 mt-5"  alt='logo' width={152} height={32}/></Link>
        </li>
        <li
          style={{
            height: "auto",
            position: "relative",
          }}
          className="w-full sm:w-5/6 flex flex-col"
        >
          <h5 className="barber-color mb-4  text-lg sm:text-xl font-extrabold">Kontakt</h5>
          <div className="text-base sm:text-lg mb-1 text-white">
            Barber Shop
          </div>
          <div className="text-base sm:text-lg mb-1 text-white">
            Rynek 4, 63-440 Raszków
          </div>
          <Link href="tel:+48668637979" className="text-base sm:text-lg mb-1 pointer hover-effect">
            +48 668 637 979
          </Link>
        </li>
        </div>
        <div className="w-full flex flex-row justify-between">
        <li
          style={{
            height: "auto",
            position: "relative",
          }}
          className="w-full sm:w-5/6 flex flex-col"
        >
          <h5 className="barber-color mb-4 text-lg sm:text-xl font-extrabold">Godziny otwarcia</h5>
          <div className="text-base sm:text-lg mb-1 text-white">
            sob. - 08:00 - 14:00
          </div>
          <div className="text-base sm:text-lg mb-1 text-white">
            niedz. - zamknięte
          </div>
          <div className="text-base sm:text-lg mb-1 text-white">
            pon. - zamknięte
          </div>
          <div className="text-base sm:text-lg mb-1 text-white">
            wt. - 09:00 - 18:00
          </div>
          <div className="text-base sm:text-lg mb-1 text-white">
            śr. - zamknięte
          </div>
          <div className="text-base sm:text-lg text-white">
            czw. - 09:00 - 18:00
          </div>
          <div className="text-base sm:text-lg text-white">
            pt. - 09:00 - 18:00
          </div>
        </li>
        <li
          style={{
            height: "auto",
            position: "relative",
          }}
          className="w-full sm:w-5/6 flex flex-col justify-start"
        >
        <iframe className='map-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.81895503101!2d17.72612047688902!3d5171805469529222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705359852922cb1%3A0x82690071c159db22!2sBarber%20shop!5e0!3m2!1spl!2spl!4v1717077444759!5m2!1spl!2spl" width="100%" height="400px" style={{ border: '0', borderRadius: '5px' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </li>
        </div>
      </ul>
      <div className="fotter-line mt-10"></div>
      <div className="flex flex-row justify-between mt-3">
        <div className="text-white text-base sm:text-lg">Copyright © 2024 <Link className="hover" target="_blank" href='https://codesons.com'>CodeSons</Link>. Wszelkie prawa zastrzeżone.</div>
        <div className="flex flex-col sm:flex-row text-white">
          <Link href="/polityka-prywatnosci" className="hover-effect text-base sm:text-lg">Polityka prywatności i RODO</Link>
        </div>
      </div>
      </div>
    </section>
  );
}
