import { Container, Brand, Copyright } from "./styles";

import footer from "../../assets/footer.png"

export function Footer() {
  return (
    <Container>
      <Brand>
        <img src={footer} alt="Logo da marcar" />
      </Brand>
      <Copyright>
        <span>
          &copy; 2024 - Todos os direitos reservados
        </span>
      </Copyright>
    </Container>
  )
}
