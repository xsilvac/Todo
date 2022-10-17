import styled from "styled-components";

// export const ContainerSidebar = styled.div`
// .hidden {width: 240px;
// height: 100vh;
// background:red;}`

export const ContainerUl = styled.ul`
padding: 15px 0 0 15px;
list-style: none;`

export const ContainerLogo = styled.div`
text-align:start;
margin: 0;
> svg {
    height: 30px;
    width:30px;
    font-size: 50px;
    cursor pointer;
};`

export const ContainerLi = styled.li`
text-align:start;
margin-top:16px;
font-size: 22px;
display: flex;

>h2{
    font-size: 22px;
    margin: 5px 0 0 10px;
}
> svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
    padding: 2px;
    &:hover{
        border: 1px solid gray;
        border-radius: 5px;
    }
}
`

