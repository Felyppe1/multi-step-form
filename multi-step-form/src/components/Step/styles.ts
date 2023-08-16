import { styled } from 'styled-components'

interface SpanProps {
    active: boolean
}

export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const Span = styled.span<SpanProps>`
    width: 2rem;
    height: 2rem;
    border: 1px solid ${props => props.theme.white};
    border-radius: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.active ? 'black' : props.theme.white};
    ${props => props.active && `background-color:` + props.theme.bgActiveStep};
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