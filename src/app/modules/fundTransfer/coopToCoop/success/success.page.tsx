import React from 'react'
import success from 'assets/images/svg/success.svg';
import { useBreadcrumbs } from 'core/layouts/dashlayout/dashlayout';
import { breadCrumbsArr } from './breadcrumbs';
import CoopButton from 'shared/components/form/button/button.component';
import { useNavigate } from 'react-router-dom';

export default function CoopToCoopSuccess() {
  const { setNav } = useBreadcrumbs();
  setNav(breadCrumbsArr)
  const navigate = useNavigate()

  return (
    <div >
      <img src={success} alt="ssss" />
      <CoopButton className="button-comp col-5 col-md-2"
        btnName="Back to home" onClick={() => navigate("/dashboard")} />
    </div>
  )
}
