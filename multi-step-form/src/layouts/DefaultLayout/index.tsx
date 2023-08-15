import { Outlet } from 'react-router-dom'
import { Container, Main, StepsDiv } from './styles'
import { Step } from '../../components/Step'
// import Image from '/images/bg-sidebar-desktop.svg'

export function DefaultLayout() {
    return (
        <Container>
            <Main>
                <StepsDiv>
                    <Step step='1' text1='ETAPA 1' text2='SUAS INFORMAÇÕES' />
                    <Step step='2' text1='ETAPA 2' text2='SELECIONE O PLANO' />
                    <Step step='3' text1='ETAPA 3' text2='ADICIONAIS' />
                    <Step step='4' text1='ETAPA 4' text2='REVISÃO' />
                </StepsDiv>
                <Outlet />
            </Main>
        </Container>
    )
}