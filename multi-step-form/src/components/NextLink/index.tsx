import { NavLinkStyle } from "./styles"

interface NextLinkProps {
    children: React.ReactNode
    to: string
}

export function NextLink({ children, to }: NextLinkProps) {
    return <NavLinkStyle to={to}>{ children }</NavLinkStyle>
}