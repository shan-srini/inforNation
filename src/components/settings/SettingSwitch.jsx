import React from 'react';

export default function SettingSwitch({ onClick, isChecked, labelTxt }) {
    const divStyle = {
        alignItems: 'center',
        display: 'flex'
    }
    const labelStyle = {
        fontSize: 20
    }
    const switchStyle = {
        height: 20,
        width: 20
    }
    return (
        <div style={divStyle}>
            {isChecked ?
            <label style={labelStyle}>
                <input onClick={onClick} type="checkbox" defaultChecked style={switchStyle} />
                {labelTxt}
            </label>
            :
            <label style={labelStyle}>
                <input onClick={onClick} type="checkbox" style={switchStyle} />
                {labelTxt}
            </label>}
        </div>
    )
}