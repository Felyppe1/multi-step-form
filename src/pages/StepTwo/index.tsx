import { NextLink } from "../../components/NextLink"
import { Container, SubContainer, SubText, Form, Input, Label, Icon, BottomDiv, PlanName, PlanValue, GoBackLink, FormFirstSection, FormSecondSection, PaymentInput, PaymentLabel, GearButton, MonthsFree } from "./styles"
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
        <Container>
            <SubContainer>
                <div>
                    <h1>Selecione seu plano</h1>
                    <SubText>Você tem a opção de pagamento mensal ou anual.</SubText>

                    <Form action="">
                        <FormFirstSection>
                            <div>
                                <Input type="radio" name="plans" id="arcade" />
                                <Label htmlFor="arcade">
                                    <Icon src={Arcade} alt="" />
                                    <div>
                                        <PlanName>Arcade</PlanName>
                                        <PlanValue>{arcadePrice}</PlanValue>
                                        {yearlyChecked && <MonthsFree>2 meses grátis</MonthsFree>}
                                    </div>
                                </Label>
                            </div>
                            <div>
                                <Input type="radio" name="plans" id="advanced" />
                                <Label htmlFor="advanced">
                                    <Icon src={Advanced} alt="" />
                                    <div>
                                        <PlanName>Avançado</PlanName>
                                        <PlanValue>{advancedPrice}</PlanValue>
                                        {yearlyChecked && <MonthsFree>2 meses grátis</MonthsFree>}
                                    </div>
                                </Label>
                            </div>
                            <div>
                                <Input type="radio" name="plans" id="pro" />
                                <Label htmlFor="pro">
                                    <Icon src={Pro} alt="" />
                                    <div>
                                        <PlanName>Profissional</PlanName>
                                        <PlanValue>{proPrice}</PlanValue>
                                        {yearlyChecked && <MonthsFree>2 meses grátis</MonthsFree>}
                                    </div>
                                </Label>
                            </div>
                        </FormFirstSection>
                        <FormSecondSection>
                            <div>
                                <PaymentInput 
                                    type="radio" 
                                    name="payment" 
                                    id="monthly" 
                                    checked={!yearlyChecked}
                                    onChange={handleSetYearlyChecked}
                                />
                                <PaymentLabel htmlFor="monthly">Mensal</PaymentLabel>
                            </div>
                            <GearButton type='button' checked={yearlyChecked} onClick={handleSetYearlyChecked}></GearButton>
                            <div>
                                <PaymentInput 
                                    type="radio" 
                                    name="payment" 
                                    id="yearly"
                                    checked={yearlyChecked}
                                    onChange={handleSetYearlyChecked}
                                />
                                <PaymentLabel htmlFor="yearly">Anual</PaymentLabel>
                            </div>
                        </FormSecondSection>
                    </Form>
                </div>
                <BottomDiv>
                    <GoBackLink to='/'>Voltar</GoBackLink>
                    <NextLink to='/extras'>Próximo</NextLink>
                </BottomDiv>
            </SubContainer>
        </Container>
    )
}