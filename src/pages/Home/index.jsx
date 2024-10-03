<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

=======
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
import { Container, Dishes } from "./styles";

import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Section } from "../../components/Section";
import { FoodCard } from "../../components/FoodCard";

import { api } from "../../services/api";

export function Home() {

<<<<<<< HEAD
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();


  function handleDishDetail(id) {
    navigate(`/dish/${id}`);
=======
  const data = {
    "name": "Salada Ravanello",
    "description": "Uma salada com carne seca, cenoura, tomate, alface, azeitona e orégano.",
    "price": "48.90"
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
  }


  useEffect(() => {
    async function fetchDishes() {

      const response = await api.get(`/dishes?name=${search}&ingredients=${search}`);
      setDishes(response.data);
    }

    fetchDishes();
  }, [search]);

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const response = await api.get("/favorites");
        const favorites = response.data.map((favorite) => favorite.dish_id);
        setFavorites(favorites);
      } catch (error) {
        console.log("Erro ao buscar favoritos:", error);
      }
    };
    fetchFavorites();
  }, []);

  async function updateFavorite(isFavorite, dishId) {
    try {
      if (isFavorite) {
        await api.delete(`/favorites/${dishId}`);
        setFavorites((prevFavorites) =>
          prevFavorites.filter((favorite) => favorite !== dishId)
        );
      } else {
        await api.post('/favorites', { dish_id: dishId });
        setFavorites((prevFavorites) => [...prevFavorites, dishId]);
      }
    } catch (error) {
      console.log('Erro ao atualizar favoritos:', error);
    }
  };

  return (
    <Container>
      <Header setSearch={setSearch} />

      <main>
        <Banner />

        <Dishes>
          <Section name="Refeição">
            <Slider >
              {
                dishes.filter(dish => dish.category == 'meal')
                  .map((dish) => (
                    <FoodCard
                      key={String(dish.id)}
                      data={dish}
                      onClick={() => handleDishDetail(dish.id)}
                      isFavorite={favorites.includes(dish.id)}
                      updateFavorite={updateFavorite}
                    />
                  ))
              }
            </Slider>
          </Section>

          <Section name="Bebidas">
            <Slider >
              {
                dishes.filter(dish => dish.category == 'drink')
                  .map((dish) => (
                    <FoodCard
                      key={String(dish.id)}
                      data={dish}
                      onClick={() => handleDishDetail(dish.id)}
                      isFavorite={favorites.includes(dish.id)}
                      updateFavorite={updateFavorite}
                    />
                  ))
              }
            </Slider>
          </Section>

          <Section name="Sobremesas">
            <Slider>
              {
                dishes.filter(dish => dish.category == 'dessert')
                  .map((dish) => (
                    <FoodCard
                      key={String(dish.id)}
                      data={dish}
                      onClick={() => handleDishDetail(dish.id)}
                      isFavorite={favorites.includes(dish.id)}
                      updateFavorite={updateFavorite}
                    />
                  ))
              }
            </Slider>
          </Section>
        </Dishes>



      </main>

      <Footer />
    </Container >
  )
}
