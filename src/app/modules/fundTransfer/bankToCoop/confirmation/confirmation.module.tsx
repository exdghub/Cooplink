import { useBreadcrumbs } from 'core/layouts/dashlayout/dashlayout'
import React from 'react'
import { breadCrumbsArr } from './breadcrumbs'
import { useNavigate } from 'react-router-dom'
import CoopButton from 'shared/components/form/button/button.component'


const BankToCoopConfirmation = () => {
    const { setNav } = useBreadcrumbs()
    setNav(breadCrumbsArr)

    const navigate = useNavigate()

    return (
        <div>
            Confirmation Page
            <CoopButton btnName='Next' onClick={() => navigate("/bank-to-coop/success")} />
        </div>
    )
}

export default BankToCoopConfirmation