import React from 'react'
import './home.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

// Importações do Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import CSS do Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Home() {
  return (
    <div className="page-layout">
      <Navbar />

      {/* CARROSSEL DESTAQUE */}
      <section className="banner-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="banner-swiper"
        >
          <SwiperSlide>
            <img
              src="/src/assets/images/banner1.jpg" // TROCAR AQUI
              alt="Banner 1"
              className="banner-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/banner2.jpg" // TROCAR AQUI
              alt="Banner 2"
              className="banner-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/banner3.jpg" // TROCAR AQUI
              alt="Banner 3"
              className="banner-image"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* SEÇÃO DE LANÇAMENTOS */}
      <section className="section-container">
        <h1 className="section-title">Lançamentos</h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 }
          }}
        >
          <SwiperSlide>
            <img
              src="/src/assets/images/god-of-war.png" // TROCAR AQUI
              alt="Jogo 1"
              className="banner-card"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/deliver-us-mars.png" // TROCAR AQUI
              alt="Jogo 2"
              className="banner-card"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/death-stranding.png" // TROCAR AQUI
              alt="Jogo 3"
              className="banner-card"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/src/assets/images/bob-esponja.png" // TROCAR AQUI
              alt="Jogo 4"
              className="banner-card"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <Footer />
    </div>
  )
}

export default Home
