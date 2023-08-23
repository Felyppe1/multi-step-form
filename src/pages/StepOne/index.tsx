import { NavLink, useNavigate } from "react-router-dom"
import * as S from "./styles"
import { useForm } from "react-hook-form"
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { SubmitButton } from "../../styles/SubmitButton"
import { FormDataContext } from "../../contexts/FormDataContext"

const StepOneValidationSchema = zod.object({
    name: zod.string().min(1, 'Nome é obrigatório'),
    email: zod.string().refine(field => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(field), { message: 'Email inválido' }),
    cellphone: zod.string().min(1, 'Celular é obrigatório')
})

type StepOneData = zod.infer<typeof StepOneValidationSchema>

export function StepOne() {
    const { saveStepOneData } = useContext(FormDataContext)

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(StepOneValidationSchema),
        defaultValues: {
            name: '',
            email: '',
            cellphone: ''
        }
    })

    const navigate = useNavigate()

    function getStepOneData(data: StepOneData) {
        if (StepOneValidationSchema.safeParse(data)) {
            saveStepOneData(data)
            navigate('/plano')
        }
    }

    return (
        <S.Container>
            <S.SubContainer>
                <div>
                    <h1>Informações pessoais</h1>
                    <S.SubText>Por favor, insira seu nome, endereço de email e celular.</S.SubText>

                    <S.Form onSubmit={handleSubmit(getStepOneData)}>
                        <S.FieldDiv>
                            <S.LabelDiv>
                                <S.Label htmlFor="name">Nome</S.Label>
                                {errors.name && <S.Error>{errors.name?.message}</S.Error>}
                            </S.LabelDiv>
                            <S.Input 
                                {...register('name')} 
                                $isInvalid={!!errors.name?.message} 
                                type="text" 
                                placeholder="ex. Luiz Felyppe Nunes" 
                                id="name"
                            />
                        </S.FieldDiv>
                        <S.FieldDiv>
                            <S.LabelDiv>
                                <S.Label htmlFor="email">Email</S.Label>
                                {errors?.email && <S.Error>{errors.email?.message}</S.Error>}
                            </S.LabelDiv>
                            <S.Input 
                                {...register('email')}
                                $isInvalid={!!errors.email?.message}
                                type="email" 
                                placeholder="ex. felyppe@gmail.com" 
                                id="email" 
                            />
                        </S.FieldDiv>
                        <S.FieldDiv>
                            <S.LabelDiv>
                                <S.Label htmlFor="cellphone">Celular</S.Label>
                                {errors?.cellphone && <S.Error>{errors.cellphone?.message}</S.Error>}
                            </S.LabelDiv>
                            <S.Input 
                                {...register('cellphone')} 
                                $isInvalid={!!errors.cellphone?.message} 
                                type="text" 
                                placeholder="ex. 21 98888-5555" 
                                id="cellphone" 
                            />
                        </S.FieldDiv>
                        <input hidden type="submit" value="" />
                    </S.Form>
                </div>
                <S.BottomDiv>
                    <NavLink to='/'></NavLink>
                    <SubmitButton onClick={handleSubmit(getStepOneData)}>Próximo</SubmitButton>
                </S.BottomDiv>
            </S.SubContainer>
        </S.Container>
    )
}