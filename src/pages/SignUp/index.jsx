import { useState } from "react";

import { Container, Form, Logo } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";

import logoImg from "../../assets/logo.svg"

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
export function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    await api.post("/users", { email, name, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate(-1);
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Ocorreu um erro ao realizar o cadastro.");
        }
      });
  }

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Logo da empresa" />
      </Logo>

      <Form>
        <h2>Crie sua conta</h2>

        <Section title="Seu Nome">
          <Input
            type="text"
            placeholder="Exemplo: Maria da Silva"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Section>

        <Section title="Email">
          <Input
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Section>

        <Section title="Senha">
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Section>

        <Button
          title="Criar conta"
          onClick={handleSignUp}
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>

    </Container>
  )
}
