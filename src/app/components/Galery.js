import Image from 'next/image';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lightgallery.css';
import { motion } from 'framer-motion';
export default function Galery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

  return (
    <motion.section
      id="galery"
      className="info-section sec-bg-05 text-white bg-right bg-dark bg-overlay"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}  transition={{ ease: "easeOut", duration: 3, delay: 0.25 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="head-box text-center">
              <h2 className="font-abril ">Galeria zdjęć</h2>
            </div>
            <div className="grid">
              <LightGallery
                getCaptionFromTitleOrAlt={false}
                download={false}
                elementClassNames="grid-container"
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
              >
                {[
                  "/img/1.webp",
                  "/img/2.webp",
                  "/img/3.webp",
                  "/img/4.webp",
                  "/img/5.webp",
                  "/img/6.webp",
                  "/img/7.jpeg",
                  "/img/8.jpeg",
                ].map((src, index) => (
                  <a href={src} key={index} className="grid-item">
                    <div className="service-block">
                      <Image
                        alt={`barber shop zdjecie wykonanej pracy ${index + 1}`}
                        src={src}
                        width={1000}
                        height={1000}
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </a>
                ))}
              </LightGallery>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
