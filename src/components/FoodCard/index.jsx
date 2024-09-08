/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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


export function FoodCard({ data, ...rest }) {
  const [isChecked, setIsChecked] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const isAdmin = [USER_ROLES.ADMIN].includes(user.role);
  const fillHeart = <FiHeart fill={theme.COLORS.GRAY_200} />


  function handlePageEdit() {
    navigate(`/edit/${data.id}`);
  }

  function handleToggleCheck() {
    setIsChecked(!isChecked);
  }




  return (
    <Container {...rest}>
      <IconHeader onClick={isAdmin ? handlePageEdit : handleToggleCheck}>
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
