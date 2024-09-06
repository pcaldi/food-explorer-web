import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FiChevronDown, FiChevronLeft, FiUpload } from "react-icons/fi";

import { Container, Form, Items, Image, Category } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { FoodItem } from "../../components/FoodItem";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate("/")
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }


  return (
    <Container>
      <Header isAdmin />
      <main>
        <header>
          <ButtonText onClick={handleBack}>
            <FiChevronLeft />
            voltar
          </ButtonText>

          <h1>Adicionar prato</h1>
        </header>
        <Form>

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
                {
                  tags.map((tag, index) => (
                    <FoodItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }
                <FoodItem
                  isNew
                  placeholder="Adicionar"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
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
            <Button title="Salvar alterações" />
          </div>


        </Form>
      </main>



      <Footer />

    </Container>
  )
}
