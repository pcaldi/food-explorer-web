/* eslint-disable react/prop-types */

import { Container, Brand, Search, Logout, Menu } from "./styles";

import { useAuth } from "../../hooks/auth";
import { USER_ROLES } from "../../utils/roles";

import { Input } from "../Input";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

import logoImg from "../../assets/logo.svg";
import logo_admImg from "../../assets/logo_adm.svg";

import { FiLogOut, FiSearch, FiMenu } from "react-icons/fi"
import { useNavigate } from "react-router-dom";

export function Header({ setSearch }) {

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

  function handleFavoritePage() {
    navigate("/favorites")
  }

  return (
    <Container>
      <Menu>
        <FiMenu />
      </Menu>

      <Brand>
        <img src={brand} alt="Logo do site" />
      </Brand>

      <Search>
        <Input
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <div className="fav">
        <ButtonText onClick={handleFavoritePage}>
          Meus Favoritos
        </ButtonText>
      </div>

      {
        isAdmin ?
          <div className="btn">
            <Button title="Novo prato" onClick={handleNewPage} />
          </div>
          :
          <div className="btn">
            <Button title="Pedidos" isCustomer orderCount={0} />
          </div>
      }

      <Logout onClick={handleLogout}>
        <FiLogOut />
      </Logout>

    </Container>
  )
}
