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

export const ReviewDiv = styled.div`
    background-color: ${props => props.theme.bgActiveChoices};
    padding: 1.5rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const BaseDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PlanDiv = styled(BaseDiv)`
    & p {
        font-weight: bold;
    }
`

export const NavChange = styled(NavLink)`
    color: ${props => props.theme.subText};
    font-size: .9rem;
    text-decoration: underline;

    &:hover {
        color: ${props => props.theme.bgButton};
    }
`

export const AddsOnDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0 0.5rem 0;
    border-top: 1px solid #0000001a;
`

export const ItemText = styled.p`
    color: ${props => props.theme.subText};
    font-size: .9rem;
`

export const PriceText = styled.p`
    font-size: .8rem;
    font-weight: 500;
`

export const TotalDiv = styled(BaseDiv)`
    padding: 1.5rem;
`

export const TotalText = styled.p`
    color: ${props => props.theme.totalPriceText};
    font-size: 1.2rem;
    font-weight: bold;
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

export const ConfirmButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 6.5rem;
    background-color: ${props => props.theme.totalPriceText};
    color: white;
    border-radius: 0.4rem;
    font-size: 1rem;
    cursor: pointer;

    &:hover, &:focus {
        background-color: ${props => props.theme.hoverButton};
    }
`