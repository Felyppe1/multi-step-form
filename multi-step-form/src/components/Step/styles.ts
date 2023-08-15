import { styled } from 'styled-components'

export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const Span = styled.span`
    width: 2rem;
    height: 2rem;
    border: 1px solid ${props => props.theme.white};
    border-radius: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.white};
`

export const FirstText = styled.p`
    color: ${props => props.theme.subText};
    font-size: .8rem;
`

export const SecondText = styled.p`
    color: ${props => props.theme.white};
    font-weight: 500;
    margin-top: .2rem;
`