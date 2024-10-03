/* eslint-disable react/prop-types */
import { Container } from "./styles";

import { Header } from "../Header";
import { Search } from "../Search";
import { ButtonText } from "../ButtonText";

import { USER_ROLES } from "../../utils/roles";

import { useAuth } from "../../hooks/auth";

export function Menu({ isMenuOpen, setIsMenuOpen }) {

  const { user } = useAuth();
  const isAdmin = [USER_ROLES.ADMIN].includes(user.role);


  return (
    <Container>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
