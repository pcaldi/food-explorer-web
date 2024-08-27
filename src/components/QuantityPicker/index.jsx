import { useState } from "react";

import { FiMinus, FiPlus } from "react-icons/fi";

import { Container } from "./styles";

export function QuantityPicker() {

  const [quantity, setQuantity] = useState(1);

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <Container>
      <button onClick={decrementQuantity} type="button">
        <FiMinus />
      </button>

      <span>{quantity < 10 ? `0${quantity}` : quantity}</span>

      <button onClick={incrementQuantity} type="button">
        <FiPlus />
      </button>
    </Container>
  )
}
