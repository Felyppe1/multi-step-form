import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
    return (
        <div>
            <main>
                <div>

                </div>
                <Outlet />
            </main>
        </div>
    )
}