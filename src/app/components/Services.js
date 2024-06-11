import Image from 'next/image';

export default function Home() {
    return(
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
                      <Image alt='barber shop norzyczki' src="/img/icons/scissors.webp" width='100' height='100' className="img-fluid" loading='lazy'/>
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
                      <Image alt='barber shop brzytwa' src="/img/icons/razor-1.webp" width='100' height='100' className="img-fluid" loading='lazy'/>
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
                      <Image alt='barber shop szczotka' src="/img/icons/brush.webp" width='100' height='100' className="img-fluid" loading='lazy'/>
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
                      <Image alt='barber shop spinka do włosów' width='100' height='100' src="/img/icons/hair-clip.webp" className="img-fluid" loading='lazy'/>
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
    )
}