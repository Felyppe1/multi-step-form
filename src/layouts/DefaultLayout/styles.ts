import { styled } from "styled-components";
import Image from '/images/bg-sidebar-desktop.svg'

export const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

export const Background = styled.div`
    display: none;

    @media (max-width: 600px) {
        background-image: url(${Image});
        background-size: cover;
        background-position: bottom;
        background-position-y: 14rem;
        width: 100%;
        height: 13rem;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        padding-top: 2.5rem;
    }
`

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: ${props => props.theme.white};
    border-radius: 1rem;
    width: 85%;
    max-width: 60rem;
    min-height: 28rem;

    @media (max-width: 680px) {
        width: 93%;
    }

    @media (max-width: 600px) {
        translate: 0 -6rem;
    }
`

export const StepsDiv = styled.div`
    background-image: url(${Image});
    width: 100%;
    max-width: 29%;
    min-width: 14rem;
    height: 100vh;
    max-height: 35rem;
    background-size: cover;
    background-position: center;
    border-radius: .6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    padding: 2rem 1rem;

    @media (max-width: 600px) {
        display: none;
    }
`

export const StepsSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`