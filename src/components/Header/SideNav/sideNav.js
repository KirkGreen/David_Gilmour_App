import React from 'react';
import SideNav from 'react-simple-sidenav';

import SideNavItem from './sideNav_item'

const SideNavigation = (props) => {
    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background:'#242424',
                    maxWidth:'220px',
                    color:'white'
                }}
            >
                <SideNavItem {...props}/>
            </SideNav>
        </div>
    )
};

export default SideNavigation;