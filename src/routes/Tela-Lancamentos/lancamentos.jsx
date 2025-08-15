import React from 'react';
import './lancamentos.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Lancamentos() {
  // Lista de banners de lançamentos
  const banners = [
    'src/assets/images/bob-esponja.png',
    'src/assets/images/god-of-war.png',
    'src/assets/images/deliver-us-mars.png',
    'src/assets/images/death-stranding.png',
    'src/assets/images/parish.png',
    'src/assets/images/spell-force.png',
    'src/assets/images/expedition.png',
    'src/assets/images/reanimal.png',
    'src/assets/images/silent.png',
    'src/assets/images/8020.png',
  ];

  return (
    <div className="page-layout">
      {/* Navbar fixa no topo */}
      <Navbar />

      {/* Introdução do blog/lançamentos */}
      <section className="blog-intro">
        <h2>Novidades do Mundo Gamer: Silent Hill ainda vive?</h2>
        <p>
          Prepare-se para mergulhar no que há de mais incrível e aguardado no universo dos games. Aqui, cada novidade chega fresquinha, com trailers empolgantes, imagens de tirar o fôlego e informações exclusivas para você que vive e respira videogame.

          E falando em expectativa… os holofotes estão sobre Silent Hill F, que promete redefinir o terror psicológico com sua atmosfera perturbadora e narrativa profunda — um convite irresistível para os fãs da série e para quem quer experimentar arrepios de verdade. Ao mesmo tempo, Perish chega para colocar sua habilidade à prova em batalhas implacáveis, cenários sombrios e um combate tão intenso que vai deixar seu coração acelerado.

          Aqui, não apenas mostramos os jogos: contamos as histórias por trás deles, revelamos curiosidades que você não vai encontrar em qualquer lugar e ajudamos você a decidir qual será sua próxima grande aventura.

          Role para baixo para ver os principais lançamentos e novidades que estão agitando o cenário gamer. Prepare-se para explorar, descobrir e se apaixonar por cada pixel desses mundos incríveis!
        </p>
      </section>

      {/* Carrossel de banners */}
      <section className="banners-carousel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            // Mobile (até 639px)
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              slidesPerGroup: 1,
              centeredSlides: true
            },
            // Tablet (640px a 1023px)
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
              centeredSlides: true
            },
            // Desktop (1024px+)
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
              slidesPerGroup: 2,
              centeredSlides: true
            }
          }}
        >
          {/* Renderização dos banners */}
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div className="banner-item">
                <img 
                  src={banner} 
                  alt={`Banner ${index + 1}`} 
                  className="game-banner"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Footer fixo no final */}
      <Footer />
    </div>
  );
}

export default Lancamentos;
