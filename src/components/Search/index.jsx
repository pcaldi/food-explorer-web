import { Container } from "./styles";

import { Input } from "../Input"

import { FiSearch } from "react-icons/fi";
export function Search() {
  return (
    <Container>
      <Input
        icon={FiSearch}
        placeholder="Busque por pratos ou ingredientes"
      />
    </Container>
  )
}
