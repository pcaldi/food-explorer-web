import { useState } from "react";

import { Container, Form, Logo } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";

import logoImg from "../../assets/logo.svg"

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();


  function handleSignIn() {
    signIn({ email, password })

  }

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Logo da empresa" />
      </Logo>

      <Form>
        <h2>Faça seu login</h2>

        <Section name="Email">
          <Input
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Section>

        <Section name="Senha">
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Section>

        <Button
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>

    </Container>
  )
}
