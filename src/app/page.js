"use client"; // This is a client component 👈🏽

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/css/custom-style.css';
import '../../public/css/loaders.css';
import 'font-awesome/css/font-awesome.min.css';
import Script from 'next/script'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
    const [loading, setLoading] = useState(true);

    const handleClick = (event) => {
      // const href = event.target.getAttribute('href');
      // const target = document.querySelector(href);
      // if (target) {
      //   console.log(target.offsetTop)
      //   //event.preventDefault();
      //   window.scrollTo({
      //     top: target.offsetTop,
      //     behavior: 'smooth'
      //   });
      // }
    };

    useEffect(() => {
      setLoading(false);
    }, []);

    return (
    <>
    <Script src="https://code.jquery.com/jquery-3.2.1.min.js"></Script>
    <Script src="/js/bootstrap.min.js"></Script>
    <Script async defer src="https://maps.google.com/maps/api/js?key=AIzaSyB52BfJHBtqiqYBn_D4ZUqujiWxAOiRyTc&callback=''"></Script>
    <Script src="/js/gmap-custom.js"></Script>
    <Script src="/js/core.js"></Script>
    <Script type="text/javascript" src="components/bootstrap/dist/js/bootstrap.js"></Script>
    <Script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOJRSYGh1l3d6qGc-5OYOExRboJnJFFss&callback=console.debug&libraries=maps,marker&v=beta"></Script>
    {(loading ?
    <div className="loader loader-bg">
      <div className="loader-inner ball-pulse">
        <div />
        <div />
        <div />
      </div>
    </div> : <><nav className="navbar navbar-expand-md fixed-top top-nav light-header">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <Image alt='barber shop menu' src="/img/icons/menu.png" width='100' height='100'/>
          </span>
        </button>
        <div className="navbar-collapse" id="navbarSupportedContent">        
          <ul className="navbar-nav m-auto text-sm-center text-md-center">
            <li className="nav-item margin-right">
              <a className="nav-link" href="#home" onClick={(e) => handleClick(e)}>
                Home
              </a>
            </li>
            <li className="nav-item margin-right">
              <a className="nav-link" href="#services" onClick={handleClick}>
                Usługi
              </a>
            </li>
            <li className="nav-item margin-right">
              <a className="nav-link" href="#about" onClick={handleClick}>
                Ceny
              </a>
            </li>
              <a className="navbar-brand" href="/">
                <Image src="/img/logo.png" alt='barber shop logo' width='110' height='110' style={{  maxWidth: '100%' }}/>
              </a>
            <li className="nav-item margin-left">
              <a className="nav-link" href="#galery" onClick={handleClick}>
                Galeria
              </a>
            </li>
            <li className="nav-item margin-left">
              <a className="nav-link" href="#testimonial" onClick={handleClick}>
                Opinie
              </a>
            </li>
            <li className="nav-item margin-left">
              <a className="nav-link" href="#contactinfo" onClick={handleClick}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section id="home" className="intro intro-bg parallax">
      <div className="container">
        <div className="row">
          <div className="text-center pt-5">
            <div className="intro-caption mt-5">
              {/* <h1 className="text-white mb-2">
                Barber Shop Raszków
              </h1>
              <p className="text-white mb-4">
                {" "}
                Serdecznie zapraszamy do odwiedzenia naszego Barber Shopu w Raszkowie. Jesteśmy gotowi, aby zadbać o Twój wygląd. Zapraszamy do umawiania się na wizyty z wyprzedzeniem!
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Info block 1 */}
    <section id="services" className="info-section text-white bg-right bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="head-box text-center">
              <h2 className="font-abril ">Nasze usługi</h2>
            </div>
            <div className="three-panel-block mt-5">
              <div className="row-mdf">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="service-block mb-5">
                    <i className="icon-box mb-3 float-left w-100">
                      <Image alt='barber shop norzyczki' src="/img/icons/scissors.png" width='100' height='100' className="img-fluid" />
                    </i>
                    <h3 style={{ marginTop: '1rem' }} className="text-primary"><strong>Cięcie nożyczkami</strong></h3>
                    <p>
                      Profesjonalne cięcie nożyczkami, dopasowane do Twoich potrzeb i stylu.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="service-block mb-5">
                    <i className="icon-box mb-3 float-left w-100">
                      <Image alt='barber shop brzytwa' src="/img/icons/razor-1.png" width='100' height='100' className="img-fluid" />
                    </i>
                    <h3 style={{ marginTop: '1rem' }} className="text-primary"><strong>Cięcie brzytwą</strong></h3>
                    <p>
                      Oferujemy precyzyjne cięcie brzytwą, gwarantujące doskonały efekt.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="service-block mb-5">
                    <i className="icon-box mb-3 float-left w-100">
                      <Image alt='barber shop szczotka' src="/img/icons/brush.png" width='100' height='100' className="img-fluid" />
                    </i>
                    <h3 style={{ marginTop: '1rem' }} className="text-primary"><strong>Golenie głowy</strong></h3>
                    <p>
                      Golenie głowy na najwyższym poziomie. Dopasowane do Twoich potrzeb i stylu.                   
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="service-block">
                    <i className="icon-box mb-3 float-left w-100">
                      <Image alt='barber shop spinka do włosów' width='100' height='100' src="/img/icons/hair-clip.png" className="img-fluid" />
                    </i>
                    <h3 style={{ marginTop: '1rem' }} className="text-primary"><strong>Cięcie maszynką</strong></h3>
                    <p>
                      Perfekcyjne golenie maszynką dla świeżego wyglądu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Content block 1 */}
    <section id="about" className="copy-content-sec sec-bg-02 h-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 copy-container ml-auto">
            <div className="copy-content pr-4">
              <h2 className="font-abril text-primary">Mamy najlepsze ceny</h2>
              <div className="container">
              <div className="row">
                <div className="col-md-6">
                    <li className="list-group-item">Stylizacja. . . . . . . . . . . . . . . . .<span className='barber-color'>$25</span></li>
                    <li className="list-group-item">Stylizacja + Farbowanie. . . <span className='barber-color'>65</span></li>
                    <li className="list-group-item">Stylizacja + Tonowanie. . . .<span className='barber-color'>$65</span></li>
                </div>
                <div className="col-md-6">
                    <li className="list-group-item">Strzyżenie + Stylizacja + Tonowanie. . . . . . . . . . . . <span className='barber-color'>$100</span></li>
                    <li className="list-group-item">Strzyżenie. . . . . . . . . . . . <span className='barber-color'>$25</span></li>
                    <li className="list-group-item">Golenie. . . . . . . .  . . . . . . . .<span className='barber-color'>$65</span></li>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>   
    <section id="galery" className="info-section sec-bg-05 text-white bg-right bg-dark bg-overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="head-box text-center">
              <h2 className="font-abril ">Galeria zdjęć</h2>
            </div>
            <div className="three-panel-block mt-5">
              <div className="row-mdf">
                <div className="col-lg-3 col-md-6 col-sm-6 flex">
                  <div className="service-block">
                      <Image alt='barber shop zdjecie wykonanej pracy' src="/img/1.jpeg" width='1000' height='1000' className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 flex">
                  <div className="service-block">
                    <Image alt='barber shop zdjecie wykonanej pracy' src="/img/2.jpeg" width='1000' height='1000' className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 flex">
                  <div className="service-block">
                    <Image alt='barber shop zdjecie wykonanej pracy' src="/img/3.jpeg" width='1000' height='1000' className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 flex">
                  <div className="service-block">
                    <Image alt='barber shop zdjecie wykonanej pracy' src="/img/4.jpeg" width='1000' height='1000' className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            <div className="three-panel-block">
              <div className="row-mdf">
                <div className="col-lg-3 col-md-6 col-sm-6 flex">
                  <div className="service-block mb-5 flex">
                    <Image alt='barber shop zdjecie wykonanej pracy' src="/img/5.jpeg" width='1000' height='1000' className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 flex">
                  <div className="service-block mb-5">
                    <Image alt='barber shop zdjecie wykonanej pracy' src="/img/6.jpeg" width='1000' height='1000' className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 flex">
                  <div className="service-block mb-5">
                    <Image alt='barber shop zdjecie wykonanej pracy' src="/img/7.jpeg" width='1000' height='1000' className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 flex">
                  <div className="service-block mb-5">
                    <Image alt='barber shop zdjecie wykonanej pracy' src="/img/8.jpeg" width='1000' height='1000' className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonial Block 01*/}
    <section
      id="testimonial"
      className="testimonial-section sec-bg-04 py-5"
    >
      <div className="container">
        <div className="row">
          <div className="head-box text-center mb-3 col-md-12 mt-5">
            <h2 className="font-abril">Co mówią o nas nasi klienci</h2>
          </div>
        </div>
        <div className="single-testimonial">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner pt-5" role="listbox">
            <Carousel thumbWidth={150} showStatus={false} interval={3000} infiniteLoop={true} autoPlay={true}>
              <div className="carousel-item active">
                <div className="testimonial-box text-center">
                  <div className="testimonial-content w-100 bg-faded">
                    <p className="mb-3">
                      ⭐⭐⭐⭐⭐
                    </p>
                    <p className="lead font-abril">
                    Bardzo miła i profesjonalna obsługa na wysokim poziomie spełniająca oczekiwania najbardziej wymagającego klienta. Pani potrafi super doradzić i ma świetne podejście do klienta. Polecam - NAJLEPSZA !!! 👍
                    </p>
                    <div className="testimonial-footer">
                      <h4 className="mt-2 mb-0 text-primary">
                        Bogusław Marszałek
                      </h4>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="testimonial-box text-center">
                  <div className="testimonial-content w-100 bg-faded">
                    <p className="mb-3">
                      ⭐⭐⭐⭐⭐
                    </p>
                    <p className="lead font-abril">
                      Kawa, a proszę bardzo. Termin na telefon, bez kolejki. Profesjonalna obsługa klienta i bardzo miła pani z dużym doświadczeniem. Polecam.
                    </p>
                    <div className="testimonial-footer">
                      <h4 className="mt-2 mb-0 text-primary">Dawid ED</h4>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="testimonial-box text-center">
                  <div className="testimonial-content w-100 bg-faded">
                    <p className="mb-3">
                      ⭐⭐⭐⭐⭐
                    </p>
                    <p className="lead font-abril">
                      Polecam z całego serca świetne podejście do klienta bardzo dobrze wykonane obcięcie
                    </p>
                    <div className="testimonial-footer">
                      <h4 className="mt-2 mb-0 text-primary">Kasia Dostatna</h4>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="testimonial-box text-center">
                  <div className="testimonial-content w-100 bg-faded">
                    <p className="mb-3">
                      ⭐⭐⭐⭐⭐
                    </p>
                    <p className="lead font-abril">
                      Witam super obsługa i pełen profesjonalizm pozdrawiam Mateusz
                    </p>
                    <div className="testimonial-footer">
                      <h4 className="mt-2 mb-0 text-primary">Mateusz Reszel</h4>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="testimonial-box text-center">
                  <div className="testimonial-content w-100 bg-faded">
                    <p className="mb-3">
                      ⭐⭐⭐⭐⭐
                    </p>
                    <p className="lead font-abril">
                      Świetna obsługa. Żadna fryzura nie stanowi problemu🙂. Polecam.
                    </p>
                    <div className="testimonial-footer">
                      <h4 className="mt-2 mb-0 text-primary">Grzegorz Grzegorz</h4>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
              </Carousel>
            </div>
            {/* <div className="navigator-box">
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span className="fa fa-angle-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span className="fa fa-angle-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
    <section
      id="contactinfo"
      className="testimonial-section sec-bg-05 py-5 bg-overlay"
    >
      <div className="row">
        <div className="head-box text-center mb-3 col-md-12 mt-4">
          <h2 style={{ marginBottom: '1rem' }} className="font-abril text-white">Informacje kontaktowe</h2>
        </div>
      </div>
      <div className="container" style={{ marginBottom: '1rem' }}>
      <div className="row" style={{ backgroundColor: '#0f0a05' }}>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h4 className="p-3 text-white text-center" ><strong>Adres:</strong></h4>
          <div className="p-3 text-white text-center" style={{ fontSize: '18px' }}>Rynek 4 <br/> 63-440 Raszków</div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h4 className="p-3 text-white text-center"><strong>Numer telefonu:</strong></h4>
          <div className="p-3 text-white text-center" style={{ fontSize: '18px' }}>+48 668 637 979</div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h4 className="p-3 text-white text-center"><strong>Adres e-mail:</strong></h4>
          <div className="p-3 text-white text-center" style={{ fontSize: '18px' }}>salon@barbershop.pl</div>
        </div>
      </div>
    </div>
    </section>
    {/* Contact Block */}
    <section id="contact" className="contact-section bg-dark">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.81895503101!2d17.72612047688902!3d5171805469529222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705359852922cb1%3A0x82690071c159db22!2sBarber%20shop!5e0!3m2!1spl!2spl!4v1717077444759!5m2!1spl!2spl" width="100%" height="100%" style={{ border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      {/* <div className="container py-5">
        <div className="col-lg-8 col-md-6 col-sm-10 form-sec bg-white my-5 p-5 mx-auto">
          <form>
            <h2 className="mb-4">Contact Us!</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="sr-only" htmlFor="formGroupExampleInput">
                    Full Name
                  </label>
                  <input
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Full Name"
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='Full Name'"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="sr-only" htmlFor="formGroupExampleInput2">
                    Phone Number
                  </label>
                  <input
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Phone Number"
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='Phone Number'"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="sr-only" htmlFor="formGroupExampleInput2">
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Email Address"
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='Email Address'"
                    type="email"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="sr-only" htmlFor="formGroupExampleInput2">
                    Address
                  </label>
                  <input
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Address"
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='Enter Address'"
                    type="email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label className="sr-only" htmlFor="formGroupExampleInput2">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Enter your message here!"
                    rows={4}
                    onfocus="this.placeholder=''"
                    onblur="this.placeholder='Enter your message here!'"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-capsul px-4">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div> */}
    </section>
    {/* footer Block */}
    <div className="copy-footer bg-primary py-2">
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