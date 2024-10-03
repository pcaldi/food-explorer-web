import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

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

export function Edit() {
  const [dish, setDish] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();
  const params = useParams();

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

  function formatPrice(value) {
    let price = parseFloat(value.replace(",", "."));

    // Verifica se o valor é numérico
    if (!isNaN(price)) {
      return price.toFixed(2).replace(".", ","); // Retorna o valor formatado como 2 casas decimais
    }

    // Caso o valor não seja numérico, retorna o valor original
    return value;
  }

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }

  function handlePriceBlur() {
    // Formata o preço quando o input perde o foco
    const formattedPrice = formatPrice(price);
    setPrice(formattedPrice); // Atualiza o valor formatado
  }



  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setDish(response.data)
    }
    fetchDish();
  }, [params.id]);

  useEffect(() => {
    if (dish) {
      setImage(dish.image);
      setName(dish.name);
      setCategory(dish.category);
      setPrice(dish.price);
      setDescription(dish.description);

      const allIngredients = dish.ingredients.map((ingredient) => ingredient.name);
      setTags(allIngredients);
    }
  }, [dish]);


  function handleImageChange(event) {
    const file = event.target.files[0]
    setImage(file);
    setImageFile(file.name);
  }


  async function handleEditDish() {
    if (!image) {
      return alert("Selecione a imagem do prato.");
    }

    if (!name) {
      return alert("Digite o nome do prato.");
    }

    if (!category) {
      return alert("Selecione a categoria do prato.");
    }

    if (tags.length === 0) {
      return alert("Informe pelo menos um ingrediente do prato.");
    }

    if (newTag) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    if (!price) {
      return alert("Digite o preço do prato.");
    }

    if (!description) {
      return alert("Digite a descrição do prato.");
    }


    try {
      const updatedDish = {
        name,
        category,
        price,
        description,
        ingredients: tags,
      };

      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        await api.put(`/dishes/${params.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      await api.put(`/dishes/${params.id}`, updatedDish);

      alert("Prato atualizado com sucesso!");
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o prato.");
      }
    }
  }

  async function handleRemoveDish() {
    const confirm = window.confirm("Deseja realmente remover o prato?");

    if (confirm) {

      try {
        await api.delete(`/dishes/${params.id}`);
        navigate("/");
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
            <Section name="Ingredientes">
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

            <Section name="Preço">
              <Input
                className="price"
                placeholder="R$ 00,00"
                value={price}
                onChange={handlePriceChange}
                onBlur={handlePriceBlur}
              />
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
              title="Excluir"
              onClick={handleRemoveDish}
            />
            <Button
              title="Salvar"
              onClick={handleEditDish}
            />
          </div>



        </Form>
      </main>



      <Footer />

    </Container>
  )
}
