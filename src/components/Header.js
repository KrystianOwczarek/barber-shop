import Navigation from "./Navigation";
import Link from "next/link";

export default function Header() {
  return (
    <div id="background-image-header">
      <Navigation />
      <section
        id="hero"
        className="max-w-full w-full flex flex-col-reverse justify-start sm:flex-row p-6 items-center gap-8 mt-20 sm:mt-36 scroll-mt-80"
      >
        <article className="max-w-7xl w-full m-auto pl-4">
          <h1 className="max-w-full font-medium mb-5 sm:mb-10 text-start sm:text-5xl sm:text-left barber-color">
            Polityka prywatności
          </h1>
          <p className="max-w-full text-2xl mb-10 text-start sm:text-left text-white">
            <Link className="opacity-60 hover:opacity-100" href="/">
              Strona główna
            </Link>{' '} 
            {'>'} Polityka prywatności
          </p>
        </article>
      </section>
    </div>
  );
}