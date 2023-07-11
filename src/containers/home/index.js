import React, { useState, useRef } from "react";
import axios from "axios";
import Hambuguer from "../../assets/imgFront.png";
import { useNavigate } from "react-router";

import H1 from "../../componentes/title";
import ContainerItens from "../../componentes/containerItens";
import Button from "../../componentes/button";

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./style";

function App() {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();
  const navigate = useNavigate();



  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3001/orders", {
      order: inputOrder.current.value,
      name: inputName.current.value
    })
    setOrders([
      ...orders, newOrder]);

    navigate("/orders");

  }

  return (

    <Container>
      <Image alt="logo-hambuguer" src={Hambuguer} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Ex: 1 X-Tudo, 1 Coca-Cola 2L" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Steve Jobs" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>

      </ContainerItens>
    </Container>

  )

}

export default App