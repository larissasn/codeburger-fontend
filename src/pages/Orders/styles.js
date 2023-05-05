import styled from "styled-components";

export const Container = styled.div`
height: 100%;
min-height: 100vh;
background: #0A0A10;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
`;

export const Image = styled.img`
margin-top: 10px;
height: 250px;
width: 175px;
`;

export const Order = styled.li`
display: flex;
justify-content: space-around;
align-items: center;

width: 342px;
height: 90px;
margin-bottom: px;
margin-top: 10px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
outline: none;


div{
width: 219px;
height: 50px;
display: flex;
flex-direction: column;
align-items: left;
}

p{
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
margin-bottom: 10px;
}

h3{
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;

}

button{
background:none;
border: none;
cursor: pointer;
}

`;