import React from "react";
import "./home.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";
import photo5 from "../../assets/photo5.jpg";
import photo6 from "../../assets/photo6.jpg";
import photo7 from "../../assets/photo7.jpg";
import photo8 from "../../assets/photo8.jpg";
import photo9 from "../../assets/photo9.jpg";
import photo10 from "../../assets/photo10.jpg";
import photo11 from "../../assets/photo11.jpg";
import photo12 from "../../assets/photo12.jpg";
import photo13 from "../../assets/photo13.jpg";
import photo14 from "../../assets/photo14.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <main className="container">
        <div className="hero">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo9} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo10} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo11} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo12} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo13} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img style={{ width: "100%" }} src={photo14} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="about">
          <h1>About me</h1>
          <hr />
          <div className="informations">
            <h3>Salom meni ismim Sardor familyam Ismatov</h3>
            <p>
              Men 2007 yil 14 - yanvarda Jizzax viloyati Zomin tumani Kultepa
              qishlog`ida tug`ilganman.
            </p>
            <Link to={"/table"}>
              Sinfdoshlarim haqida ma`lumot olish uchun bu yerni bosing...
            </Link>
          </div>
        </div>
        <section className="contacts">
          <h1>Contacts</h1>
          <hr />
          <div className="links">
            <a
              href="https://t.me/@ismatovv_571"
              target="_blank"
              className="telegram"
            >
              <img
                width={30}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png"
                alt=""
              />
              Telegram
            </a>
            <a
              href="https://www.instagram.com/14ismatov.s"
              target="_blank"
              className="instagram"
            >
              <img
                width={30}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"
                alt=""
              />
              Instagram
            </a>
            <a href="tel:+998944792279" target="_blank" className="telefon">
              <img
                width={30}
                src="https://w7.pngwing.com/pngs/545/34/png-transparent-call-manager-logo-mobile-phones-telephone-call-whatsapp-google-contacts-contact-text-logo-grass-thumbnail.png"
                alt=""
              />
              Telefon
            </a>
          </div>
        </section>
        <section className="map">
          <h1>My location</h1>
          <hr />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.6462932760037!2d68.63854850699099!3d39.96611282820881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b2339ba8d2ce89%3A0xa5fa41a1c6c608da!2s33-maktab!5e0!3m2!1sen!2s!4v1717601230960!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
    </div>
  );
};

export default Home;
