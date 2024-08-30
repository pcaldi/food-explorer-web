import { Container, Dishes } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FoodCard } from "../../components/FoodCard";
import { Slider } from "../../components/Slider";
import { Section } from "../../components/Section";

import bannerImg from "../../assets/banner.png";

export function Home() {

  const data = {
    "title": "Salada Ravanello",
    "description": "Uma salada com carne seca, cenoura, tomate, alface, azeitona e orégano.",
    "price": "48.90"
  }

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
            <Section title="Refeição">
              <Slider>
                <FoodCard data={data} />
                <FoodCard data={data} />
                <FoodCard data={data} />
                <FoodCard data={data} />
              </Slider>
            </Section>

            <Section title="Bebidas">
              <Slider>
                <FoodCard data={data} />
                <FoodCard data={data} />
                <FoodCard data={data} />
                <FoodCard data={data} />
              </Slider>
            </Section>

            <Section title="Refeição">
              <Slider>
                <FoodCard data={data} />
                <FoodCard data={data} />
                <FoodCard data={data} />
                <FoodCard data={data} />
              </Slider>
            </Section>
          </Dishes>

        </div>


      </main>

      <Footer />
    </Container>
  )
}
