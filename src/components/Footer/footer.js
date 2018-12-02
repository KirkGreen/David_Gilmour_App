import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

import { CURRENT_YEAR } from "../../config";

const footer = () =>{
    return(
        <div className="footer">
            <Link to="/" className="logo" >
                <img alt="logo" src="/images/logo/Logo.png"/>
            </Link>
            <div className="right">
                @David Gilmour {CURRENT_YEAR} All right reserved
            </div>
        </div>
    )
};

export default footer;