import styled from "styled-components";

export const ContainerItens = styled.div`
height: 100%;
min-height: calc(100vh - 310px);
padding: 7px 36px 11px 36px;
display: flex;
flex-direction: column;

${props => props.isMinHeight && `
min-height: calc(100vh - 275px);
padding: 0px 36px 11px 36px;

`}
`;