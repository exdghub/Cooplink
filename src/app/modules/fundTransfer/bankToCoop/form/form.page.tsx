import { useBreadcrumbs } from 'core/layouts/dashlayout/dashlayout'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CoopButton from 'shared/components/form/button/button.component'
import { breadCrumbsArr } from './breadcrumbs'

const BankToCoopForm = () => {
    const { setNav } = useBreadcrumbs()
    setNav(breadCrumbsArr)

    const navigate = useNavigate()

    return (
        <div>
            Form Page
            <CoopButton btnName='Next' onClick={() => navigate("/bank-to-coop/confirmation")} />
        </div>
    )
}

export default BankToCoopForm