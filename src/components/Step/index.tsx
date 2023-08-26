import { Div, Span, FirstText, SecondText } from "./styles"

type StepProps = {
    step: string
    text1?: string
    text2?: string
    active: boolean
}

export function Step({ step, text1, text2, active }: StepProps) {
    return (
        <>
        {text1 ? 
        <Div>
            <Span $active={active}>{step}</Span>
            <div>
                <FirstText>{text1}</FirstText>
                <SecondText>{text2}</SecondText>
            </div>
        </Div> :
        <Span $active={active}>{step}</Span>
        }
        </>
    )
}