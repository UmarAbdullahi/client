import React from 'react';
import { Link } from 'react-router-dom';

export default function TabOrder() {
    return (
        <div className="tabs">
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/my-services">My Services</Link>
                </li>
                <li className="is-active">
                    <Link to="/order">Order</Link>
                </li>
                <li>
                    <Link to="/add-offer">Add Offer</Link>
                </li>
            </ul>
        </div>
    );
}