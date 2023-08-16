import { styled } from "styled-components";

export const ButtonStyle = styled.button`
    height: 2.5rem;
    width: 6.5rem;
    background-color: ${props => props.theme.bgButton};
    color: white;
    border-radius: 0.4rem;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.hoverButton};
    }
`