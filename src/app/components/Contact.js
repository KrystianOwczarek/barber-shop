import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contactinfo"
      className="testimonial-section sec-bg-05 py-5 bg-overlay"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}  transition={{ ease: "easeOut", duration: 3, delay: 0.25}}
    >
      <div className="row">
        <div className="head-box text-center mb-3 col-md-12 mt-4">
          <h2
            style={{ marginBottom: "1rem" }}
            className="font-abril text-white"
          >
            Informacje kontaktowe
          </h2>
        </div>
      </div>
      <div className="container" style={{ marginBottom: "1rem" }}>
        <div className="row" style={{ backgroundColor: "#0f0a05" }}>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h4 className="p-3 text-white text-center">
              <strong>Adres:</strong>
            </h4>
            <div
              className="p-3 text-white text-center"
              style={{ fontSize: "18px" }}
            >
              Rynek 4 <br /> 63-440 Raszków
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h4 className="p-3 text-white text-center">
              <strong>Numer telefonu:</strong>
            </h4>
            <div
              className="p-3 text-white text-center"
              style={{ fontSize: "18px" }}
            >
              +48 668 637 979
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h4 className="p-3 text-white text-center">
              <strong>Facebook:</strong>
            </h4>
            <div
              className="p-3 text-white text-center"
              style={{ fontSize: "18px" }}
            >
              <a
                className="a-fb"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100095056908881"
              >
                Barber Shop Raszków
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
