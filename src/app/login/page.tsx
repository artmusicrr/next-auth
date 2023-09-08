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
  username: string;
  password: string;
}

export default function LoginPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
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
      const response = await fetch(`http://localhost:4000/auth/login`, {
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
        if (data.access_token) {
          localStorage.setItem("authToken", data.access_token);
          console.log("Token armazenado:", data.access_token);
        }

        console.log("Login realizado com sucesso!");
      } else {
        // Tratar erro no login
        console.error("Erro ao realizar login");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <ContainerGrid>
          <ConatinerInput>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </ConatinerInput>
        </ContainerGrid>
        <button type="submit">Login</button>
      </form>
    </Container>
  );
}
