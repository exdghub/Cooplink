import { useAuth } from 'core/utils/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CoopButton from 'shared/components/form/button/button.component'

const DashboardPage = () => {
    const auth = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout();
        navigate("/")
    }
    return (
        <div>DashboardPage
            Logged in as - {auth.user}

            <CoopButton btnName='Logout' onClick={handleLogout} />
        </div>
    )
}

export default DashboardPage