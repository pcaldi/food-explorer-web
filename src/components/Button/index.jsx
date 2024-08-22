/* eslint-disable react/prop-types */
import { PiReceipt } from "react-icons/pi";

import { Container } from "./styles";

export function Button({ title, loading = false, isCustomer, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {isCustomer && <PiReceipt size={32} />}
      {loading ? "Carregando..." : title}
      {isCustomer && <span>({rest.orderCount})</span>}
    </Container>
  )
}
