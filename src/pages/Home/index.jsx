import { Container } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FoodCard } from "../../components/FoodCard";


export function Home() {
  return (
    <Container>
      <Header />

      <FoodCard data={{
        "title": "Salada Ravanello",
        "description": "Uma salada com carne seca, cenoura, tomate, alface, azeitona e orégano.",
        "price": "48.90"
      }} />

      <FoodCard isChecked data={{
        "title": "Salada Caesar",
        "description": "Uma salada com carne seca, cenoura, tomate, alface, azeitona e orégano.",
        "price": "39.90"
      }} />

      <FoodCard isAdmin data={{
        "title": "Salada Caesar",
        "description": "Uma salada com carne seca, cenoura, tomate, alface, azeitona e orégano.",
        "price": "39.90"
      }} />

      <Footer />
    </Container>
  )
}
