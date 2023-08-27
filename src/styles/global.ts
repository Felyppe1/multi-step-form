import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
        color: ${props => props.theme.text};
        outline: none;
        border: none;
        text-decoration: none;
    }

    body, button, input, textarea { 
        font-size: 1rem; //Coloco nesses porque se colocar no *, vai afetar os titles também
    }
    
    button {
        background-color: transparent;
    }

    h1 {
        color: ${props => props.theme.bgButton};
    }
    
    @media (max-width: 700px) {
        html {
            font-size: 90%;
        }
    }

    @media (max-width: 400px) {
        html {
            font-size: 86%;
        }
    }
`