import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptoMoneda from "../hooks/useCriptoMoneda";
import axios from "axios";
import Error from "./Error";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const MONEDAS = [
  { codigo: "USD", nombre: "Dolar de Estados Unidos" },
  { codigo: "MXN", nombre: "Peso Mexicano" },
  { codigo: "EUR", nombre: "Euro" },
  { codigo: "GBP", nombre: "Libra Esterlina" },
];

const Formulario = ({ setMoneda, setCriptomoneda }) => {
  const [listaCripto, setListaCripto] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useMoneda("Elige tu moneda", "", MONEDAS);
  const [criptomoneda, SelectCripto] = useCriptoMoneda(
    "Elige tu Criptomoneda",
    "",
    listaCripto
  );

  //Traer datos de la api
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);
      setListaCripto(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  //validar formulario
  const cotizarMoneda = (e) => {
    e.preventDefault();
    if (moneda === "" || criptomoneda === "") {
      setError(true);
      return;
    }

    //Pasar los datos al componente principal
    setError(false);
    setMoneda(moneda);
    setCriptomoneda(criptomoneda);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <SelectMonedas />
      <SelectCripto />
      <Boton type="submit" value="calcular" />
    </form>
  );
};

export default Formulario;
