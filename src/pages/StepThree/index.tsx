import { Container, SubContainer, SubText, Form, Input, Label, FieldWrapper, StyledCheckbox, FirstText, SecondText, PriceText, BottomDiv } from "./styles"
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
        <Container>
            <SubContainer>
                <div>
                    <h1>Escolha adicionais</h1>
                    <SubText>Adicionais ajudam a enriquecer sua experiência.</SubText>
                    <Form onSubmit={handleSubmit(onSubmitNext)}>
                        <Input type="checkbox" {...register('onlineServices')} id="onlineServices" />
                        <Label htmlFor="onlineServices">
                            <FieldWrapper>
                                <StyledCheckbox>
                                    <Check color='white' size={14} weight="bold" />
                                </StyledCheckbox>
                                <div>
                                    <FirstText>Serviço online</FirstText>
                                    <SecondText>Acesso a jogos multijogadores</SecondText>
                                </div>
                            </FieldWrapper>
                            <PriceText>+${onlineServicesPrice}/mês</PriceText>
                        </Label>
                    
                        <Input type="checkbox" {...register('storage')} id="storage" />
                        <Label htmlFor="storage">
                            <FieldWrapper>
                                <StyledCheckbox>
                                    <Check color='white' size={14} weight="bold" />
                                </StyledCheckbox>
                                <div>
                                    <FirstText>Mais armazenamento</FirstText>
                                    <SecondText>1TB extra de armazenamento na nuvem</SecondText>
                                </div>
                            </FieldWrapper>
                            <PriceText>+${storagePrice}/mês</PriceText>
                        </Label>
                    
                        <Input type="checkbox" {...register('profile')} id="profile"/>
                        <Label htmlFor="profile">
                            <FieldWrapper>
                                <StyledCheckbox>
                                    <Check color='white' size={14} weight="bold" />
                                </StyledCheckbox>
                                <div>
                                    <FirstText>Perfil customizado</FirstText>
                                    <SecondText>Customize temas no seu perfil</SecondText>
                                </div>
                            </FieldWrapper>
                            <PriceText>+${profilePrice}/mês</PriceText>
                        </Label>
                    </Form>
                </div>
                <BottomDiv>
                    <GoBackButton onClick={handleSubmit(onSubmitPrevious)}>Voltar</GoBackButton>
                    <SubmitButton onClick={handleSubmit(onSubmitNext)}>Próximo</SubmitButton>
                </BottomDiv>
            </SubContainer>
        </Container>
    )
}