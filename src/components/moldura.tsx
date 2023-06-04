import React from 'react'
import styled from 'styled-components'

export default function Moldura(children:any) {
  return (
    <div>{children}</div>
  )
}

const MolduraSld = styled.div`
    border-radius: 5px;
    border-color: ##61dafb
`