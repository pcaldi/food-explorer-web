/* eslint-disable react/prop-types */
import { BiPencil } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";

import { Container, Order, IconHeader, Title, Description } from './styles';

import theme from "../../styles/theme"

import { useAuth } from "../../hooks/auth";
import { USER_ROLES } from "../../utils/roles";

import { Button } from "../Button";
import { QuantityPicker } from "../QuantityPicker"

import saladaImg from "../../assets/salada_ravanello.png"

import { useNavigate } from "react-router-dom";

export function FoodCard({ data, isChecked, ...rest }) {

  const { user } = useAuth();

  const isAdmin = [USER_ROLES.ADMIN].includes(user.role);

  const navigate = useNavigate();

  const handlePageEdit = () => {
    navigate(`/edit/${data.id}`);
  }

  const fillHeart = <FiHeart fill={theme.COLORS.GRAY_200} />



  return (
    <Container {...rest}>
      <IconHeader onClick={isAdmin ? handlePageEdit : undefined}>
        {
          isAdmin ? <BiPencil /> : isChecked ? fillHeart : <FiHeart />
        }
      </IconHeader>

      <img src={saladaImg} alt="Imagem de um prato" />

      <Title>
        <h2>{data.title} </h2>
        <FaAngleRight />
      </Title>

      <Description>
        <p>{data.description}</p>
        <span>R$ {data.price}</span>
      </Description>

      {
        !isAdmin &&
        <Order>
          <QuantityPicker />
          <Button title="incluir" />
        </Order>
      }

    </Container >
  );
}
