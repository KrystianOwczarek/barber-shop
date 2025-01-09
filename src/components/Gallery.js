'use client';
import dynamic from 'next/dynamic'
import axios from "axios";
import { useEffect, useState } from "react";
import { getAllImages } from '../../lib/api';

export default function Gallery() {
  const DynamicEmblaCarousel = dynamic(() => import('./EmblaCarousel'), { ssr: false });
  const DynamicEmblaCarouselMobile = dynamic(() => import('./EmblaCarouselMobile'), { ssr: false });
  
  const OPTIONS = { align: 'start', loop: true };
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const getImages = async() => {
      const images = await getAllImages();
      const urlArray = [];
      images.sort((a,b) => a.id - b.id)
      images.map((image) => urlArray.push(image.zdjcie.url))
      console.log(urlArray)
      setSlides(urlArray);
    }
  
    getImages();
  }, [])

  return (
    <section
      id="gallery"
      className="relative m-auto max-w-full p-6 73 padding mt-1"
    >
      <div className="box-3"></div>
      <h2 className="font-medium text-center sm:text-5xl sm:mb-8 gradient-text barber-color">
        Galeria wykonanych prac
      </h2>
      <p className="text-white text-lg sm:text-2xl margin-bottom text-center">
        Przeglądaj moje starannie wykonane fryzury i cięcia
      </p>
        <DynamicEmblaCarouselMobile slides={slides} options={OPTIONS} />
        <DynamicEmblaCarousel slides={slides} options={OPTIONS} />
      <div className="box-4"></div>
    </section>
  );
}