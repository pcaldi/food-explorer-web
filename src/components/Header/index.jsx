/* eslint-disable react/prop-types */
import { Container, Brand, Search, Logout } from "./styles";

import { Button } from "../Button";
import { Input } from "../Input";

import logoImg from "../../assets/logo.svg";
import logo_admImg from "../../assets/logo_adm.svg";

import { FiLogOut, FiSearch } from "react-icons/fi"

export function Header({ isAdmin = false }) {

  const brand = isAdmin ? logo_admImg : logoImg

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
        <Button title="Novo prato" />
        :
        <Button title="Pedidos" isCustomer orderCount={0} />
      }

      <Logout>
        <FiLogOut />
      </Logout>

    </Container>
  )
}
