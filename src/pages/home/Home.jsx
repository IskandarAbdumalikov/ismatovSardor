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

const Home = () => {
  return (
    <div>
      <header>
        <h1>Ismatov Sardor</h1>
      </header>
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
          </Swiper>
        </div>
        <div className="about">
          <h1>About me</h1>
          <hr />
          <div className="informations">
            <h3>Salom meni ismim Sardor familyam Ismatov</h3>
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
              href="https://www.instagram.com/ISMATOVV_571"
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
      </main>
    </div>
  );
};

export default Home;
