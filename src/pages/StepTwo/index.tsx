import { NextLink } from "../../components/NextLink"
import * as S from "./styles"
import Arcade  from '/images/icon-arcade.svg'
import Advanced  from '/images/icon-advanced.svg'
import Pro  from '/images/icon-pro.svg'
import { useState } from "react"

export function StepTwo() {
    const [yearlyChecked, setYearlyChecked] = useState(false)
    let arcadePrice
    let advancedPrice
    let proPrice

    if (yearlyChecked) {
        arcadePrice = '$90/mês'
        advancedPrice = '$120/mês'
        proPrice = '$150/mês'
    } else {
        arcadePrice = '$9/mês'
        advancedPrice = '$12/mês'
        proPrice = '$15/mês'
    }

    function handleSetYearlyChecked() {
        if (yearlyChecked) {
            setYearlyChecked(false)
        } else {
            setYearlyChecked(true)
        }
    }

    return (
        <S.Container>
            <S.SubContainer>
                <div>
                    <h1>Selecione seu plano</h1>
                    <S.SubText>Você tem a opção de pagamento mensal ou anual.</S.SubText>

                    <S.Form action="">
                        <S.FormFirstSection>
                            <S.Input type="radio" name="plans" id="arcade" />
                            <S.Label htmlFor="arcade">
                                <S.Icon src={Arcade} alt="" />
                                <div>
                                    <S.PlanName>Arcade</S.PlanName>
                                    <S.PlanValue>{arcadePrice}</S.PlanValue>
                                    {yearlyChecked && <S.MonthsFree>2 meses grátis</S.MonthsFree>}
                                </div>
                            </S.Label>
                        
                            <S.Input type="radio" name="plans" id="advanced" />
                            <S.Label htmlFor="advanced">
                                <S.Icon src={Advanced} alt="" />
                                <div>
                                    <S.PlanName>Avançado</S.PlanName>
                                    <S.PlanValue>{advancedPrice}</S.PlanValue>
                                    {yearlyChecked && <S.MonthsFree>2 meses grátis</S.MonthsFree>}
                                </div>
                            </S.Label>
                            
                            <S.Input type="radio" name="plans" id="pro" />
                            <S.Label htmlFor="pro">
                                <S.Icon src={Pro} alt="" />
                                <div>
                                    <S.PlanName>Profissional</S.PlanName>
                                    <S.PlanValue>{proPrice}</S.PlanValue>
                                    {yearlyChecked && <S.MonthsFree>2 meses grátis</S.MonthsFree>}
                                </div>
                            </S.Label>
                            
                        </S.FormFirstSection>
                        <S.FormSecondSection>
                            <div>
                                <S.PaymentInput 
                                    type="radio" 
                                    name="payment" 
                                    id="monthly" 
                                    checked={!yearlyChecked}
                                    onChange={handleSetYearlyChecked}
                                />
                                <S.PaymentLabel htmlFor="monthly">Mensal</S.PaymentLabel>
                            </div>
                            <S.GearButton type='button' checked={yearlyChecked} onClick={handleSetYearlyChecked}></S.GearButton>
                            <div>
                                <S.PaymentInput 
                                    type="radio" 
                                    name="payment" 
                                    id="yearly"
                                    checked={yearlyChecked}
                                    onChange={handleSetYearlyChecked}
                                />
                                <S.PaymentLabel htmlFor="yearly">Anual</S.PaymentLabel>
                            </div>
                        </S.FormSecondSection>
                    </S.Form>
                </div>
                <S.BottomDiv>
                    <S.GoBackLink to='/'>Voltar</S.GoBackLink>
                    <NextLink to='/extras'>Próximo</NextLink>
                </S.BottomDiv>
            </S.SubContainer>
        </S.Container>
    )
}