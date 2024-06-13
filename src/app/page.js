"use client"; // This is a client component 👈🏽

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../../public/css/custom-style.css';
import '../../public/css/loaders.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import dynamic from 'next/dynamic';
import { motion } from "framer-motion"

export default function Home() {
    const [loading, setLoading] = useState(true);
    const DynamicServices = dynamic(() => import('./components/Services'));
    const DynamicPrice = dynamic(() => import('./components/Price'));
    const DynamicGalery = dynamic(() => import('./components/Galery'));
    const DynamicTestimontials = dynamic(() => import('./components/Testimontials'));
    const DynamicContact = dynamic(() => import('./components/Contact'));
    useEffect(() => {
      setLoading(false);
    }, []);



    const handleOpen = () => {
      const nav = document.querySelector('.navbar-collapse');
      const displayValue = nav.style.display;
      if(displayValue === '' || displayValue === 'none'){
        nav.setAttribute('style', 'display:flex !important');
      }else{
        nav.setAttribute('style', 'display:none !important');
      }
    }

    useEffect(() => {
      if(document.body.clientWidth < 768){
        document.body.addEventListener('scroll', () => {
          const nav = document.querySelector('.navbar');
          if(document.body.scrollTop <= 0){
            nav.setAttribute('style', 'position:relative !important');
          }else{
            nav.setAttribute('style', 'position:fixed !important');
          }
        })
      }
    }, [])
      
    const handleTouch = (e) => {
      window.href = e.target.href
    }

    const spanStyle = {
      padding: '20px',
      background: '#efefef',
      color: '#000000'
    }
    
    const divStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'contain',
    }

    const slideImages = [
      {
        url: '/img/baner.webp',
      },
      {
        url: '/img/baner2.webp',
      },
    ];

    return (
    <>
    {(loading ?
    <div className="loader loader-bg">
      <div className="loader-inner ball-pulse">
        <div />
        <div />
        <div />
      </div>
    </div> : <>
    <motion.nav initial={{ y: '-15vh' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.7 }}
      className="navbar navbar-expand-md top-nav fixed-top light-header">
      <a className="navbar-brand-mobile" href="/">
        <Image src="/img/logo.webp" alt='barber shop logo' width='110' height='110' style={{  maxWidth: '100%' }}/>
      </a>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleOpen}
        >
          <span className="navbar-toggler-icon">
            <Image alt='barber shop menu' src="/img/icons/menu.webp" width='100' height='100'/>
          </span>
        </button>
        <div className="navbar-collapse" id="navbarSupportedContent">        
          <ul className="navbar-nav m-auto text-sm-center text-md-center">
            <li className="nav-item margin-right">
              <a className="nav-link" href="#home" onTouchStart={handleTouch}>
                Home
              </a>
            </li>
            <li className="nav-item margin-right">
              <a className="nav-link" href="#services" onTouchStart={handleTouch}>
                Usługi
              </a>
            </li>
            <li className="nav-item margin-right">
              <a className="nav-link" href="#about" onTouchStart={handleTouch}>
                Ceny
              </a>
            </li>
              <a className="navbar-brand" href="/">
                <Image src="/img/logo.webp" alt='barber shop logo' width='110' height='110' style={{  maxWidth: '100%' }} loading='lazy'/>
              </a>
            <li className="nav-item margin-left">
              <a className="nav-link" href="#galery" onTouchStart={handleTouch}>
                Galeria
              </a>
            </li>
            <li className="nav-item margin-left">
              <a className="nav-link" href="#testimonial" onTouchStart={handleTouch}>
                Opinie
              </a>
            </li>
            <li className="nav-item margin-left">
              <a className="nav-link" href="#contactinfo" onTouchStart={handleTouch}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: 2 }} transition={{ ease: "easeOut", duration: 4, delay: 1 }} id="home" className="intro">
      <div className='home-container'>
        <div className='first-banner-part'>
          <div className='first-part-position'>
            <h1>BARBER SHOP RASZKÓW</h1>
            <p>profesjonalne podejście i lata doświadczenia</p>
          </div>
          <div className='second-part-position'>
            <Image alt='barber shop logo' src="/img/logo.webp" width='250' height='100'/>
          </div>
        </div>
        <div className='second-banner-part'>
          <Fade arrows={false} duration={3000} autoplay={true} infinite={true} canSwipe={false}>
            {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <Image id='image' priority={true} style={{ ...divStyle}} alt='barber shop baner' src={slideImage.url} width='1500' height='800'/>
              </div>
            ))} 
          </Fade>
        </div>
      </div>
    </motion.section>
    {/* Info block 1 */}
    <DynamicServices/>
    {/* Content block 1 */}
    <DynamicPrice/>
    <DynamicGalery/>
    {/* Testimonial Block 01*/}
    <DynamicTestimontials/>
    <DynamicContact/>
    {/* Contact Block */}
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: 2 }} transition={{ ease: "easeOut", duration: 4, delay: 1 }} id="contact" className="contact-section bg-dark">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.81895503101!2d17.72612047688902!3d5171805469529222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705359852922cb1%3A0x82690071c159db22!2sBarber%20shop!5e0!3m2!1spl!2spl!4v1717077444759!5m2!1spl!2spl" width="100%" height="100%" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </motion.section>
    {/* footer Block */}
    <div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: 2 }} transition={{ ease: "easeOut", duration: 4, delay: 1 }} className="copy-footer bg-primary py-2">
      <div className="container text-center text-light">
        ©{" "}
        <a href="https://portfolio-tfuf.onrender.com" target="_blank">
          krystianowczarek.com
        </a>{" "}
        <span id="year" /> - tworzenie stron www / aplikacji webowych / aplikacji mobilnych / <a href='/rodo' target="_blank"><strong>Polityka prywatności i RODO</strong></a>
      </div>
    </div></> )}
  </>  
  );
}