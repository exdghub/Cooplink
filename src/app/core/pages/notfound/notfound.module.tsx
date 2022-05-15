import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <>   <div>PageNotFound</div>
            <button onClick={() => navigate("/dashboard")}>Go to Dash</button>
        </>
    )
}

export default PageNotFound