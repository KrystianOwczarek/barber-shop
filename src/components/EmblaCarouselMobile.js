import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  return (
    <section className="embla-mobile">
      <div className="embla__viewport-mobile" ref={emblaRef}>
        <div className="embla__container-mobile">
          {slides.map((slide, index) => (
            <div className="embla__slide-mobile" key={index}>
                <Image style={{ borderRadius: '5px', width: '100%', height: '100%' }} src={slide} alt='portfolio image' width={300} height={600} loading='lazy' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
