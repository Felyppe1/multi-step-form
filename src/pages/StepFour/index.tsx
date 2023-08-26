import { useContext } from "react"
import { Container, SubContainer, SubText, ReviewDiv, BaseDiv, PlanDiv, NavChange, AddsOnDiv, ItemText, PriceText, TotalDiv, TotalText, BottomDiv, GoBackLink, ConfirmButton } from "./styles"
import { FormDataContext } from "../../contexts/FormDataContext"

export function StepFour() {
    const { stepTwoData, stepThreeData, billingInfos } = useContext(FormDataContext)

    const plan = stepTwoData.plan.charAt(0).toUpperCase() + stepTwoData.plan.slice(1)
    console.log(plan)
    let billing 
    let billingPrice
    let onlineServicesPrice
    let storagePrice
    let profilePrice

    if (stepTwoData.billing == 'monthly') {
        billing = 'Mensal'
        switch (stepTwoData.plan) {
            case 'arcade':
                billingPrice = billingInfos.monthly.planPrices.arcadePrice
                break
            case 'advanced':
                billingPrice = billingInfos.monthly.planPrices.advancedPrice
                break
            case 'pro':
                billingPrice = billingInfos.monthly.planPrices.proPrice
                break
        }
        onlineServicesPrice = billingInfos.monthly.addsOnPrices.onlineServices
        storagePrice = billingInfos.monthly.addsOnPrices.storage
        profilePrice = billingInfos.monthly.addsOnPrices.profile
    } else {
        billing = 'Anual'
        switch (stepTwoData.plan) {
            case 'arcade':
                billingPrice = billingInfos.yearly.planPrices.arcadePrice
                break
            case 'advanced':
                billingPrice = billingInfos.yearly.planPrices.advancedPrice
                break
            case 'pro':
                billingPrice = billingInfos.yearly.planPrices.proPrice
                break
        }
        onlineServicesPrice = billingInfos.yearly.addsOnPrices.onlineServices
        storagePrice = billingInfos.yearly.addsOnPrices.storage
        profilePrice = billingInfos.yearly.addsOnPrices.profile
    }

    const total = billingPrice! + (stepThreeData.onlineServices ? onlineServicesPrice : 0) + (stepThreeData.storage ? storagePrice : 0) + (stepThreeData.profile ? profilePrice : 0)

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
                                    <p>{`${plan} (${billing})`}</p>
                                    <NavChange to='/plano'>Alterar</NavChange>
                                </div>
                                <p>${billingPrice}/mês</p>
                            </PlanDiv>
                            <AddsOnDiv>
                                {stepThreeData.onlineServices &&
                                <BaseDiv>
                                    <ItemText>Serviço online</ItemText>
                                    <PriceText>+${onlineServicesPrice}/mês</PriceText>
                                </BaseDiv>
                                }
                                {stepThreeData.storage &&
                                <BaseDiv>
                                    <ItemText>Mais armazenamento</ItemText>
                                    <PriceText>+${storagePrice}/mês</PriceText>
                                </BaseDiv>
                                }
                                {stepThreeData.profile &&
                                <BaseDiv>
                                    <ItemText>Perfil personalizado</ItemText>
                                    <PriceText>+${profilePrice}/mês</PriceText>
                                </BaseDiv>
                                }
                            </AddsOnDiv>
                            
                        </ReviewDiv>
                        <TotalDiv>
                            <ItemText>{stepTwoData.billing == 'monthly' ? 'Total (por mês)' : 'Total (por ano)'}</ItemText>
                            <TotalText>${total.toFixed(2).replace('.', ',')}</TotalText>
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