/* eslint-disable react/prop-types */
import { PiReceipt } from "react-icons/pi";
import { Container, Content } from "./styles";

export function Button({ title, loading = false, isCustomer, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      <Content>
        {isCustomer && <PiReceipt />}
        {loading ? "Carregando..." : title}
        {isCustomer && <span>({rest.orderCount})</span>}
      </Content>
    </Container>
  )
}
