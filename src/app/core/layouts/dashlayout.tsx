import { useAuth } from "core/utils/auth"
import React from "react"
import { Navigate, NavLink, Outlet } from "react-router-dom"

const DashLayout: React.FC = (): JSX.Element => {
    const { user } = useAuth()
    if (!user) {
        return <Navigate to="/" />
    }

    return <div className="container">
        < div className="row" >
            <div className="col">
                <p><NavLink to='/dashboard'>Dashboard</NavLink></p>
                Fund Transfer
                <ul>
                    <li> <NavLink to="/fund-transfer/coop-to-bank">Coop To Bank</NavLink></li>
                    <li> <NavLink to="/fund-transfer/coop-to-coop">Coop To Coop</NavLink></li>
                    <li> <NavLink to="/fund-transfer/bank-to-coop">Bank To Coop</NavLink></li>
                </ul>
            </div>
            <div className="col">
                <React.Suspense fallback="...Loading">
                    <Outlet />
                </React.Suspense>
            </div>
        </div >
    </div >
}
export default DashLayout