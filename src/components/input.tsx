import styled from "styled-components"

export default function Input({nome,onchange}:any) {
  return (
    <InputSld placeholder="primeiro nome" value={nome} onChange={onchange} />
  )
}

const InputSld = styled.input`
    border-radius: 5px;
    border-style: solid;
    border: none;
    background-color: white;
    width: 400px;
    height: 29px;
    margin: 25px -20px;
    padding-left: px;
`
