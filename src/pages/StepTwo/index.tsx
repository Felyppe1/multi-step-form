import * as S from "./styles"
import Arcade  from '/images/icon-arcade.svg'
import Advanced  from '/images/icon-advanced.svg'
import Pro  from '/images/icon-pro.svg'
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from 'zod'
import { FormDataContext, StepTwoDataProps } from "../../contexts/FormDataContext"
import { SubmitButton } from "../../styles/SubmitButton"
import { useNavigate } from "react-router-dom"
import { GoBackButton } from "../../styles/GoBackButton"

const StepTwoValidationSchema = zod.object({
    plan: zod.enum(['arcade', 'advanced', 'pro']),
    billing: zod.enum(['monthly', 'yearly'])
})

export function StepTwo() {
    const { stepTwoData, setStepTwoData, billingInfos } = useContext(FormDataContext)
    
    const planForm = useForm({
        resolver: zodResolver(StepTwoValidationSchema),
        defaultValues: {
            plan: stepTwoData.plan,
            billing: stepTwoData.billing
        }
    })
    
    const [yearlyChecked, setYearlyChecked] = useState( stepTwoData.billing == 'yearly' ? true : false )
    console.log(stepTwoData)

    const { register, handleSubmit, setValue } = planForm

    let arcadePrice
    let advancedPrice
    let proPrice

    if (yearlyChecked) {
        arcadePrice = `$${billingInfos.yearly.planPrices.arcadePrice}/ano`
        advancedPrice = `$${billingInfos.yearly.planPrices.advancedPrice}/ano`
        proPrice = `$${billingInfos.yearly.planPrices.proPrice}/ano`
    } else {
        arcadePrice = `$${billingInfos.monthly.planPrices.arcadePrice}/mês`
        advancedPrice = `$${billingInfos.monthly.planPrices.advancedPrice}/mês`
        proPrice = `$${billingInfos.monthly.planPrices.proPrice}/mês`
    }

    const navigate = useNavigate()

    function onSubmit(data: StepTwoDataProps) {
        if (StepTwoValidationSchema.safeParse(data)) {
            setStepTwoData(data)
            navigate('/extras')
        }
    }

    function saveAnyData(data: StepTwoDataProps) {
        setStepTwoData(data)
        navigate('/')
    }

    return (
        <S.Container>
            <S.SubContainer>
                <div>
                    <h1>Selecione seu plano</h1>
                    <S.SubText>Você tem a opção de pagamento mensal ou anual.</S.SubText>

                    <S.Form onSubmit={handleSubmit(onSubmit)}>
                        <S.FormFirstSection>
                            <S.Input type="radio" {...register('plan')} id="arcade" value='arcade' />
                            <S.Label htmlFor="arcade">
                                <S.Icon src={Arcade} alt="" />
                                <div>
                                    <S.PlanName>Arcade</S.PlanName>
                                    <S.PlanValue>{arcadePrice}</S.PlanValue>
                                    {yearlyChecked && <S.MonthsFree>2 meses grátis</S.MonthsFree>}
                                </div>
                            </S.Label>
                        
                            <S.Input type="radio" {...register('plan')} id="advanced" value='advanced' />
                            <S.Label htmlFor="advanced">
                                <S.Icon src={Advanced} alt="" />
                                <div>
                                    <S.PlanName>Avançado</S.PlanName>
                                    <S.PlanValue>{advancedPrice}</S.PlanValue>
                                    {yearlyChecked && <S.MonthsFree>2 meses grátis</S.MonthsFree>}
                                </div>
                            </S.Label>
                            
                            <S.Input type="radio" {...register('plan')} id="pro" value='pro' />
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
                                    {...register('billing')} 
                                    value='monthly'
                                    id="monthly" 
                                    onChange={() => setYearlyChecked(!yearlyChecked)}
                                />
                                <S.PaymentLabel htmlFor="monthly">Mensal</S.PaymentLabel>
                            </div>
                            <S.GearButton type='button' checked={yearlyChecked} onClick={() => [setYearlyChecked(!yearlyChecked), setValue('billing', yearlyChecked ? 'monthly' : 'yearly')]}></S.GearButton>
                            <div>
                                <S.PaymentInput 
                                    type="radio" 
                                    {...register('billing')}
                                    value='yearly'
                                    id="yearly"
                                    onChange={() => setYearlyChecked(!yearlyChecked)}
                                />
                                <S.PaymentLabel htmlFor="yearly">Anual</S.PaymentLabel>
                            </div>
                        </S.FormSecondSection>
                    </S.Form>
                </div>
                <S.BottomDiv>
                    <GoBackButton onClick={handleSubmit(saveAnyData)}>Voltar</GoBackButton>
                    <SubmitButton onClick={handleSubmit(onSubmit)}>Próximo</SubmitButton>
                </S.BottomDiv>
            </S.SubContainer>
        </S.Container>
    )
}