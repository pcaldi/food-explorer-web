/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { Header } from "../Header";
import { Search } from "../Search";
import { ButtonText } from "../ButtonText";


export function Menu({ isAdmin, isMenuOpen, setIsMenuOpen }) {
  return (
    <Container>
      <Header isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Search />

        {isAdmin &&
          <ButtonText>
            Novo prato
          </ButtonText>
        }

        <ButtonText>
          Sair
        </ButtonText>

      </main>
    </Container>
  )
}
