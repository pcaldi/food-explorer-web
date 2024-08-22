import { Container, Form, Logo } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";

import logoImg from "../../assets/logo.svg"
export function SignUp() {
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
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </Section>

        <Section title="Email">
          <Input
            type="email"
            placeholder="Exemplo: Maria da Silva"
          />
        </Section>

        <Section title="Senha">
          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
          />
        </Section>

        <Button title="Criar conta" />

        <a href="#">Já tenho uma conta</a>
      </Form>

    </Container>
  )
}
