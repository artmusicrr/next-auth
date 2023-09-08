"use client";
import { FormEvent, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  ConatinerInput,
  ConatinerText,
  Container,
  ContainerGrid,
} from "./styles";

interface CadastroProps {
  email_user: string;
  username: string;
  cpf_user: string;
  password: string;
}

export default function CadastroPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email_user: "",
    cpf_user: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/users/create-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("==", response);
      console.log("==", user, "==");

      if (response.ok) {
        const data = await response.json();
        console.log("=data=", data.access_token);

        console.log("Criado com sucesso!");
      } else {
        console.error("Erro ao criar");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <Container>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <ContainerGrid>
          <ConatinerInput>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
            />
          </ConatinerInput>
          <ConatinerInput>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </ConatinerInput>
          <ConatinerInput>
            <label>E-mail:</label>
            <input
              type="text"
              name="email_user"
              value={user.email_user}
              onChange={handleChange}
            />
          </ConatinerInput>
          <ConatinerInput>
            <label>CPF:</label>
            <input
              type="text"
              name="cpf_user"
              value={user.cpf_user}
              onChange={handleChange}
            />
          </ConatinerInput>
        </ContainerGrid>
        <button type="submit">Criar</button>
      </form>
    </Container>
  );
}
