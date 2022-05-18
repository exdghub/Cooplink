import React from 'react'
import success from 'assets/images/svg/success.svg';
import { useBreadcrumbs } from 'core/layouts/dashlayout/dashlayout';
import { breadCrumbsArr } from './breadcrumbs';

export default function CoopToCoopSuccess() {
  const { setNav } = useBreadcrumbs();
  setNav(breadCrumbsArr)
  return (
    <div >
      <img src={success} alt="ssss" />
    </div>
  )
}
