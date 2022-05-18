import React from 'react'
import { useBreadcrumbs } from 'core/layouts/dashlayout/dashlayout'
import CoopButton from "shared/components/form/button/button.component";
import CoopInput from "shared/components/form/input/input.component";
import CoopSelect from "shared/components/form/select/select.component";
import styles from "./form.module.scss"
import { breadCrumbsArr } from './breadcrumbs';
import { useNavigate } from 'react-router-dom';

const CoopToCoopForm = () => {
    const { setNav } = useBreadcrumbs();
    setNav(breadCrumbsArr)
    const navigate = useNavigate()

    return (
        <div className="d-flex justify-content-center justify-content-md-start ">
            {/* <div className={`${styles["custom-coop"]} bg-secondary`} >
        ddddd
      </div> */}
            <div
                className={`row d-flex justify-content-between ${styles["custom-ctoc"]}`}
            >
                <h5 className="">Coop to Coop Transfer</h5>
                <div className="col-12 col-md-5">
                    <CoopSelect label="Source Account Name" />
                </div>
                <div className="col-12 col-md-5">
                    <CoopSelect label="Destination Co-operative Name" />
                </div>
                <div className="col-12 col-md-5">
                    <CoopInput
                        label="Destination Account name"
                        placeholder="Enter Account Name"
                    />
                </div>
                <div className="col-12 col-md-5">
                    <CoopInput
                        label="Destination Account Number"
                        placeholder="Enter Account Number"
                    />
                </div>
                <div className="col-12 col-md-5">
                    <CoopInput label="Amount" placeholder="Enter Amount" />
                </div>
                <div className="col-12 col-md-5">
                    <CoopSelect label="Purpose" />
                </div>
                <div className="col-12 col-md-5">
                    <CoopInput label="Remarks" placeholder="Write down remarks" />
                    <div className="d-flex ">
                        <CoopButton className="button-secondary" btnName="Back" onClick={() => navigate("/dashboard")} />
                        <CoopButton className="button-comp mx-3" btnName="Proceed" onClick={() => navigate("/coop-to-coop/confirmation")} />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default CoopToCoopForm