import React from 'react';
import '../css/navbar.css';
import KET from '../img/KETlogo.png';

const navbar = () => {
    return (
        <div className='navbarContainer'>

            <img src={KET} alt="KETlogo"></img>

            <ul className='bar'>
                <div className='navigation'>
                    <ul>
                        <li><ion-icon name="home-outline"></ion-icon></li>
                        <li><ion-icon name="clipboard-outline"></ion-icon></li>
                        <li><ion-icon name="menu-outline"></ion-icon></li>
                    </ul>

                </div>

                <div className='user'>
                    <ul>
                        <li><ion-icon name="chatbox-outline"></ion-icon></li>
                        <li><ion-icon name="person-circle-outline"></ion-icon></li>
                    </ul>

                </div>

            </ul>
        </div>
    );
};

export default navbar;