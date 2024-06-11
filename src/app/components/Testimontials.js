import { Carousel } from 'react-responsive-carousel';

export default function Testimontials() {
  return (
    <section id="testimonial" className="testimonial-section sec-bg-04 py-5">
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
              <Carousel
                thumbWidth={150}
                showStatus={false}
                interval={3000}
                infiniteLoop={true}
                autoPlay={true}
              >
                <div className="carousel-item active">
                  <div className="testimonial-box text-center">
                    <div className="testimonial-content w-100 bg-faded">
                      <p className="mb-3">⭐⭐⭐⭐⭐</p>
                      <p className="lead font-abril">
                        Bardzo miła i profesjonalna obsługa na wysokim poziomie
                        spełniająca oczekiwania najbardziej wymagającego
                        klienta. Pani potrafi super doradzić i ma świetne
                        podejście do klienta. Polecam - NAJLEPSZA !!! 👍
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
                      <p className="mb-3">⭐⭐⭐⭐⭐</p>
                      <p className="lead font-abril">
                        Kawa, a proszę bardzo. Termin na telefon, bez kolejki.
                        Profesjonalna obsługa klienta i bardzo miła pani z dużym
                        doświadczeniem. Polecam.
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
                      <p className="mb-3">⭐⭐⭐⭐⭐</p>
                      <p className="lead font-abril">
                        Polecam z całego serca świetne podejście do klienta
                        bardzo dobrze wykonane obcięcie
                      </p>
                      <div className="testimonial-footer">
                        <h4 className="mt-2 mb-0 text-primary">
                          Kasia Dostatna
                        </h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item active">
                  <div className="testimonial-box text-center">
                    <div className="testimonial-content w-100 bg-faded">
                      <p className="mb-3">⭐⭐⭐⭐⭐</p>
                      <p className="lead font-abril">
                        Witam super obsługa i pełen profesjonalizm pozdrawiam
                        Mateusz
                      </p>
                      <div className="testimonial-footer">
                        <h4 className="mt-2 mb-0 text-primary">
                          Mateusz Reszel
                        </h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item active">
                  <div className="testimonial-box text-center">
                    <div className="testimonial-content w-100 bg-faded">
                      <p className="mb-3">⭐⭐⭐⭐⭐</p>
                      <p className="lead font-abril">
                        Świetna obsługa. Żadna fryzura nie stanowi problemu🙂.
                        Polecam.
                      </p>
                      <div className="testimonial-footer">
                        <h4 className="mt-2 mb-0 text-primary">
                          Grzegorz Grzegorz
                        </h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
