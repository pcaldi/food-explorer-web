/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";

import { Container, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { QuantityPicker } from "../../components/QuantityPicker";

import dishImg from "../../assets/salada_ravanello.png"
import { Button } from "../../components/Button";

export function Dish({ isAdmin }) {

  const navigate = useNavigate()

  function handleBack() {
    navigate("/")
  }

  function handleNextPage() {
    navigate("/edit")
  }


  return (
    <Container>
      <Header isAdmin />
      <main>

        <header>
          <ButtonText onClick={handleBack}>
            <FiChevronLeft size={32} />
            voltar
          </ButtonText>
        </header>

        <Content>

          <img src={dishImg} alt="Imagem do prato" />

          <div>
            <h1>Salada Ravanello</h1>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

            <section>
              <Tag title="Alface" />
              <Tag title="Cebola" />
              <Tag title="Pão naan" />
              <Tag title="Rabanete" />
              <Tag title="Pepino" />
              <Tag title="Tomate" />

            </section>

            {isAdmin ?
              <div className="buttons">

                <QuantityPicker />
                <Button title="incluir" />
              </div>
              :
              <div className="buttons">
                <Button title="Editar" onClick={handleNextPage} />
              </div>
            }

          </div>

        </Content>

      </main>

      <Footer />

    </Container>
  )
}
