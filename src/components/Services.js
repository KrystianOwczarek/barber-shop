'use client';
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="relative m-auto max-w-full pt-6 pb-0 sm:pb-7 my-12"
    >
      <div className="box"></div>
      <h2 className="font-medium text-center sm:text-5xl mb-1 sm:mb-8 gradient-text barber-color">
        Profesjonalne usługi dla mężczyzn
      </h2>
      <p className="text-white text-2xl mb-20 sm:mb-32 text-center">
        Strzyżenie brody i pielęgnacja włosów
      </p>
      <div className="list-none mx-auto mt-12 mb-1 flex flex-col items-center gap-8">
        <div className="flex flex-col sm:flex-row justify-start items-center w-full"><Image className='image-4' src='/image/barber-image-1.jpeg' style={{ borderRadius: '0 25px 25px 0' }} alt='zdjęcie ze strzyzenia' width={420} height={560}/><div className="flex flex-col p-4 sm:p-0 sm:pl-24 width mb-8"><h3 className="text-white mb-2 sm:mb-6 text-center sm:text-start">Stylowe fryzury</h3><p className="text-center sm:text-start text-white sm:p-0 text-2xl">Jako doświadczony barber zapewniam fryzury, które podkreślają Twoją osobowość i styl.</p></div></div>
        {window.innerWidth <= 480 ? <div className="flex flex-col sm:flex-row justify-start items-center w-full"><Image className='image-4'  src='/image/barber-image-2.jpeg' style={{ borderRadius: '25px 0 0 25px' }} alt='zdjęcie ze strzyzenia' width={420} height={560}/><div className="flex flex-col p-4 sm:p-0 sm:pl-24 width mb-8"><h3 className="text-white mb-2 sm:mb-6 text-center sm:text-start">Ekspert <br/>w pielęgnacji brody</h3><p className="text-center sm:text-start text-white sm:p-0 text-2xl">Specjalizuje się w precyzyjnym strzyżeniu i pielęgnacji brody, abyś zawsze wyglądał elegancko.</p></div></div> : <div className="flex flex-col sm:flex-row justify-start items-center w-full"><div className="flex flex-col width mb-8"><h3 className="text-white mb-6">Ekspert w pielęgnacji brody</h3><p className="text-white text-2xl">Specjalizuje się w precyzyjnym strzyżeniu i pielęgnacji brody, abyś zawsze wyglądał elegancko.</p></div><Image className='image-4'  src='/image/barber-image-2.jpeg' style={{ borderRadius: '25px 0 0 25px' }} alt='zdjęcie ze strzyzenia' width={420} height={560}/></div>}
        <div className="flex flex-col sm:flex-row justify-start items-center w-full"><Image className='image-4' src='/image/barber-image-3.jpeg' style={{ borderRadius: '0 25px 25px 0' }} alt='zdjęcie ze strzyzenia' width={420} height={560}/><div className="flex flex-col p-4 sm:p-0 sm:pl-24 width mb-4 sm:mb-8"><h3 className="text-white mb-2 sm:mb-6 text-center sm:text-start">Indywidualne podejście</h3><p className="text-center sm:text-start text-white sm:p-0 text-2xl">Każda wizyta to indywidualne podejście do klienta, aby spełnić wszystkie Twoje oczekiwania.</p></div></div>
      </div>
      <div className="box-2"></div>
    </section>
  );
}
