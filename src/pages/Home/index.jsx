import { Container, Dishes } from "../HomeOriginal/styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FoodCard } from "../../components/FoodCard";
import { Slider } from "../../components/Slider";
import { Section } from "../../components/Section";
import { Banner } from "../../components/Banner";

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
        <Banner />
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
      </main>

      <Footer />
    </Container >
  )
}
