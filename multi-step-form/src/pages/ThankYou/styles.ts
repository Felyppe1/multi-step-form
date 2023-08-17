import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    max-width: 25rem;
    width: 100%;
`

export const Image = styled.img`
    width: 4.5rem;
`

export const Text = styled.p`
    text-align: center;
    line-height: 1.5;
    color: ${props => props.theme.subText};
`