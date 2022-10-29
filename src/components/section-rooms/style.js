import styled from "styled-components";

export const RoomsWrapper=styled.div`
 .gridContainer{
    margin: 30px 0px;
    display: grid;
    grid-template-columns: repeat(${props => props.gridNum},1fr);
    grid-gap: 20px;
    grid-template-rows: auto auto;
  }
`