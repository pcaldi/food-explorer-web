/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import { BiPencil } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";

import { Container, Order, IconHeader, Title, Description, Content } from './styles';
import theme from "../../styles/theme";
import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";
import { USER_ROLES } from "../../utils/roles";

import { Button } from "../Button";
import { QuantityPicker } from "../QuantityPicker";

import foodPlaceholder from "../../assets/food_placeholder.svg";

export function FoodCard({ data, isFavorite, updateFavorite, ...rest }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = [USER_ROLES.ADMIN].includes(user.role);

  const foodImage = data.image ?
    `${api.defaults.baseURL}/files/${data.image}`
    : foodPlaceholder;

  // Função para editar página (apenas para Admin)
  function handlePageEdit() {
    navigate(`/edit/${data.id}`);
  }

  async function handleFavorite() {
    try {
      if (isFavorite) {
        updateFavorite(true, data.id);
      } else {
        updateFavorite(false, data.id);
      }
    } catch (error) {
      console.log('Erro ao atualizar favoritos:', error);
    }
  };

  return (
    <Container>
      <IconHeader onClick={isAdmin ? handlePageEdit : handleFavorite}>
        {
          isAdmin
            ?
            <BiPencil />
            :
            <FiHeart
              fill={isFavorite ? theme.COLORS.GRAY_100 : undefined}
            />
        }
      </IconHeader>

      <Content {...rest}>
        <img src={foodImage} alt={data.image} />

        <Title>
          <h2>{data.name}</h2>
          <FaAngleRight />
        </Title>

        <Description>
          <p>{data.description}</p>
          <span>R$ {data.price}</span>
        </Description>
      </Content>

      {!isAdmin && (
        <Order>
          <QuantityPicker />
          <Button title="incluir" />
        </Order>
      )}
    </Container>
  );
}
