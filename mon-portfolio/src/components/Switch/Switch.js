import React, { useState } from 'react';
import './Switch.css'

export const LeftContent = ({ children }) => <>{children}</>;
export const RightContent = ({ children }) => <>{children}</>;

export function Switch({ leftTitle, rightTitle, children, isRightActive }) {

    const [isActive, setIsActive] = useState(isRightActive);

    const toggleSwitch = () => {
        setIsActive(!isActive);
    };

    // Filtrer les enfants pour trouver LeftContent et RightContent
    const leftContent = React.Children.toArray(children).find(child => child.type === LeftContent);
    const rightContent = React.Children.toArray(children).find(child => child.type === RightContent);

    return (
        <div className="switch-container">
            {/* Switch */}
            <div className="switch-switch-container">
                <label className={!isActive ? 'switch-label switch-active-label' : 'switch-label'}>
                {leftTitle}
                </label>
                <div className={`switch-switch ${isActive ? 'active' : ''}`} onClick={toggleSwitch}>
                <div className="switch-switch-toggle"></div>
                </div>
                <label className={isActive ? 'switch-label switch-active-label' : 'switch-label'}>
                {rightTitle}
                </label>
            </div>

            {/* Contenu */}
            <div className="switch-profile-container">
                {!isActive ? leftContent : null}
                {isActive ? rightContent : null}
            </div>
        </div>
    );
};