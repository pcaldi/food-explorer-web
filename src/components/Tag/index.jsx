/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Tag({ name, ...rest }) {
  return (
    <Container {...rest}>
      {name}
    </Container>
  )
}
