import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url('https://acegif.com/wp-content/uploads/gif/outerspace-6.gif');
background-size: cover;
background-repeat: no-repeat;
positiion: relative;
display: flex;
justify-content: center;
align-items: center;
>div{
    background: black;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 64%;
    position: absolute;
}
>div.containerLogin{
    background-color: black;
    width: 35%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    opacity: 75%;
    border-radius: 5%;
    border: 1px solid;
    box-shadow: 5px 5px 18px white;
}
>div.containerLogin >h1{
    color:white;
}
>div.containerLogin > a {
    text-decoration: none;
    color: white;
    &:hover{
        filter: brightness(0.9);
}
`
export const ContainerInputs = styled.div`
position: relative;
width: 100%;
text-align: center;
>svg{
    font-size: 31px;
    color: black;
    position: absolute;
    display: block;
    margin: 3% 0 0 17%;
}`

export const Input = styled.input`
border: none;
width: 70%;
background-color: white;
border-radius: 15px;
padding: 4% 4% 4% 10%;
font-size: 115%;
color: black;
&::placeholder{
    color: black;
}`

export const Button = styled.button`
width: 70%;
padding: 2%;
font-size: 150%;
border-radius: 15px;
border: none;
font-weight: bolder;
background-color: #8d5c9b;
border: 6px solid #8d5c9b;
&:hover{
    background-color: #dd4b7d;
    transition: all 0.3s ease;
    border: 6px solid #8d5c9b;
}
`
