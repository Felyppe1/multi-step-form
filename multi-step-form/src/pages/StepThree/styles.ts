import { styled } from "styled-components";
import { NavLink } from "react-router-dom";


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
    max-width: 25rem;
    width: 100%;
`

export const Title = styled.h1`

`

export const SubText = styled.p`
    color: ${props => props.theme.subText};
    margin-top: .8rem;
`

export const Form = styled.form`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const FieldDiv = styled.div`
    display: flex;
    gap: 1.25rem;
`

export const Label = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 1rem;
    border-radius: 0.35rem;
    border: 1px solid ${props => props.theme.subText};
    cursor: pointer;
`

export const StyledCheckbox = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid ${props => props.theme.subText};
    border-radius: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    display: none;

    &:checked ~ ${Label} {
        background-color: ${props => props.theme.bgActiveChoices};
        box-shadow: 0 0 0 .6px ${props => props.theme.bgButton};
    }

    &:checked ~ ${Label} ${StyledCheckbox} {
        background-color: ${props => props.theme.bgActiveCheckbox};
    }
`

export const FieldWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 7%;
    flex: 1%;
`

export const FirstText = styled.p`
    font-weight: 500;
`

export const SecondText = styled.p`
    font-size: .85rem;
    color: ${props => props.theme.subText};
    margin-top: 0.25rem;
`

export const PriceText = styled.p`
    color: ${props => props.theme.addsOnPriceText};
`


export const BottomDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const GoBackLink = styled(NavLink)`
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