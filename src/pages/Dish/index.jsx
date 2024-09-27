import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";

import { Container, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { QuantityPicker } from "../../components/QuantityPicker";

import foodPlaceholder from "../../assets/food_placeholder.svg";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { USER_ROLES } from "../../utils/roles";

export function Dish() {
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate()

  const isAdmin = [USER_ROLES.ADMIN].includes(user.role);

  function handleBack() {
    navigate(-1)
  }

  function handlePageEdit() {
    navigate(`/edit/${data.id}`);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  },);

  const imageUrl = data?.image ? `${api.defaults.baseURL}/files/${data.image}` : foodPlaceholder;

  return (
    <Container>
      <Header />
      {data &&
        <main>

          <header>
            <ButtonText onClick={handleBack}>
              <FiChevronLeft size={32} />
              voltar
            </ButtonText>
          </header>

          <Content>

            <img src={imageUrl} alt={data?.name || 'Imagem do prato'} />

            <div>
              <h1>{data?.name}</h1>
              <p>{data?.description}</p>

              {data?.ingredients &&
                <section>
                  {
                    data.ingredients.map(ingredient => (
                      <Tag
                        key={String(ingredient.id)}
                        name={ingredient.name}
                      />
                    ))
                  }

                </section>
              }
              {
                isAdmin ?
                  <div className="buttons">
                    <Button title="Editar" onClick={handlePageEdit} />
                  </div>
                  :
                  <div className="buttons">
                    <QuantityPicker />
                    <Button title="incluir" />
                  </div>
              }

            </div>

          </Content>

        </main>
      }
      <Footer />

    </Container>
  )
}
