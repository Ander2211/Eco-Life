import React from 'react';
import './GridLayout.css';



export default function Galery()  {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <img className='img' src="../public/img/images.jpeg" />
                <div className="content">
                    <div className="text"></div>
                </div>
            </div>
            <div className="grid-item">
                
                <div className="content">
                    <div className="line"></div>
                </div>
            </div>
            <div className="grid-item">
                <div className="content">
                    <div className="line"></div>
                </div>
            </div>
            <div className="grid-item">
                <div className="content">
                    <div className="line"></div>
                </div>
            </div>
            <div className="grid-item">
                <div className="content">
                    <div className="line"></div>
                </div>
            </div>
            <div className="grid-item">
                <div className="content">
                    <div className="line"></div>
                </div>
            </div>
        </div>
    );
};
