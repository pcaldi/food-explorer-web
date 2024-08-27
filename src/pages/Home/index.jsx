import { Container, Dishes } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import bannerImg from "../../assets/banner.png"
/* import { FoodCard } from "../../components/FoodCard"; */


export function Home() {

  /* const data = {
    "title": "Salada Ravanello",
    "description": "Uma salada com carne seca, cenoura, tomate, alface, azeitona e orégano.",
    "price": "48.90"
  } */

  return (
    <Container>
      <Header />

      <main>
        <div>
          <header>
            <img src={bannerImg} alt="Banner da página" />

            <div >
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </header>

          <Dishes>
          </Dishes>

        </div>


      </main>

      <Footer />
    </Container>
  )
}
