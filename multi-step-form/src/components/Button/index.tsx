import { ButtonStyle } from "./styles"

interface ButtonProps {
    children: React.ReactNode
    type?: 'button' | 'submit' | 'reset'
}

export function Button({ children, type='button' }: ButtonProps) {
    return <ButtonStyle type={type}>{ children }</ButtonStyle>
}