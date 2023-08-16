import { NavLink } from "react-router-dom"
import { Container, SubContainer, FieldDiv, Input, Label, SubText, Form, BottomDiv } from "./styles"
import { Button } from "../../components/Button"

export function StepOne() {
    return (
        <Container>
            <SubContainer>
                <div>
                    <h1>Informações pessoais</h1>
                    <SubText>Por favor, insira seu nome, endereço de email e celular.</SubText>

                    <Form action="">
                        <FieldDiv>
                            <div>
                                <Label htmlFor="name">Nome</Label>
                            </div>
                            <Input type="text" placeholder="ex. Luiz Felyppe Nunes" name="name" id="name" />
                        </FieldDiv>
                        <FieldDiv>
                            <div>
                                <Label htmlFor="email">Email</Label>
                            </div>
                            <Input type="text" placeholder="ex. felyppe@gmail.com" name="email" id="email" />
                        </FieldDiv>
                        <FieldDiv>
                            <div>
                                <Label htmlFor="cellphone">Celular</Label>
                            </div>
                            <Input type="text" placeholder="ex. 21 98888-5555" name="cellphone" id="cellphone" />
                        </FieldDiv>
                    </Form>
                </div>
                <BottomDiv>
                    <NavLink to='/'></NavLink>
                    <NavLink to='/plano'><Button>Próximo</Button></NavLink>
                </BottomDiv>
            </SubContainer>
        </Container>
    )
}