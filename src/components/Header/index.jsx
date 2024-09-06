/* eslint-disable react/prop-types */
import { Container, Brand, Search, Logout } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Button } from "../Button";
import { Input } from "../Input";

import logoImg from "../../assets/logo.svg";
import logo_admImg from "../../assets/logo_adm.svg";

import { FiLogOut, FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom";

export function Header({ isAdmin = false }) {

  const brand = isAdmin ? logo_admImg : logoImg;

  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    signOut();
  }

  function handleNewDish() {
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

      {isAdmin ?
        <Button title="Novo prato" onClick={handleNewDish} />
        :
        <Button title="Pedidos" isCustomer orderCount={0} />
      }

      <Logout onClick={handleLogout}>
        <FiLogOut />
      </Logout>

    </Container>
  )
}
