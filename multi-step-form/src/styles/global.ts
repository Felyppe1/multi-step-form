import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
        color: ${props => props.theme.bgButton};
        outline: none;
        border: none;
    }
`