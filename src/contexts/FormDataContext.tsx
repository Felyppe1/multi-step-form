import { createContext, useState } from "react"

interface FormDataContextProps {
    stepOneData: StepOneDataProps
    setStepOneData(data: StepOneDataProps): void
    stepTwoData: StepTwoDataProps
    setStepTwoData(data: StepTwoDataProps): void
    stepThreeData: StepThreeDataProps
    setStepThreeData(data: StepThreeDataProps): void
    billingInfos: BillingInfosProps
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

interface StepThreeDataProps {
    onlineServices: boolean
    storage: boolean
    profile: boolean
}

interface PlanPricesProps {
    arcadePrice: number
    advancedPrice: number
    proPrice: number
}

interface AddsOnPricesProps {
    onlineServices: number
    storage: number
    profile: number
}

interface BillingInfosProps {
    monthly: { planPrices: PlanPricesProps, addsOnPrices: AddsOnPricesProps }
    yearly: { planPrices: PlanPricesProps, addsOnPrices: AddsOnPricesProps }
}

export const FormDataContext = createContext({} as FormDataContextProps)

export function FormDataContextProvider({ children }: { children: React.ReactNode}) {
    const [stepOneData, setStepOneData] = useState<StepOneDataProps>({name: '', email: '', cellphone: ''})
    const [stepTwoData, setStepTwoData] = useState<StepTwoDataProps>({billing: 'monthly', plan: 'arcade'})
    const [stepThreeData, setStepThreeData] = useState({onlineServices: false, storage: false, profile: false})
    const billingInfos: BillingInfosProps = {
        monthly: {
            planPrices: {
                arcadePrice: 7,
                advancedPrice: 10,
                proPrice: 12
            },
            addsOnPrices: {
                onlineServices: 5,
                storage: 7,
                profile: 2
            }
        },
        yearly: {
            planPrices: {
                arcadePrice: 70,
                advancedPrice: 100,
                proPrice: 120
            },
            addsOnPrices: {
                onlineServices: 50,
                storage: 70,
                profile: 20
            }
        }
    }


    return (
        <FormDataContext.Provider
            value={{
                stepOneData,
                setStepOneData,
                stepTwoData,
                setStepTwoData,
                stepThreeData,
                setStepThreeData,
                billingInfos
            }}
        >
            { children }
        </FormDataContext.Provider>
    )
}