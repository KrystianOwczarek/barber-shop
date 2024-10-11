'use client';
import Image from "next/image";
import EmblaCarousel from "./EmblaCarousel";
import EmblaCarouselMobile from "./EmblaCarouselMobile";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Gallery() {
  const OPTIONS = { align: 'start', loop: true };
  const [slides, setSlides] = useState([]);

  const getImage = async () => {
    const response = await axios.get('https://barber-shop-strapi.onrender.com/api/upload/files?sort[0]=name');
    const urlArray = response.data.map((res) => 
      res.url ? 'https://barber-shop-strapi.onrender.com' + res.url : null
    ).filter(url => url); // Remove null values
    setSlides(urlArray);
  };

  useEffect(() => {
    getImage();
  }, []);

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
        <EmblaCarouselMobile slides={slides} options={OPTIONS} />
        <EmblaCarousel slides={slides} options={OPTIONS} />
      <div className="box-4"></div>
    </section>
  );
}