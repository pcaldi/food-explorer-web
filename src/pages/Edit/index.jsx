import { useNavigate } from "react-router-dom";

import { Container, Form, Items, Image, Category } from "./styles";

import { FoodItem } from "../../components/FoodItem";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { ButtonText } from "../../components/ButtonText";
import { FiChevronDown, FiChevronLeft, FiUpload } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Edit() {

  const navigate = useNavigate();

  function handleBack() {
    navigate("/")
  }

  return (
    <Container>
      <Header isAdmin />
      <main>
        <Form>
          <header>
            <ButtonText onClick={handleBack}>
              <FiChevronLeft />
              voltar
            </ButtonText>

            <h1>Editar prato</h1>
          </header>

          <Items>
            <Section title="Imagem do prato">
              <Image>
                <label htmlFor="image">
                  <FiUpload />
                  <span>Selecione imagem</span>
                </label>
              </Image>

            </Section>

            <Section title="Nome">
              <Input className="name" placeholder="Ex.: Salada Caesar" />
            </Section>

            <Section title="Categoria">
              <Category>
                <label htmlFor="category">
                  <select id="category">
                    <option value="meal">Refeição</option>
                    <option value="drink">Bebidas</option>
                    <option value="dessert">Sobremesa</option>
                  </select>

                  <FiChevronDown />
                </label>
              </Category>
            </Section>
          </Items>

          <div className="ing-price">
            <Section title="Ingredientes">
              <div className="tags">
                <FoodItem placeholder="Pão Naann" />
                <FoodItem placeholder="Adicionar" isNew />
              </div>
            </Section>

            <Section title="Preço">
              <Input className="price" placeholder="R$ 00,00" />
            </Section>
          </div>


          <Section title="Descrição">
            <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </Section>


          <div className="btn">
            <Button title="Excluir Prato" />
            <Button title="Salvar alterações" />
          </div>


        </Form>
      </main>



      <Footer />

    </Container>
  )
}
