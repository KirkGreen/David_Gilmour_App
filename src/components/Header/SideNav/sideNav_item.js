import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import style from './sideNav.css'

const SideNavItem = () => {

    const item = [
        {
            type: style.option,
            icon: 'home',
            text: 'home',
            link: '/'
        },
        {
            type: style.option,
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: style.option,
            icon: 'file-audio-o',
            text: 'Discography',
            link: '/Discography'
        },
        {
            type: style.option,
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: style.option,
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: style.option,
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out'
        }

    ];

    const showItem = () => {
        return item.map((item, i) => {
            return (
                <div key={i} className={item.type}>
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