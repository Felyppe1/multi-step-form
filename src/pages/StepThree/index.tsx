import * as S from "./styles"
import { Check } from 'phosphor-react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { FormDataContext } from "../../contexts/FormDataContext"
import { useNavigate } from "react-router-dom"
import { SubmitButton } from "../../styles/SubmitButton"
import { GoBackButton } from "../../styles/GoBackButton"

const stepThreeValidationSchema = zod.object({
    onlineServices: zod.boolean(),
    storage: zod.boolean(),
    profile: zod.boolean()
})

type StepThreeData = zod.infer<typeof stepThreeValidationSchema>

export function StepThree() {
    const { stepThreeData, setStepThreeData, stepTwoData, billingInfos } = useContext(FormDataContext)

    const { register, handleSubmit } = useForm({
        resolver: zodResolver(stepThreeValidationSchema),
        defaultValues: {
            onlineServices: stepThreeData.onlineServices,
            storage: stepThreeData.storage,
            profile: stepThreeData.profile
        }
    })

    let onlineServicesPrice
    let storagePrice
    let profilePrice

    if (stepTwoData.billing == 'monthly') {
        onlineServicesPrice = billingInfos.monthly.addsOnPrices.onlineServices
        storagePrice = billingInfos.monthly.addsOnPrices.storage
        profilePrice = billingInfos.monthly.addsOnPrices.profile
    } else {
        onlineServicesPrice = billingInfos.yearly.addsOnPrices.onlineServices
        storagePrice = billingInfos.yearly.addsOnPrices.storage
        profilePrice = billingInfos.yearly.addsOnPrices.profile
    }

    const navigate = useNavigate()

    function onSubmitNext(data: StepThreeData) {
        setStepThreeData(data)
        navigate('/confirmacao')
    }

    function onSubmitPrevious(data: StepThreeData) {
        setStepThreeData(data)
        navigate('/plano')
    }

    return (
        <S.Container>
            <S.SubContainer>
                <div>
                    <S.Title>Escolha adicionais</S.Title>
                    <S.SubText>Adicionais ajudam a enriquecer sua experiência.</S.SubText>
                    <S.Form onSubmit={handleSubmit(onSubmitNext)}>
                        <S.Input type="checkbox" {...register('onlineServices')} id="onlineServices" />
                        <S.Label htmlFor="onlineServices">
                            <S.FieldWrapper>
                                <S.StyledCheckbox>
                                    <Check color='white' size={14} weight="bold" />
                                </S.StyledCheckbox>
                                <div>
                                    <S.FirstText>Serviço online</S.FirstText>
                                    <S.SecondText>Acesso a jogos multijogadores</S.SecondText>
                                </div>
                            </S.FieldWrapper>
                            <S.PriceText>+${onlineServicesPrice}/mês</S.PriceText>
                        </S.Label>
                    
                        <S.Input type="checkbox" {...register('storage')} id="storage" />
                        <S.Label htmlFor="storage">
                            <S.FieldWrapper>
                                <S.StyledCheckbox>
                                    <Check color='white' size={14} weight="bold" />
                                </S.StyledCheckbox>
                                <div>
                                    <S.FirstText>Mais armazenamento</S.FirstText>
                                    <S.SecondText>1TB extra de armazenamento na nuvem</S.SecondText>
                                </div>
                            </S.FieldWrapper>
                            <S.PriceText>+${storagePrice}/mês</S.PriceText>
                        </S.Label>
                    
                        <S.Input type="checkbox" {...register('profile')} id="profile"/>
                        <S.Label htmlFor="profile">
                            <S.FieldWrapper>
                                <S.StyledCheckbox>
                                    <Check color='white' size={14} weight="bold" />
                                </S.StyledCheckbox>
                                <div>
                                    <S.FirstText>Perfil customizado</S.FirstText>
                                    <S.SecondText>Customize temas no seu perfil</S.SecondText>
                                </div>
                            </S.FieldWrapper>
                            <S.PriceText>+${profilePrice}/mês</S.PriceText>
                        </S.Label>
                    </S.Form>
                </div>
                <S.BottomDiv>
                    <GoBackButton onClick={handleSubmit(onSubmitPrevious)}>Voltar</GoBackButton>
                    <SubmitButton onClick={handleSubmit(onSubmitNext)}>Próximo</SubmitButton>
                </S.BottomDiv>
            </S.SubContainer>
        </S.Container>
    )
}