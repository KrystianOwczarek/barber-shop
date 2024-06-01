"use client"; // This is a client component 👈🏽

import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../public/css/custom-style.css';
import '../../../public/css/loaders.css';
import 'font-awesome/css/font-awesome.min.css';
import Script from 'next/script'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const handleLoad = () => {
        setLoading(false);
      };
  
      window.addEventListener('load', handleLoad);
  
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []);

    const handleClick = (event) => {
        const href = event.target.getAttribute('href');
        const target = document.querySelector(href);
    
        if (target) {
          event.preventDefault();
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      };

    return (
    <>
    <Script src="https://code.jquery.com/jquery-3.2.1.min.js"></Script>
    <Script src="/js/bootstrap.min.js"></Script>
    <Script async defer src="https://maps.google.com/maps/api/js?key=AIzaSyB52BfJHBtqiqYBn_D4ZUqujiWxAOiRyTc&callback=initMap"></Script>
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
    </div> : <><nav className="navbar navbar-expand-md fixed-top top-nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <Image src="/img/logo.png" alt='barber shop logo' width='100' height='100' style={{ marginTop: '1.5rem', maxWidth: '100%' }}/>
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto text-sm-center text-md-center">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={handleClick}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={handleClick}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#price" onClick={handleClick}>
                Prices
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonial" onClick={handleClick}>
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={handleClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section id="home" style={{ height: 'auto' }} className="intro bg-white parallax">
      <div className="container text-center" style={{ height: "100%", marginTop: '8rem' }}>
        <h1 style={{ marginBottom: '1rem' }}><strong>RODO</strong></h1>
        <h6><strong>KOMUNIKAT DLA KLIENTÓW I KONTRAHENTÓW NASZEJ FIRMY W ZWIĄZKU Z WEJŚCIEM W ŻYCIE PRZEPISÓW RODO</strong></h6>
        <div class="rodo-communication text-justify" style={{ marginBottom: "3rem" }}>
            <p>Niniejszym pragniemy poinformować Państwa, że w związku z wejściem w życie z dniem 25 maja 2018 roku przepisów Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych – Dziennik Urzędowy UE L 119 – dalej: RODO) <strong>BARBER SHOP</strong> zapewnia określone w tych przepisach standardy ochrony i właściwego postępowania z danymi osobowymi.</p>
            <p>Zgodnie z art. 13 ust. 1 i 2 RODO informujemy osoby, których danymi Firma dysponuje, że:</p>
            <ol>
                <li>
                    <p>1) <strong>BARBER SHOP</strong> – siedzibą: 63-449 Raszków, Rynek 4 jest Administratorem Państwa danych osobowych, w których posiadanie weszła wskutek wykonywania zawieranych z Państwem umów i ich obsługą, wystawianiem faktur, utrzymywaniem korespondencji oraz merytoryczną obsługą przesyłanych do nas zamówień, wniosków, próśb i reklamacji.</p>
                </li>
                <li>
                    <p>2) Prawne podstawy dopuszczalności przetwarzania przez <strong>BARBER SHOP</strong> dotyczących Państwa danych oparte są na niezbędności wykonania umów zawieranych przez Państwa z naszą Firmą (art. 6 ust. 1 lit. b RODO) oraz na przepisach prawa cywilnego i gospodarczego (art. 6 ust. 1 lit. c RODO) mającego zastosowanie w związku z dokumentowaniem i aspektami finansowo-podatkowymi umowy. W wymagających tego przypadkach nasza Firma ubiegała będzie się o wyrażenie Państwa zgody na przetwarzanie danych w wyraźnie zadeklarowanym celu (art. 6 ust. 1 lit. a RODO), z zastrzeżeniem możliwości łatwego odwołania zgody przez osobę, która ją uprzednio wyraziła. <strong>BARBER SHOP</strong> deklaruje, że w określonych stanach faktycznych przetwarzała będzie Państwa dane osobowe na podstawie dopuszczalnej przez RODO przesłanki niezbędności do celów wynikających z prawnie uzasadnionych interesów realizowanych przez Administratora Danych lub przez stronę trzecią (art. 6 ust. 1 lit. f RODO).</p>
                    <p>Do przykładowych celów takiego przetwarzania należały będą:</p>
                <ul>
                    <li>marketing usług własnych <strong>BARBER SHOP</strong> oraz promowanie działalności naszej Firmy i nowych inicjatyw wśród klientów związanych z nią umowami,</li>
                    <li>monitoring wizyjny prowadzony w obiektach i na obszarach należących do <strong>BARBER SHOP</strong>,</li>
                    <li>dochodzenie roszczeń z tytułu prowadzenia działalności gospodarczej.</li>
                </ul>
            </li>
            <li>
                <p>3) Dotyczące Państwa dane osobowe nie podlegają zautomatyzowanemu podejmowaniu decyzji przez <strong>BARBER SHOP</strong>, w tym profilowaniu.</p>
            </li>
            <li>
                <p>4) Osobom, których dane przetwarzamy przysługują prawa:</p>
                <ul>
                    <li>dostępu do swoich danych oraz otrzymania ich kopii,</li>
                    <li>sprostowania (poprawiania) danych,</li>
                    <li>usunięcia danych (zgodnie z uwarunkowaniami określonymi w art. 17 RODO),</li>
                    <li>do ograniczenia przetwarzania danych,</li>
                    <li>do przenoszenia danych (zgodnie z uwarunkowaniami określonymi w art. 20 RODO),</li>
                    <li>wniesienia sprzeciwu wobec przetwarzania danych (zgodnie z uwarunkowaniami określonymi w art. 21 RODO),</li>
                    <li>wniesienia skargi do organu nadzorczego, którym jest Prezes Urzędu Ochrony Danych Osobowych.</li>
                </ul>
            </li>
            <li>
                <p>5) Administrator Danych przechowywał będzie Państwa dane osobowe przez okres wskazany w przepisach prawa, niemniej nie dłużej niż 10 lat od ostatniej operacji dokonanej na dotyczących Państwa danych zawartych w zasobach informacyjnych <strong>BARBER SHOP</strong>.</p>
            </li>
            <li>
                <p>6) Państwa dane osobowe mogą zostać udostępnione organom władzy publicznej oraz podmiotom wykonującym zadania publiczne lub działającym na zlecenie organów władzy publicznej, w zakresie i w celach, które wynikają z przepisów powszechnie obowiązującego prawa oraz podwykonawcom związanym z naszą Firmą umowami powierzenia przetwarzania danych osobowych, np. firmy informatyczne, kancelarie radców prawnych, biuro rachunkowo-podatkowe, biura projektowe.</p>
                </li>
                    <li>
                        <p>7) Administrator Danych deklaruje, że nie przekazuje i nie zamierza przekazywać danych osobowych do państwa trzeciego lub organizacji międzynarodowej.</p>
                    </li>
                    <li>
                        <p>8) W sprawach dotyczących spraw związanych z przetwarzaniem przez naszą Firmę Państwa danych osobowych prosimy o skontaktowanie się:</p>
                        <ul>
                            <li>telefonicznie +48 668 637 979,</li>
                            <li>drogą elektroniczną na adres: <a href="mailto:salon@studiobarber.pl">salon@barbershop.pl</a>,</li>
                            <li>osobiście w siedzibie naszej Firmy – po uprzednim telefonicznym uzgodnieniu terminu spotkania.</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    </section>    
    {/* Contact Block */}
    <section
      id="contactinfo"
      className="testimonial-section sec-bg-05 py-5 bg-overlay"
    >
      <div className="row">
        <div className="head-box text-center mb-3 col-md-12 mt-4">
          <h2 style={{ marginBottom: '1rem' }} className="font-abril text-white">Informacje kontaktowe</h2>
        </div>
      </div>
      <div className="container">
      <div className="row" style={{ backgroundColor: 'black' }}>
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