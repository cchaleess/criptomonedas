import { Fragment, useState } from "react";
import React from "react";
import styled from "@emotion/styled";
const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;
const useMoneda = (label, stateInicial, MONEDAS) => {
  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => actualizarState(e.target.value)}>
        <option>--Seleccione--</option>
        {MONEDAS.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, Seleccionar, actualizarState];
};
export default useMoneda;
