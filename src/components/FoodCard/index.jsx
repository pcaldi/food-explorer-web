/* eslint-disable react/prop-types */
import { BiPencil } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";

import { Container, Order, IconHeader, Title, Description } from './styles';

import theme from "../../styles/theme"

import { QuantityPicker } from "../QuantityPicker"
import { Button } from "../Button";

import saladaImg from "../../assets/salada_ravanello.png"

export function FoodCard({ data, isAdmin, isChecked, ...rest }) {

  const fillHeart = <FiHeart fill={theme.COLORS.GRAY_200} />

  return (
    <Container {...rest}>
      <IconHeader>
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

      {!isAdmin &&
        <Order>
          <QuantityPicker />
          <Button title="incluir" />
        </Order>
      }

    </Container>
  );
}
