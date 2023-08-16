import { styled } from "styled-components";
import Image from '/images/bg-sidebar-desktop.svg'

export const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Main = styled.main`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: ${props => props.theme.white};
    border-radius: 1rem;
    width: 75%;
    max-width: 60rem;
`

export const StepsDiv = styled.div`
    background-image: url(${Image});
    width: 100%;
    max-width: 17rem;
    height: 100vh;
    max-height: 35rem;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    padding: 2rem 1rem;
`

export const StepsSubDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`