import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { StepOne } from './pages/StepOne'
import { StepTwo } from './pages/StepTwo'
import { StepThree } from './pages/StepThree'
import { StepFour } from './pages/StepFour'
import { ThankYou } from './pages/ThankYou'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<StepOne />} />
                <Route path='/plano' element={<StepTwo />} />
                <Route path='/extras' element={<StepThree />} />
                <Route path='/confirmacao' element={<StepFour />} />
                <Route path='/completo' element={<ThankYou />} />
            </Route>
        </Routes>
    )
}