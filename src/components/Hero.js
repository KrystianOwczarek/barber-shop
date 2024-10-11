'use client';
import Navigation from "./Navigation";
import Image from "next/image";
import Link from "next/link";
import Lottie from 'react-lottie';
import animationData from '/public/lotties/scissors.json';
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Hero() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    const scissors = document.querySelector('.scissors');
    if (scissors) {
      const timeoutDuration = 2500;
      const timeoutId = setTimeout(() => {
        scissors.classList.add('scissors-opacity');
      }, timeoutDuration);

      // Clean up timeout on component unmount
      return () => clearTimeout(timeoutId);
    }
  }, []); // Add isMobile as a dependency

  return (
    <div id="background-image">
      <Navigation />
      <div className="max-w-full w-full flex justify-center">
        <section
          id="hero"
          className="max-w-screen w-screen flex flex-col-reverse justify-start sm:flex-row p-6 items-center gap-8 mt-20 sm:mt-36 scroll-mt-80"
        >
          <article className="flex flex-col justify-center items-center max-w-7xl w-full m-auto">
            <div className="container">
              <h1 className='text'>
                Odkryj swój styl
              </h1>
              <div className='scissors'>
                <Lottie 
                  className='scissors-image'
                  options={defaultOptions}
                  height={70}
                  width={70}
                />
              </div>
            </div>
            <p className="flex sm:hidden max-w-full text-2xl p-3 sm:p-0 mb-6 text-center text-white">
              Profesjonalne usługi fryzjerstwa męskiego w przyjaznej atmosferze. Sprawdź moją ofertę, zobacz galerię i umów się na wizytę.
            </p>
            <p className="hidden sm:flex  max-w-full text-2xl p-3 sm:p-0 mb-6 text-center text-white">
              Profesjonalne usługi fryzjerstwa męskiego w przyjaznej atmosferze. Sprawdź moją ofertę, zobacz galerię <br/> i umów się na wizytę.
            </p>

            <div className="flex w-full flex-row justify-center align-center mb-6">
              <Button/>
            </div>
            <div className="flex w-full flex-col justify-center items-center mb-4">
              <p className="text-white text-center text-lg p-3 sm:p-0 mb-4">“Polecam z całego serca świetne podejście do klienta bardzo dobrze wykonane obcięcie”</p>
              <p className="flex flex-row justify-center items-center text-white text-lg">
                <Image src='/image/profile_image.webp' className="mr-3" alt='profile photo' width={40} height={40} loading='lazy' />Kasia Dostatna
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}