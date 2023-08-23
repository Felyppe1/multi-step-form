import { styled, keyframes } from "styled-components";

interface InputProps {
    isInvalid?: boolean
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5rem 0 1rem 0;
`

export const SubText = styled.p`
    color: ${props => props.theme.subText};
    margin-top: .8rem;
`

export const Form = styled.form`
    margin-top: 2rem;
`
export const LabelDiv = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Label = styled.label`
    font-size: .9rem;
    color: ${props => props.theme.bgButton};
`

const appear = keyframes`
    to {
        opacity: 1;
    }
`

export const Error = styled.span`
    font-size: .9rem;
    font-weight: 500;
    color: ${props => props.theme.errorText};
    opacity: 0;
    animation: ${appear} .2s linear forwards;
`

export const Input = styled.input<InputProps>`
    padding: 0.7rem 0.6rem;
    font-weight: 500;
    border-radius: 0.35rem;
    border: 1px solid ${props => props.isInvalid ? props.theme.errorText :props.theme.subText};
    margin-top: 0.4rem;
    width: 100%;

    &:focus {
        box-shadow: 0 0 0 .6px ${props => props.isInvalid ? props.theme.errorText : props.theme.bgButton};
    }

    &::placeholder {
        color: ${props => props.theme.subText};
    }
`

export const FieldDiv = styled.div`
    margin-top: 1rem
`

export const BottomDiv = styled.div`
    display: flex;
    justify-content: space-between;
`