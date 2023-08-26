import { NextLink } from "../../components/NextLink"
import { Container, SubContainer, SubText, Form, Input, Label, FieldWrapper, StyledCheckbox, FirstText, SecondText, PriceText, BottomDiv, GoBackLink } from "./styles"
import { Check } from 'phosphor-react'

export function StepThree() {
    return (
        <Container>
            <SubContainer>
                <div>
                    <h1>Escolha adicionais</h1>
                    <SubText>Adicionais ajudam a enriquecer sua experiência.</SubText>
                    <Form action="">
                        <Input type="checkbox" name="onlineServices" id="onlineServices" />
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
                            <PriceText>+$10/mês</PriceText>
                        </Label>
                    
                        <Input type="checkbox" name="storage" id="storage" />
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
                            <PriceText>+$20/mês</PriceText>
                        </Label>
                    
                        <Input type="checkbox" name="profile" id="profile"/>
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
                            <PriceText>+$5/mês</PriceText>
                        </Label>
                    </Form>
                </div>
                <BottomDiv>
                    <GoBackLink to='/plano'>Voltar</GoBackLink>
                    <NextLink to='/confirmacao'>Próximo</NextLink>
                </BottomDiv>
            </SubContainer>
        </Container>
    )
}