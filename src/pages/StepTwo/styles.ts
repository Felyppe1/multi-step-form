import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

interface GearButtonProps {
    checked?: boolean
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
    gap: 2rem;
`

export const FormFirstSection = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Input = styled.input`
    display: none;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    border-radius: 0.35rem;
    border: 1px solid ${props => props.theme.subText};
    width: 7.5rem;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        box-shadow: 0 0 0 .6px ${props => props.theme.bgButton};
    }

    input:checked + & {
        background-color: ${props => props.theme.bgActiveChoices};
        box-shadow: 0 0 0 .6px ${props => props.theme.bgButton};
    }
`

export const Icon = styled.img`
    height: 2rem;
    align-self: flex-start;
`

export const PlanName = styled.p`
    font-weight: 600;
    font-size: .9rem;
`

export const PlanValue = styled.p`
    font-size: .8rem;
    color: ${props => props.theme.subText};
    margin-top: .3rem;
`

export const MonthsFree = styled.p`
    color: ${props => props.theme.text};
    font-size: .75rem;
    margin-top: .3rem;
`

export const FormSecondSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    background-color: ${props => props.theme.bgActiveChoices};
    border-radius: 0.35rem;
    height: 2.5rem;
`

export const PaymentInput = styled.input`
    display: none;

    &:checked ~ label {
        color: ${props => props.theme.text};
    }
`

export const PaymentLabel = styled.label`
    color: ${props => props.theme.subText};
    font-weight: 600;
    font-size: .9rem;
    cursor: pointer;
    transition: color .1s;
`

export const GearButton = styled.button<GearButtonProps>`
    background-color: ${props => props.theme.bgButton};
    border-radius: 1rem;
    width: 2rem;
    height: 1rem;
    padding: 0 .2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;

    &::before {
        content: '';
        background-color: ${props => props.theme.white};
        display: block;
        height: .7rem;
        width: .7rem;
        border-radius: 50%;
        position: absolute;
        transition: translate .1s linear;
        translate: ${props => props.checked ? '0.9rem' : '0'};
    }
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