import { Container, Search } from "./styles";

import { FiSearch, FiX } from "react-icons/fi";

import { Input } from "../Input";

import { USER_ROLES } from "../../utils/roles";

import { useAuth } from "../../hooks/auth";
import { Footer } from "../Footer";

export function DropMenu() {

  const { user } = useAuth();
  const isAdmin = [USER_ROLES.ADMIN].includes(user.role);

  return (
    <Container>
      <header>
        <button>
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
          <button className="btn">
            Novo prato
          </button>
        }

        <button>
          Sair
        </button>
      </main>

      <Footer />
    </Container>
  )
}
