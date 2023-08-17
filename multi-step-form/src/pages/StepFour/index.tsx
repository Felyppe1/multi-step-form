import { Container, SubContainer, SubText, ReviewDiv, BaseDiv, PlanDiv, NavChange, AddsOnDiv, ItemText, PriceText, TotalDiv, TotalText, BottomDiv, GoBackLink, ConfirmButton } from "./styles"

export function StepFour() {
    return (
        <Container>
            <SubContainer>
                <div>
                    <h1>Escolha adicionais</h1>
                    <SubText>Adicionais ajudam a enriquecer sua experiência.</SubText>
                    <div>
                        <ReviewDiv>
                            <PlanDiv>
                                <div>
                                    <p>Arcade (Mensal)</p>
                                    <NavChange to='/plano'>Alterar</NavChange>
                                </div>
                                <p>$9/mês</p>
                            </PlanDiv>
                            <AddsOnDiv>
                                <BaseDiv>
                                    <ItemText>Serviço online</ItemText>
                                    <PriceText>+$15/mês</PriceText>
                                </BaseDiv>
                                <BaseDiv>
                                    <ItemText>Mais armazenamento</ItemText>
                                    <PriceText>+$20/mês</PriceText>
                                </BaseDiv>
                            </AddsOnDiv>
                            
                        </ReviewDiv>
                        <TotalDiv>
                            <ItemText>Total (por mês)</ItemText>
                            <TotalText>$44,00</TotalText>
                        </TotalDiv>
                    </div>
                </div>
                <BottomDiv>
                    <GoBackLink to='/extras'>Voltar</GoBackLink>
                    <ConfirmButton to='/completo'>Confirmar</ConfirmButton>
                </BottomDiv>
            </SubContainer>
        </Container>
    )
}