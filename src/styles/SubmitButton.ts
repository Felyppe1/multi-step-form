import { styled } from "styled-components";

export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 6.5rem;
    background-color: ${props => props.theme.bgButton};
    color: white;
    border-radius: 0.4rem;
    font-size: 1rem;
    cursor: pointer;

    &:hover, &:focus {
        background-color: ${props => props.theme.hoverButton};
    }
`