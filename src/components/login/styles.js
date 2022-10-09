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
    background-color: white;
    width: 35%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    opacity: 85%;
    border-radius: 5%;
}
>div.containerLogin > a {
    text-decoration: none;
    color: black;
    &:hover{
        filter: brightness(0.9);
}
`
export const Input = styled.input`
border: none;
width: 70%;
background-color: black;
border-radius: 15px;
padding: 4%;
font-size: 115%;
color: white;
&::placeholder{
    color: white;
}`

export const Button = styled.button`
width: 70%;
padding: 3%;
font-size: 150%;
border-radius: 15px;
border: none;
font-weight: bolder;
background-color: #8d5c9b;
&:hover{
    background-color: #dd4b7d;
    transition: all 0.3s ease;
}
`