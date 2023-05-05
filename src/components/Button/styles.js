import styled from 'styled-components';

export const Button = styled.button`
width: 342px;
height: 50px;
margin-top: 10px;
border: none;
background: #D93856;
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
text-align: center;
color: #FFFFFF;
cursor: pointer;

& :hover{
    opacity: 0.8;
}

& :active{
    opacity: 0.5;
}

${props => props.isBack && `
background: rgba(255, 255, 255, 0.14);
margin-top: 30px;
`}

`;