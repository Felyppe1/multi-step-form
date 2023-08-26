import { styled } from "styled-components";

export const GoBackButton = styled.button`
    color: ${props => props.theme.subText};
    cursor: pointer;
    font-size: .9rem;
    font-weight: 600;
    padding: 0.3rem;
    border-radius: 0.2rem;

    &:hover, &:focus {
        color: ${props => props.theme.bgButton};
    }
`