import { NavLink } from "react-router-dom"
import { Container, SubContainer, FieldDiv, Input, LabelDiv, Label, Error, SubText, Form, BottomDiv } from "./styles"
import { NextLink } from "../../components/NextLink"
import { useForm } from "react-hook-form"
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from 'react'

const StepOneValidationSchema = zod.object({
    name: zod.string().min(1),
    email: zod.string().refine(field => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(field), { message: 'Email inválido' }),
    cellphone: zod.string()
})

type StepOneData = zod.infer<typeof StepOneValidationSchema>

export function StepOne() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(StepOneValidationSchema),
        defaultValues: {
            name: '',
            email: '',
            cellphone: ''
        }
    })

    function getStepOneData(data: StepOneData) {
        console.log(data)
    }

    return (
        <Container>
            <SubContainer>
                <div>
                    <h1>Informações pessoais</h1>
                    <SubText>Por favor, insira seu nome, endereço de email e celular.</SubText>

                    <Form onSubmit={handleSubmit(getStepOneData)}>
                        <FieldDiv>
                            <div>
                                <Label htmlFor="name">Nome</Label>
                            </div>
                            <Input {...register('name')} type="text" placeholder="ex. Luiz Felyppe Nunes" id="name" />
                        </FieldDiv>
                        <FieldDiv>
                            <LabelDiv>
                                <Label htmlFor="email">Email</Label>
                                {errors.email && <Error>{errors.email.message}</Error>}
                            </LabelDiv>
                            <Input 
                                {...register('email')} 
                                type="email" 
                                placeholder="ex. felyppe@gmail.com" 
                                id="email" 
                            />
                        </FieldDiv>
                        <FieldDiv>
                            <div>
                                <Label htmlFor="cellphone">Celular</Label>
                            </div>
                            <Input {...register('cellphone')} type="text" placeholder="ex. 21 98888-5555" id="cellphone" />
                        </FieldDiv>
                        <input hidden type="submit" value="" />
                    </Form>
                </div>
                <BottomDiv>
                    <NavLink to='/'></NavLink>
                    <NextLink to='/plano'>Próximo</NextLink>
                    <button onClick={handleSubmit(getStepOneData)}>Teste</button>
                </BottomDiv>
            </SubContainer>
        </Container>
    )
}