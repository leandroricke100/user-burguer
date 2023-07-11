import React, { useState, useEffect } from "react";
import axios from "axios";
import Bag from "../../assets/imgBack.png";
import Trash from '../../assets/trash.svg';
import { useNavigate } from "react-router";

import H1 from '../../componentes/title'
import ContainerItens from "../../componentes/containerItens";
import Button from "../../componentes/button";

import {
  Container,
  Image,
  OrderItens,
  Order,
  ImgTrash
} from "./style";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();


  useEffect (()=> {
    async function fetchOrders (){

      const {data : newOrders } = await axios.get("http://localhost:3001/orders")

      setOrders(newOrders)
    }
    fetchOrders ()
  },[])
  

   async function deleteOrder(orderId) {
      await axios.delete(`http://localhost:3001/orders/${orderId}`)
    const newOrders = orders.filter(order => order.id !== orderId)
    setOrders(newOrders)
  }

  function goBackPage(){
    navigate("/");
  }

  return (

    <Container>
      <Image alt="logo-hambuguer" src={Bag} />
      <ContainerItens>
        <H1>Pedidos</H1>


        <Order>
          {orders.map((order) => (

            <OrderItens key={order.id}>
              <div>
                <p className="classOrder">{order.order}</p>
                <p className="className">{order.name}</p>
              </div>
              <div onClick={() => deleteOrder(order.id)}>
                <ImgTrash src={Trash} alt="lata-de-lixo" />
              </div>
            </OrderItens>
          ))}
        </Order>
        <Button isback="{true}" onClick={goBackPage}>Voltar</Button>

      </ContainerItens>
    </Container>

  )

}

export default Orders