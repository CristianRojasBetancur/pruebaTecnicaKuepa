import React from 'react';
import '../css/topBar.css';

const topBar = () => {
    return (
        <div className="topBar">
            <div className="searchBar">
                <div className="box">
                    <i class="fas fa-search"></i>
                    <input placeholder='Search...' type="text" />
                </div>
                <i class="fas fa-filter"></i>
            </div>

            <div className="calendar">
                <div className="box2">
                    <p>Wed, 20 May</p>
                    <i class="fas fa-angle-down"></i>
                </div>
            </div>
        </div>
    );
};

export default topBar;