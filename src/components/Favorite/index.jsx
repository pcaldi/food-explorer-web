/* eslint-disable react/prop-types */
import { Container, Content } from "./styles";

import { api } from "../../services/api";

import foodPlaceholder from "../../assets/food_placeholder.svg";


export function Favorite({ data, removeFavorite }) {

  const foodImage = data.image ?
    `${api.defaults.baseURL}/files/${data.image}`
    : foodPlaceholder;

  return (
    <Container>
      <img src={foodImage} alt={data.name} />
      <Content>
        <h2>{data.name}</h2>
        <button onClick={() => removeFavorite(data.id)} type="button">
          Remover do favorito
        </button>
      </Content>

    </Container>
  )
}
