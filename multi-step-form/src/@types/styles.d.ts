import 'styled-components'
import { DefaultTheme } from '../styles/themes/DefaultTheme' //Retorna a tipagem do DefaultTheme (vamos guardar em uma variável)

type ThemeType = typeof DefaultTheme

//Criando uma tipagem para o módulo styled-components:
//Se não tivesse importado o styled-components, estariamos sobrescrevendo as definições de tipos do styled-components

declare module 'styled-components' { 
    export interface DefaultTheme extends ThemeType {}
} 