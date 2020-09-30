import React, { Component } from 'react';
import Menu from "./menu";
import 'bootstrap/dist/css/bootstrap.min.css';

const TopBar = () => {
    return (
        <div className="top-row">
        <Menu></Menu>
        </div>
    );
}
 
export default TopBar;