
import { Container, Brand, Search, Logout } from "./styles";

import { useAuth } from "../../hooks/auth";
import { USER_ROLES } from "../../utils/roles";

import { Button } from "../Button";
import { Input } from "../Input";

import logoImg from "../../assets/logo.svg";
import logo_admImg from "../../assets/logo_adm.svg";

import { FiLogOut, FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom";

export function Header() {

  const { signOut, user } = useAuth();

  const isAdmin = [USER_ROLES.ADMIN].includes(user.role);

  const brand = isAdmin ? logo_admImg : logoImg;

  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
    signOut();
  }

  function handleNewPage() {
    navigate("/new")
  }

  return (
    <Container>
      <Brand>
        <img src={brand} alt="Logo do site" />
      </Brand>

      <Search>
        <Input
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
        />
      </Search>

      {
        isAdmin ?
          <Button title="Novo prato" onClick={handleNewPage} />
          :
          <Button title="Pedidos" isCustomer orderCount={0} />
      }

      <Logout onClick={handleLogout}>
        <FiLogOut />
      </Logout>

    </Container>
  )
}
