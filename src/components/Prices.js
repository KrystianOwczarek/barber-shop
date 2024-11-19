'use client';
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Prices() {
  const [hairObjects, setHairObjects] = useState([]);
  const [beardObject, setBeardObjects] = useState([]);
  const [comboObject, setComboObjects] = useState([]);

  const getHairPrices = async () => {
    //const response = await axios.get('https://barber-shop-strapi.onrender.com/api/uslugis');
    const uslugi = [
      {
        id: 1,
        nazwa_uslugi: "Strzyżenie włosów",
        cena: 50
      },
      {
        id: 2,
        nazwa_uslugi: "Strzyżenie dzieci do lat 12",
        cena: 38
      },
      {
        id: 3,
        nazwa_uslugi: "Strzyżenie włosów długich",
        cena: 70
      },
      {
        id: 4,
        nazwa_uslugi: "Golenie głowy brzytwą",
        cena: 50
      },
      {
        id: 5,
        nazwa_uslugi: "Stylizacja włosów",
        cena: 25
      },
      {
        id: 6,
        nazwa_uslugi: "Odsiwanie włosów",
        cena: 45
      },
      {
        id: 7,
        nazwa_uslugi: "Trwała - loki (Wycenia indywidualnie po wcześniejszej konsultacji)",
      }
    ];
    //setHairObjects(response.data.data)
    setHairObjects(uslugi);
  };

  const getBeardPrices = async () => {
    //const response = await axios.get('https://barber-shop-strapi.onrender.com/api/uslugi-brodas');
    const uslugi = [
      {
        id: 1,
        nazwa_uslugi: "Strzyżenie brody",
        cena: 45
      },
      {
        id: 2,
        nazwa_uslugi: "Odsiewianie brody",
        cena: 45
      },
      {
        id: 3,
        nazwa_uslugi: "Strzyżenie brody + Odsiewianie brody",
        cena: 85
      }
    ];
    //setBeardObjects(response.data.data);
    setBeardObjects(uslugi);
  };

  const getComboPrices = async () => {
    //const response = await axios.get('https://barber-shop-strapi.onrender.com/api/uslugi-combos');
    const uslugi = [
      {
        id: 1,
        nazwa_uslugi: "Combo 1 Włosy + Trymowanie brody",
        cena: 75
      },
      {
        id: 2,
        nazwa_uslugi: "Combo 1 + Trymowanie brody brzytwą",
        cena: 85
      },
      {
        id: 3,
        nazwa_uslugi: "Woskowanie uszu",
        cena: 15
      },
      {
        id: 4,
        nazwa_uslugi: "Woskowanie nosa",
        cena: 15
      },
      {
        id: 5,
        nazwa_uslugi: "Woskowanie brwi",
        cena: 15
      }
    ];
    //setComboObjects(response.data.data);
    setComboObjects(uslugi);
  };

  useEffect(() => {
    getHairPrices();
    getBeardPrices();
    getComboPrices();
  }, []);

  function calculateUnderscores(serviceName, price, index, type) {
    // Pobierz szerokość elementu
    const div = document.querySelector('.length');
    if (!div) return null;

    let style = window.getComputedStyle(div);
    let paddingLeft = parseFloat(style.paddingLeft);
    let paddingRight = parseFloat(style.paddingRight);

    // Oblicz szerokość odejmując padding
    let elementWidth = div.clientWidth - paddingLeft - paddingRight;

    // Utwórz tymczasowy element do pomiaru szerokości tekstu
    let tempSpan = document.createElement("span");
    document.body.appendChild(tempSpan);

    // Pobierz styl elementu, aby dopasować font
    tempSpan.style.font = style.font;

    // Ustal szerokość nazwy usługi
    tempSpan.textContent = serviceName;
    let serviceNameWidth = tempSpan.offsetWidth;

    // Ustal szerokość ceny (np. "50 ZŁ")
    tempSpan.textContent = price + " ZŁ";
    let priceWidth = tempSpan.offsetWidth;

    // Usuń tymczasowy element po pomiarze
    document.body.removeChild(tempSpan);

    // Oblicz dostępną szerokość dla '_'
    let availableSpace = elementWidth - serviceNameWidth - priceWidth;

    // Oblicz szerokość jednego znaku '_'
    tempSpan.textContent = "_";
    document.body.appendChild(tempSpan);
    let underscoreWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);

    // Oblicz ile znaków '_' zmieści się w dostępnej przestrzeni
    let underscoresCount = Math.floor(availableSpace / underscoreWidth);

    // Korekcja na podstawie indeksu (ew. dostosowania w kodzie)
    if(type === 'hair'){
      if (index === 0) {
        underscoresCount -= 6;
      } else if (index === 1) {
        underscoresCount += 24;
      }  else if (index === 2) {
        underscoresCount += 18;
      } else {
        underscoresCount -= 6;
      }
    }
    
    if(type === 'beard'){
      if (index === 0) {
        underscoresCount -= 6;
      } else if (index === 2) {
        underscoresCount += 31;
      } else {
        underscoresCount -= 6;
      }
    }

    if(type === 'combo'){
      if (index === 0) {
        underscoresCount += 29;
      } else if (index === 1) {
        underscoresCount += 29;
      }  else if (index === 3) {
        underscoresCount -= 6;
      }else {
        underscoresCount -= 6;
      }
    }

    // Stwórz łańcuch z odpowiednią liczbą '_'
    let underscores = "_".repeat(Math.max(0, underscoresCount));

    return (
      <span>
        {serviceName}
        <span className="barber-color">
          {underscores}{price} ZŁ
        </span>
      </span>
    );
  }

  return (
    <div id="background-image-2">
      <section id="prices" className="m-auto max-w-7xl p-6 padding-bottom padding mt-12">
        <h2 className="font-medium text-center sm:text-5xl sm:mb-8 gradient-text barber-color">
          Cennik usług
        </h2>
        <p className="text-white text-2xl margin-bottom text-center">
          Zapoznaj się z moim cennikiem
        </p>
        <div className="flex flex-col justify-start sm:flex-row w-full">
          <div className="w-full sm:w-1/3 price-box">
            <div className="flex justify-center pt-6 items-center w-full h-1/3">
              <Image className="image-3" src="/image/price-image-1.webp" alt="barber hair image" width={174} height={174} loading='lazy' />
            </div>
            <div className="length w-full p-5 h-2/3">
              {hairObjects && hairObjects.map((object, index) => {
                let idx, serviceName, individualPricing;
                let result = calculateUnderscores(object.nazwa_uslugi.toUpperCase(), object.cena, index, 'hair');

                if (object.nazwa_uslugi.toUpperCase() === 'TRWAŁA - LOKI (WYCENA INDYWIDUALNA PO WCZEŚNIEJSZEJ KONSULTACJI)') {
                  idx = object.nazwa_uslugi.toUpperCase().indexOf('(');
                  serviceName = object.nazwa_uslugi.toUpperCase().slice(0, idx);
                  individualPricing = object.nazwa_uslugi.toUpperCase().slice(idx);
                }

                return object.nazwa_uslugi.toUpperCase() === 'TRWAŁA - LOKI (WYCENA INDYWIDUALNA PO WCZEŚNIEJSZEJ KONSULTACJI)'
                  ? <div className="text-white mb-2.5 font-extrabold text-lg" key={object.id}>
                      {serviceName}<span className="barber-color">{individualPricing.toUpperCase()}</span>
                    </div>
                  : <div className="text-white mb-2.5 font-extrabold text-lg length" key={object.id}>
                      {result}
                    </div>;
              })}
            </div>
          </div>
          <div className="w-full sm:w-1/3 price-box">
            <div className="flex justify-center pt-6 items-center w-full h-1/3">
              <Image className="image-3" src="/image/price-image-2.webp" alt="barber hair image" width={174} height={174} loading='lazy' />
            </div>
            <div className="length w-full p-5 h-2/3">
              {beardObject && beardObject.map((object, index) => {
                let result = calculateUnderscores(object.nazwa_uslugi.toUpperCase(), object.cena, index, 'beard');

                return <div className="text-white mb-2.5 font-extrabold text-lg length" key={object.id}>
                      {result}
                    </div>;
              })}
            </div>
          </div>
          <div className="w-full sm:w-1/3 price-box">
            <div className="flex justify-center pt-6 items-center w-full h-1/3">
              <Image className="image-3" src="/image/price-image-3.webp" alt="barber hair image" width={174} height={174} loading='lazy' />
            </div>
            <div className="length w-full p-5 h-2/3">
              {comboObject && comboObject.map((object, index) => {
                let result = calculateUnderscores(object.nazwa_uslugi.toUpperCase(), object.cena, index, 'combo');

                return <div className="text-white mb-2.5 font-extrabold text-lg length" key={object.id}>
                      {result}
                    </div>;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}