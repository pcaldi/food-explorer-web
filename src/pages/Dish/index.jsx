import { FiChevronLeft } from "react-icons/fi";

import { Container } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { QuantityPicker } from "../../components/QuantityPicker";

export function Dish() {
  return (
    <Container>
      <Header />

      <ButtonText>
        <FiChevronLeft size={32} />
        voltar
      </ButtonText>

      <Tag title="Tomate" />
      <Tag title="Alface" />
      <Tag title="Cebola" />

      <QuantityPicker />


      <Footer />

    </Container>
  )
}
