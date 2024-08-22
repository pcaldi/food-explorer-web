import { FiMinus, FiPlus } from "react-icons/fi";

import { Container } from "./styles";

export function QuantityPicker() {
  return (
    <Container>
      <button type="button">
        <FiMinus />
      </button>

      <span>01</span>

      <button type="button">
        <FiPlus />
      </button>
    </Container>
  )
}
