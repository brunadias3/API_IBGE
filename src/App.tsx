import { useState } from "react";
import { NomeProps } from "./types";
import Nome from "./services/Nome";
import Input from "./components/input";
import Botao from "./components/button";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

function App() {
  const [nome, setNome] = useState("");
  const [response, setResponse] = useState({} as NomeProps);

  function obter() {
    Nome.get(nome)
      .then(r => setResponse(r[0]));
  }

  return (
    <>
      <GlobalStyle />
      <MolduraSld>
        <Header>
          <Input nome={nome} onchange={(e: any) => setNome(e.target.value)} />
          <span onClick={obter}><Botao /></span>
        </Header>
        {response.nome && <TextoSld>Nome: {response.nome}</TextoSld>}
        {response.res && response.res.map((item, index) => (
          <TextoSld key={index}>
            {item.periodo}: {item.frequencia}
          </TextoSld>
        ))}
      </MolduraSld>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #363636;
  }
`
const MolduraSld = styled.div`
    border-radius: 15px;
    border: 2px solid #61dafb;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 600px;
    margin: auto;
    margin-top: 100px; 
`

const TextoSld = styled.span`
  color: #de6113;
  padding: 1.5px;
  padding-left: 50px;
  &:last-child {
    padding-bottom: 25px;
  }
`

const Header = styled.div`
  display: grid;
  grid-template-columns: 400px 70px;
  padding-left: 70px;
`


export default App;
