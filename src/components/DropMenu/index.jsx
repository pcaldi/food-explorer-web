/* eslint-disable react/prop-types */
import { Container, Search } from "./styles";

import { FiSearch, FiX } from "react-icons/fi";

import { Input } from "../Input";
import { Footer } from "../Footer";

import { USER_ROLES } from "../../utils/roles";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function DropMenu({ menuIsOpen, onCloseMenu }) {

  const { user, signOut } = useAuth();
  const isAdmin = [USER_ROLES.ADMIN].includes(user.role);

  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
    signOut();
  }

  function handleNewPage() {
    navigate("/new")
  }


  return (
    <Container data-menu-is-open={menuIsOpen} >
      <header>
        <button onClick={onCloseMenu}>
          <FiX />
        </button>
        <span>Menu</span>
      </header>

      <main>

        <Search>
          <Input
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />
        </Search>

        {isAdmin &&
          <button
            className="btn"
            onClick={handleNewPage}
          >
            Novo prato
          </button>
        }

        <button onClick={handleLogout}>
          Sair
        </button>

      </main>

      <footer>
        <Footer />
      </footer>

    </Container>
  )
}
