import { Container, Brand, Copyright } from "./styles";

import footerImg from "../../assets/logo_footer.svg"

export function Footer() {
  return (
    <Container>
      <Brand>
        <img src={footerImg} alt="Logo da marcar" />
      </Brand>
      <Copyright>
        <span>
          &copy; 2024 - Todos os direitos reservados
        </span>
      </Copyright>
    </Container>
  )
}
