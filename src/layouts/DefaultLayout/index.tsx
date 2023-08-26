import { Outlet, useLocation } from 'react-router-dom'
import { Background, Container, Main, StepsDiv, StepsSubDiv } from './styles'
import { Step } from '../../components/Step'

export function DefaultLayout() {
    const location = useLocation()
    const path = location.pathname

    let activeStep
    if (path === '/') {
        activeStep = 1
    } else if (path === '/plano') {
        activeStep = 2
    } else if (path === '/extras') {
        activeStep = 3
    } else if (path === '/confirmacao' || path === '/completo') {
        activeStep = 4
    }

    return (
        <Container>
            <Background>
                <Step step='1' active={activeStep === 1} />
                <Step step='2' active={activeStep === 2} />
                <Step step='3' active={activeStep === 3} />
                <Step step='4' active={activeStep === 4} />
            </Background>
            
            <Main>
                <StepsDiv>
                    <StepsSubDiv>
                        <Step step='1' text1='ETAPA 1' text2='SUAS INFORMAÇÕES' active={activeStep === 1} />
                        <Step step='2' text1='ETAPA 2' text2='SELECIONE O PLANO' active={activeStep === 2} />
                        <Step step='3' text1='ETAPA 3' text2='ADICIONAIS' active={activeStep === 3} />
                        <Step step='4' text1='ETAPA 4' text2='REVISÃO' active={activeStep === 4} />
                    </StepsSubDiv>
                </StepsDiv>
                <Outlet />
            </Main>
        </Container>
    )
}