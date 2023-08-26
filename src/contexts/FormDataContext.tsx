import { createContext, useState } from "react"

interface FormDataContextProps {
    stepOneData: StepOneDataProps
    setStepOneData(data: StepOneDataProps): void
    stepTwoData: StepTwoDataProps
    setStepTwoData(data: StepTwoDataProps): void
    billingOptions: BillingOptionsProps
}

interface StepOneDataProps {
    name: string
    email: string
    cellphone: string
}

export interface StepTwoDataProps {
    plan: string
    billing: string
}

interface BillingPricesProps {
    arcadePrice: number
    advancedPrice: number
    proPrice: number
}

interface BillingOptionsProps {
    monthly: BillingPricesProps
    yearly: BillingPricesProps
}

export const FormDataContext = createContext({} as FormDataContextProps)

export function FormDataContextProvider({ children }: { children: React.ReactNode}) {
    const [stepOneData, setStepOneData] = useState<StepOneDataProps>({name: '', email: '', cellphone: ''})
    const [stepTwoData, setStepTwoData] = useState<StepTwoDataProps>({billing: 'monthly', plan: 'arcade'})
    const billingOptions: BillingOptionsProps = {
        monthly: {
            arcadePrice: 9,
            advancedPrice: 12,
            proPrice: 15
        },
        yearly: {
            arcadePrice: 90,
            advancedPrice: 120,
            proPrice: 150
        }
    }

    return (
        <FormDataContext.Provider
            value={{
                stepOneData,
                setStepOneData,
                stepTwoData,
                setStepTwoData,
                billingOptions
            }}
        >
            { children }
        </FormDataContext.Provider>
    )
}