import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Burger from "../../assets/burger.svg";
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'
import { Container, Image, InputLabel, Input, } from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewUOrder() {

    const { data: newOrder } = await axios.post('http://localhost:3001/orders', { order: inputOrder.current.value, clientName: inputName.current.value });


    setOrders([...orders, newOrder])

    navigate('/orders');
  }

  return (
    <Container>
      <Image alt="logo-img" src={Burger} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Nome"></Input>
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>
        <Button onClick={addNewUOrder} >Novo Pedido</Button>
      </ContainerItens>
    </Container>

  );

}
export default App;
