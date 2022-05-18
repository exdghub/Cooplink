import React from 'react'
import man from "assets/images/man.jpg"

const DashFooter = () => {
    return (
        <footer className='d-flex align-items-end text-right justify-content-end px-5'>
            <span className='sub-text px-1'> &copy; Copyright 2022 DGHUB Pvt. Ltd. </span>
            <span className='sub-text px-1'>  <img src={man} alt="US" width="20" height="20" className="rounded-circle ml-3" /> English United States </span>
        </footer>
    )
}

export default DashFooter