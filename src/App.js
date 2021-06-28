import React from "react";
import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png";
import Formulario from "./components/Formulario";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 50%;
  margin-top: 3rem;
`;
const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;
function App() {
  return (
    <Contenedor>
      <Imagen src={imagen} alt="imagen cripto" />
      <div>
        <Heading>Cotiza al instante</Heading>
        <Formulario />
      </div>
    </Contenedor>
  );
}

export default App;
