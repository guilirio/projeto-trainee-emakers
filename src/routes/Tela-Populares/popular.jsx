import { useState } from 'react'
import './popular.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

function Popular() {
  return (
    <div>
      <div className='page-layout'>
        <Navbar />
        <div className='popular-container'>
          <h1 className='section-title'>Populares</h1>
          
          <div className='game-row-odd'>
            <div className='image-wrapper'>
              <div className='rank-badge'>1º</div>
              <img 
                src='/src/assets/images/god-of-war-horizontal.png' 
                className='game-image' 
                alt="God of War"
              />
            </div>
            <div className='text-content'>
              <h2 className='game-title'>God of War</h2>
              <p className='game-description'>
                Kratos, outrora o temido Fantasma de Esparta, agora enfrenta seu maior desafio: ser pai. Como protetor e mentor de Atreus, um filho que busca seu reconhecimento, ele precisa dominar a própria fúria que um dia o consumiu enquanto atravessam um mundo brutal repleto de deuses e monstros nórdicos.

            Deixando para trás a vingança contra o Olimpo, Kratos luta para sobreviver em terras selvagens, onde cada passo exige sangue e sabedoria. Ele não apenas ensina Atreus a se defender, mas também tenta impedi-lo de seguir os mesmos caminhos de violência e destruição que marcaram seu passado. O guerreiro que desafiou deuses agora enfrenta uma batalha ainda maior: proteger seu filho... até de si mesmo.
              </p>
            </div>
          </div>

          <div className='game-row-even'>
            <div className='image-wrapper'>
              <div className='rank-badge'>2º</div>
              <img 
                src='/src/assets/images/horizon-horizontal.png' 
                className='game-image' 
                alt="Horizon Zero Dawn"
              />
            </div>
            <div className='text-content'>
              <h2 className='game-title'>Horizon Zero Dawn</h2>
              <p className='game-description'>
                Em um futuro distante, onde titãs de metal dominam a Terra e a natureza engoliu as ruínas da humanidade, as últimas tribos de sobreviventes lutam por um lugar neste mundo selvagem.

            Você é Aloy, uma destemida caçadora exilada de seu povo, armada apenas com seu arco, sua lança e sua astúcia. Determinada a desvendar os segredos de seu passado, ela embarca em uma jornada épica para salvar um mundo à beira do colapso – e descobrir por que ele está condenado.

            Entre florestas exuberantes e desertos implacáveis, enfrente máquinas colossais, enfrente tribos rivais e desvende os mistérios de uma civilização perdida. O destino da humanidade está em suas mãos.
              </p>
            </div>
          </div>

          <div className='game-row-odd'>
            <div className='image-wrapper'>
              <div className='rank-badge'>3º</div>
              <img 
                src='/src/assets/images/days-gone-horizontal.png' 
                className='game-image' 
                alt="Days Gone"
              />
            </div>
            <div className='text-content'>
              <h2 className='game-title'>Days Gone</h2>
              <p className='game-description'>
                Days Gone é um jogo de ação e aventura em mundo aberto ambientado em um cenário pós-apocalíptico, dois anos após uma pandemia global devastadora.

            Você assume o papel de Deacon St. John, um ex-motociclista fora da lei que agora sobrevive como caçador de recompensas em um mundo à beira do colapso. Em meio ao caos, ele busca não apenas recursos, mas também um propósito em uma terra dominada pela morte e pela violência.

            Explore assentamentos abandonados, colete materiais para fabricar equipamentos essenciais e enfrente os perigos de um mundo hostil. Encontre outros sobreviventes — alguns dispostos a cooperar, outros prontos para trair ou atacar. Suas escolhas definirão seu caminho nessa luta brutal pela sobrevivência.

            Prepare-se para uma jornada intensa, onde cada decisão pode ser a diferença entre a vida e a morte. O mundo acabou. Como você vai enfrentá-lo?
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Popular