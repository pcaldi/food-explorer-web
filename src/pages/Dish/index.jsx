
import { useNavigate, useParams } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";

import { Container, Content } from "./styles";

import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { QuantityPicker } from "../../components/QuantityPicker";

import dishImg from "../../assets/salada_ravanello.png"

import { useAuth } from "../../hooks/auth";
import { USER_ROLES } from "../../utils/roles";

export function Dish() {

  const navigate = useNavigate()
  const { data } = useParams();
  const { user } = useAuth();

  const isAdmin = [USER_ROLES.ADMIN].includes(user.role);

  function handleBack() {
    navigate("/")
  }

  const handlePageEdit = () => {
    navigate(`/edit/${data.id}`);
  }



  return (
    <Container>
      <Header />
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

      <Footer />

    </Container>
  )
}
