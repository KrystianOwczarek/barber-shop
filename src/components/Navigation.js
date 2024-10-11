"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'react-lottie';
import animationData from '/public/lotties/burger-menu.json';

export default function Navigation() {
  gsap.registerPlugin(ScrollTrigger);

  const [menuVisibility, setMenuVisibility] = useState(false);
  const circleRef = useRef(null);
  const lottieRef = useRef();

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    // Animacja z GSAP
    gsap.fromTo(
      circleRef.current,
      { y: 200, opacity: 0 }, // Startowa pozycja (spod ekranu)
      {
        y: 0, // Końcowa pozycja
        opacity: 1, // Końcowa przezroczystość
        scrollTrigger: {
          trigger: circleRef.current, // Element, który ma wywołać animację
          start: 'top 80%', // Animacja startuje, gdy element jest w 80% widoczny
          end: 'top 30%', // Animacja kończy się, gdy element osiągnie 30%
          scrub: true, // Powiązanie animacji ze scrollowaniem
        },
      }
    );
  }, []);

  useEffect(() => {
    if (menuVisibility) {
      document.body.classList.add('touch-pan-x')  
    } else {
      document.body.classList.remove('touch-pan-x') 
    }
  }, [menuVisibility]);

  const toggleMenu = () => {
    const lottieInstance = lottieRef.current;
    // Check if lottieInstance is properly initialized
    console.log(lottieInstance.anim)
    if (lottieInstance && lottieInstance.anim) {
      if (!menuVisibility) {
        // Menu closed - play the animation from start to halfway
        lottieInstance.anim.playSegments([0, 47], true);
      } else {
        // Menu open - play the animation from halfway to end
        lottieInstance.anim.playSegments([48, 97], true);
      }

      // Toggle menu visibility after animation
      setMenuVisibility(!menuVisibility);
    } else {
      console.error('Lottie instance not initialized or anim object missing.');
    }
  };

  return (
    <header className="text-white top-0 z-10 min-h-28">
      <section className="max-w-7xl mx-auto p-4 flex items-center min-h-28">
      <div className="w-120 sm:w-1/2 flex justify-start">
        <Link href="/" className="z-20 flex flex-row justify-center items-center">
          <Image
            width={64}
            height={64}
            src="/image/logo.webp"
            alt="logo barber shop raszków"
            loading='lazy'
          />
          <p className="ml-3 sm:ml-5 barber-font">Barber Shop</p>
        </Link>
        </div>
        <div className="w-1/2 flex justify-end">
          <button
            id="mobile-open-button"
            className="relative z-20 text-3xl sm:hidden focus:outline-none"
            onClick={() => { setMenuVisibility(!menuVisibility); toggleMenu() }} // Użyjemy tylko toggleMenu
          >
            <Lottie 
              options={defaultOptions}
              height={62}
              width={80}
              style={{ marginLeft: '1rem' }}
              ref={lottieRef}
              isStopped={false} // Animacja działa tylko przy interakcji
              isClickToPauseDisabled={true} // Wyłączenie zatrzymywania przez kliknięcie
            />
          </button>
          <nav
            className={
              menuVisibility
                ? "menu-slide-in sm:hidden fixed top-0 z-10 pt-32 left-0 w-full h-full black-background flex flex-col text-xl"
                : "menu-slide-out sm:hidden fixed top-0 z-10 pt-32 left-0 w-full h-full black-background flex flex-col text-xl"
            }
            aria-label="main"
          >
              <Link
                onClick={() => { setMenuVisibility(!menuVisibility); toggleMenu() }}
                href="#services"
                className="barber-border-bottom text-lg flex flex-row items-center hover-effect ml-5 mr-5 h-12"
              >
                Usługi
              </Link>
              <Link
                onClick={() => { setMenuVisibility(!menuVisibility); toggleMenu() }}
                href="#prices"
                className="barber-border-bottom text-lg flex flex-row items-center hover-effect ml-5 mr-5 h-12"
              >
                Ceny
              </Link>
              <Link
                onClick={() => { setMenuVisibility(!menuVisibility); toggleMenu() }}
                href="#gallery"
                className="barber-border-bottom text-lg flex flex-row items-center hover-effect ml-5 mr-5 h-12"
              >
                Galeria
              </Link>
              <Link
                onClick={() => { setMenuVisibility(!menuVisibility); toggleMenu() }}
                href="#reviews"
                className="barber-border-bottom text-lg flex flex-row items-center hover-effect ml-5 mr-5 h-12"
              >
                Opinie
              </Link>
              <Link
                onClick={() => { setMenuVisibility(!menuVisibility); toggleMenu() }}
                href="#fotter"
                className="barber-border-bottom text-lg flex flex-row items-center hover-effect ml-5 mr-5 h-12"
              >
                Kontakt
              </Link>
          </nav>
          <nav className="hidden sm:flex space-x-8 text-xl" aria-label="main">
            <Link
              href="#services"
              className="flex flex-row items-center hover-effect"
            >
              Usługi
            </Link>
            <Link
              href="#prices"
              className="flex flex-row items-center hover-effect"
            >
              Ceny
            </Link>
            <Link
              href="#gallery"
              className="flex flex-row items-center hover-effect"
            >
              Galeria
            </Link>
            <Link
              href="#reviews"
              className="flex flex-row items-center hover-effect"
            >
              Opinie
            </Link>
            <Link
              href="#fotter"
              className="flex flex-row items-center hover-effect"
            >
              Kontakt
            </Link>
          </nav>
          </div>
        <Link href='#hero'><div ref={circleRef} className='circle'><Image src='/image/down-arrow.png' alt='down arrow' width={28} height={16} loading='lazy' /></div></Link>
      </section>
    </header>
  );
}