import { FiMinus, FiPlus } from "react-icons/fi";

import { Container } from "./styles";

export function QuantityPicker() {
  return (
    <Container>
      <FiMinus size={24} />
      <span>01</span>
      <FiPlus size={24} />
    </Container>
  )
}
