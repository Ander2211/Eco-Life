import React from 'react';
import './GridLayout.css';

export default function Galery() {
    return (
        <div className="grid-container">
            <div className="grid-item bg1">
                <div className="">
                    <div className="title">Lorem, ipsum.</div>
                </div>
            </div>
            <div className="grid-item bg2" >
                <div className="">
                    <div className="title">Lorem, ipsum.</div>
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
}
