/* eslint-disable react/prop-types */
import { Container, Brand, Search, Logout } from "./styles";

import { Button } from "../Button";
import { Input } from "../Input";

import brand from "../../assets/brand.png";
import brandAdmin from "../../assets/brand-admin.png";

import { FiLogOut, FiSearch } from "react-icons/fi"

export function Header({ isAdmin = false }) {

  const logo = isAdmin ? brandAdmin : brand

  return (
    <Container>
      <Brand>
        <img src={logo} alt="Logo do site" />
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
