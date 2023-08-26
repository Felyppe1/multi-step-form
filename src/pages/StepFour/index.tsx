import { useContext } from "react"
import * as S from "./styles"
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
        <S.Container>
            <S.SubContainer>
                <div>
                    <h1>Escolha adicionais</h1>
                    <S.SubText>Adicionais ajudam a enriquecer sua experiência.</S.SubText>
                    <div>
                        <S.ReviewDiv>
                            <S.PlanDiv>
                                <div>
                                    <p>{`${plan} (${billing})`}</p>
                                    <S.NavChange to='/plano'>Alterar</S.NavChange>
                                </div>
                                <p>${billingPrice}/mês</p>
                            </S.PlanDiv>
                            <S.AddsOnDiv>
                                {stepThreeData.onlineServices &&
                                <S.BaseDiv>
                                    <S.ItemText>Serviço online</S.ItemText>
                                    <S.PriceText>+${onlineServicesPrice}/mês</S.PriceText>
                                </S.BaseDiv>
                                }
                                {stepThreeData.storage &&
                                <S.BaseDiv>
                                    <S.ItemText>Mais armazenamento</S.ItemText>
                                    <S.PriceText>+${storagePrice}/mês</S.PriceText>
                                </S.BaseDiv>
                                }
                                {stepThreeData.profile &&
                                <S.BaseDiv>
                                    <S.ItemText>Perfil personalizado</S.ItemText>
                                    <S.PriceText>+${profilePrice}/mês</S.PriceText>
                                </S.BaseDiv>
                                }
                            </S.AddsOnDiv>
                            
                        </S.ReviewDiv>
                        <S.TotalDiv>
                            <S.ItemText>{stepTwoData.billing == 'monthly' ? 'Total (por mês)' : 'Total (por ano)'}</S.ItemText>
                            <S.TotalText>${total.toFixed(2).replace('.', ',')}</S.TotalText>
                        </S.TotalDiv>
                    </div>
                </div>
                <S.BottomDiv>
                    <S.GoBackLink to='/extras'>Voltar</S.GoBackLink>
                    <S.ConfirmButton to='/completo'>Confirmar</S.ConfirmButton>
                </S.BottomDiv>
            </S.SubContainer>
        </S.Container>
    )
}