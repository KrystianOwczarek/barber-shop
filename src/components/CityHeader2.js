import Link from "next/link";
import dynamic from 'next/dynamic'

export default function CirtyHeader2({ city, city2 }) {
  const DynamicNavigation = dynamic(() => import('./Navigation'), { ssr: false });

  return (
    <>
    <div id="background-image-header">
      <DynamicNavigation />
      <section
        id="hero"
        className="max-w-full w-full flex flex-col-reverse justify-start sm:flex-row p-6 items-center gap-8 mt-20 sm:mt-36 scroll-mt-80"
      >
        <article className="max-w-7xl w-full m-auto pl-4">
          <h1 className="max-w-full font-medium mb-5 sm:mb-10 text-start sm:text-5xl sm:text-left barber-color">
            Fryzjer {city}
          </h1>
          <p className="max-w-full text-2xl mb-10 text-start sm:text-left text-white">
            <Link className="opacity-60 hover:opacity-100" href="/">
              Strona główna
            </Link>{' '} 
            {'>'} Fryzjer {city}
          </p>
        </article>
      </section>
    </div>
    <section
        id="description"
        className="max-w-7xl m-auto flex justify-center sm:flex-row p-6 items-center gap-8 mt-10 sm:mt-10 mb-10 scroll-mt-80"
      > 
        <p className='text-white text-xl'>Zapraszam do mojego salonu fryzjerskiego w okolicach {city2}! Oferuję profesjonalne strzyżenie, pielęgnację brody oraz stylizację fryzur. Jako doświadczony barber zadbam o Twój wygląd, zapewniając usługi na najwyższym poziomie. Umów się na wizytę i odśwież swój styl!</p>
      </section>
    </>
  );
}