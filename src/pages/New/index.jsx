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

import { api } from "../../services/api";

export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

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

  function handleImageChange(event) {
    const file = event.target.files[0]
    setImage(file);
    setImageFile(file.name);
  }

  function formatPrice(value) {
    let price = parseFloat(value.replace(",", "."));

    if (!isNaN(price)) {
      return price.toFixed(2); // Formata para 4 casas decimais
    } else {
      return ""; // Retorna string vazia se o valor não for um número
    }
  }

  function handlePriceChange(e) {
    setPrice(e.target.value); // Atualiza o valor enquanto o usuário digita
  }

  function handlePriceBlur() {
    const formattedPrice = formatPrice(price); // Aplica a formatação ao perder o foco
    setPrice(formattedPrice);
  }



  async function handleNewDish() {

    if (!name || !price || !category || !description || tags.length === 0) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    if (!image) {
      alert("Por favor, escolha uma imagem para o prato!");
      return;
    }

    const formData = new FormData();

    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("ingredients", JSON.stringify(tags));

    try {
      await api.post("/dishes", formData)

      alert("Prato cadastrado com sucesso!");
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Ocorreu um erro ao cadastrar o prato.");
      }
    }
  }


  return (
    <Container>
      <Header />
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
            <Section name="Imagem do prato">
              <Image>
                <label htmlFor="image">
                  <FiUpload />
                  <span>{imageFile || "Selecione imagem"}</span>
                  <input
                    id="image"
                    type="file"
                    onChange={handleImageChange}
                  />
                </label>

              </Image>

            </Section>

            <Section name="Nome">
              <Input
                className="name"
                placeholder="Ex.: Salada Caesar"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Section>

            <Section name="Categoria">
              <Category>
                <label htmlFor="category">
                  <select
                    id="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                  >
                    <option value="">Selecione uma categoria</option>
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
            <Section name="Ingredientes" >
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

            <Section name="Preço" >
              <div className="wrapper-price">
                <Input
                  className="price"
                  placeholder="R$ 00,00"
                  value={price}
                  onChange={handlePriceChange}
                  onBlur={handlePriceBlur}
                />
              </div>
            </Section>
          </div>


          <Section name="Descrição">
            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              defaultValue={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Section>


          <div className="btn">
            <Button
              title="Salvar alterações"
              onClick={handleNewDish}
            />
          </div>


        </Form>
      </main>



      <Footer />

    </Container>
  )
}
