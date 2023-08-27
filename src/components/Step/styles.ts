import { styled } from 'styled-components'

interface SpanProps {
    $active: boolean
}

export const Div = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const Span = styled.span<SpanProps>`
    width: 2.3rem;
    height: 2.3rem;
    border: 1px solid ${props => props.$active ? 'transparent' : props.theme.white};
    border-radius: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: ${props => props.$active ? 'black' : props.theme.white};
    background-color: ${props => props.$active && props.theme.bgActiveStep};

    @media (max-width: 700px) {
        width: calc(.9 * 2.3rem);
        height: calc(.9 * 2.3rem);
    }
`

export const FirstText = styled.p`
    color: ${props => props.theme.subText};
    font-size: .75rem;

    @media (max-width: 700px) {
        font-size: calc(.9 * .75rem);
    }
`

export const SecondText = styled.p`
    color: ${props => props.theme.white};
    font-weight: 500;
    margin-top: .25rem;
    font-size: .9rem;
    white-space: nowrap;

    @media (max-width: 700px) {
        font-size: calc(.9 * .9rem);
    }
`