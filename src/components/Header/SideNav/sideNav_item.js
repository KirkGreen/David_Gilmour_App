import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import './sideNav.css'

const SideNavItem = () => {

    const item = [
        {
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }

    ];

    const showItem = () => {
        return item.map( (item, i) => {
            return (
                <div key={i} className="option">
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
        })
    };

    return(
        <div>
            {showItem()}
        </div>
    )

};

export default SideNavItem;