import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Price() {
    return(
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}  transition={{ ease: "easeOut", duration: 3, delay: 0.25 }} id="about" className="copy-content-sec sec-bg-02 h-100">
      <div className="container">
        <div className="row display-flex">
          <div className="col-lg-6 col-md-12 copy-container ml-auto margin-right-img">
            <Image src="/img/price-image2.webp" alt='barber shop zdjecie robionej brody' id='price-image' width='325' height='110' style={{  maxWidth: '100%' }} loading='lazy'/>
            <Image src="/img/price-image.webp" alt='barber shop zdjecie robionej brody' id='price-image2' width='325' height='110' style={{  maxWidth: '100%' }} loading='lazy'/>
          </div>
          <div className="col-lg-6 col-md-12 copy-container ml-auto">
            <div className="copy-content pr-4">
              <h2 className="font-abril text-primary">Mamy najlepsze ceny</h2>
              <div className="container">
              <div className="row" id='computer'>
                <div className="col-md-6">
                    <li className="list-group-item">Strzyżenie włosów. . . . . . . . . . .<span className='barber-color'>50 zł</span></li>
                    <li className="list-group-item">Combo 1 włosy + trymowanie brody. . . . . . . . . . . . . . . . . . . . . . . . . . .<span className='barber-color'>75 zł</span></li>
                    <li className="list-group-item">Strzyżenie dzieci do lat 12. . . <span className='barber-color'>38 zł</span></li>
                    <li className="list-group-item">Strzyżenie włosów długich. <span className='barber-color'>70 zł</span></li>
                    <li className="list-group-item">Strzyżenie brody. . . . . . . . . . . . . .<span className='barber-color'>45 zł</span></li>
                    <li className="list-group-item">Combo 1 + trymowanie brody brzytwą. . . . . . . . . . . . . . . . . . . . . . . <span className='barber-color'>85 zł</span></li>
                    <li className="list-group-item">Odsiwianie włosów lub urody. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .<span className='barber-color'>85 zł</span></li>
                </div>
                <div className="col-md-6">
                    <li className="list-group-item">Golenie głowy brzytwą. . . . . . .<span className='barber-color'>50 zł</span></li>
                    <li className="list-group-item">Woskowanie uszy. . . . . . . . . . . . . . .<span className='barber-color'>15 zł</span></li>
                    <li className="list-group-item">Woskowanie nos. . . . . . . . . . . . . . . .<span className='barber-color'>15 zł</span></li>                
                    <li className="list-group-item">Woskowanie brwi. . . . . . . . . . . . . . .<span className='barber-color'>15 zł</span></li>
                    <li className="list-group-item">Stylizacja włosów. . . . . . . . . . . . <span className='barber-color'>25 zł</span></li>
                    <li className="list-group-item">Trwała - loki (wycena indywidualna po wcześniejszej konsultacji)</li>
                    </div>
              </div>
              <div className="row" id='mobile-tablet'>
                <div className="col-md-6">
                    <li className="list-group-item">Strzyżenie włosów. . . . . . . . . . . . . . . . . . . . . . <span className='barber-color'>50 zł</span></li>
                    <li className="list-group-item">Combo 1 włosy + trymowanie brody. . . .<span className='barber-color'>75 zł</span></li>
                    <li className="list-group-item">Strzyżenie dzieci do lat 12. . . . . . . . . . . . . . .<span className='barber-color'>38 zł</span></li>
                    <li className="list-group-item">Strzyżenie włosów długich. . . . . . . . . . . . <span className='barber-color'>70 zł</span></li>
                    <li className="list-group-item">Strzyżenie brody. . . . . . . . . . . . . . . . . . . . . . . . .<span className='barber-color'>45 zł</span></li>
                    <li className="list-group-item">Combo 1 + trymowanie brody brzytwą.<span className='barber-color'>85 zł</span></li>
                    <li className="list-group-item">Odsiwianie włosów lub urody. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .<span className='barber-color'>85 zł</span></li>
                </div>
                <div className="col-md-6">
                    <li className="list-group-item">Golenie głowy brzytwą. . . . . . . . . . . . .<span className='barber-color'>50 zł</span></li>
                    <li className="list-group-item">Woskowanie uszy. . . . . . . . . . . . . . . . .  . . . .<span className='barber-color'>15 zł</span></li>
                    <li className="list-group-item">Woskowanie nos. . . . . . . . . . . . . . . . .  . . . . .<span className='barber-color'>15 zł</span></li>                
                    <li className="list-group-item">Woskowanie brwi. . . . . . . . . . . . . . . . .  . . . . <span className='barber-color'>15 zł</span></li>
                    <li className="list-group-item">Stylizacja włosów. . . . . . . . . . . . . . . . . . <span className='barber-color'>25 zł</span></li>
                    <li className="list-group-item">Trwała - loki (wycena indywidualna po wcześniejszej konsultacji)</li>
                </div>
              </div>
              <div className="row" id='mobile-phone'>
                <div className="col-md-6">
                    <li className="list-group-item">Strzyżenie włosów. . . . . . . . . . . . <span className='barber-color'>50 zł</span></li>
                    <li className="list-group-item">Combo 1 włosy+trymowanie brody. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . <span className='barber-color'>75 zł</span></li>
                    <li className="list-group-item">Strzyżenie dzieci do lat 12. . . . .<span className='barber-color'>38 zł</span></li>
                    <li className="list-group-item">Strzyżenie włosów długich. . .<span className='barber-color'>70 zł</span></li>
                    <li className="list-group-item">Strzyżenie brody. . . . . . . . . . . . . . . <span className='barber-color'>45 zł</span></li>
                    <li className="list-group-item">Combo 1+trymowanie brody brzytwą. . . . . . . . . . . . . . . . . . . . . . . . . <span className='barber-color'>85zł</span></li>
                    <li className="list-group-item">Odsiwianie włosów lub urody.<span className='barber-color'>85 zł</span></li>
                </div>
                <div className="col-md-6">
                    <li className="list-group-item">Golenie głowy brzytwą. . . . . . . <span className='barber-color'>50 zł</span></li>
                    <li className="list-group-item">Woskowanie uszy. . . . . . . . . . . . . . . <span className='barber-color'>15 zł</span></li>
                    <li className="list-group-item">Woskowanie nos. . . . . . . . . . . . . . . . <span className='barber-color'>15 zł</span></li>                
                    <li className="list-group-item">Woskowanie brwi. . . . . . . . . . . . . . . <span className='barber-color'>15 zł</span></li>
                    <li className="list-group-item">Stylizacja włosów. . . . . . . . . . . . .<span className='barber-color'>25 zł</span></li>
                    <li className="list-group-item">Trwała - loki (wycena indywidualna po wcześniejszej konsultacji)</li>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
    )
}