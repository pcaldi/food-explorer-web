import { Container, Item } from "./styles";

import { FoodItem } from "../../components/FoodItem";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";

export function New() {
  return (
    <Container>
      <Header isAdmin />


      <Section title="Ingredientes">
        <Item>
          <FoodItem placeholder="Pão" />
          <FoodItem isNew placeholder="Adicionar" />
        </Item>

      </Section>

      <Section title="Descrição">
        <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
      </Section>

      <Footer />

    </Container>
  )
}
