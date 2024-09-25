import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Content, Empty } from "./styles";

import { FiChevronLeft } from "react-icons/fi";
import foodPlaceholder from "../../assets/food_placeholder.svg";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Favorite } from "../../components/Favorite";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";


export function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchFavorite() {
      try {
        const response = await api.get("/favorites")
        setFavorites(response.data);
      } catch (error) {
        console.log("Error ao buscar favoritos", error);
      }
    }
    fetchFavorite();
  }, [favorites]);

  async function handleRemoveFavorite(dishId) {
    const confirm = window.confirm("Deseja realmente remover o prato?");

    if (confirm) {

      try {
        await api.delete(`/favorites/${dishId}`);

        setFavorites((prevFavorites) =>
          prevFavorites.filter((favorite) => favorite.dish_id !== dishId)
        );
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível excluir o prato.");
        }
      }
    }
  }


  return (
    <Container>
      <Header />
      <main>
        <header>
          <h1>Meus Favoritos</h1>

          <ButtonText onClick={handleBack}>
            <FiChevronLeft />
            voltar
          </ButtonText>
        </header>

        {favorites && favorites.length > 0 ? (
          <Content>
            {favorites.map((data) => (
              <Favorite
                key={data.id}
                data={data}
                removeFavorite={handleRemoveFavorite}
              />
            ))}
          </Content>
        ) : (
          <Empty>
            <img src={foodPlaceholder} alt="Imagem de um prato" />
            <span>Nenhum prato foi favoritado...</span>
          </Empty>
        )}
      </main>
      <Footer />
    </Container>
  );
}
