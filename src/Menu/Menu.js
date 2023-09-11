import React, { useState } from 'react';
import './Menu.css';
import { Button, Radio } from 'antd';

const durationOptions = [
    { label: 'Short(1-3days)', value: 'Short(1-3days)' },
    { label: 'Medium(4-7days)', value: 'Medium(4-7days)' },
    { label: 'Long(7+days)', value: 'Long(7+days)' },
];

const styleOptions = [
    { label: 'Relaxed', value: 'Relaxed' },
    { label: 'Compact', value: 'Compact' },
];

const interestOptions = [
    { label: 'Food', value: 'Food' },
    { label: 'culture', value: 'culture' },
    { label: 'nature', value: 'nature' },
    { label: 'activity', value: 'activity' },
    { label: 'photo/fancy', value: 'photo/fancy' }
];

function Menu() {
    const [duration, setDuration] = useState('');
    const changeDuration = ({ target: { value } }) => {
        setDuration(value);
    };

    const [style, setStyle] = useState('');
    const changeStyle = ({ target: { value } }) => {
        setStyle(value);
    };

    const [interest, setInterest] = useState('');
    const changeInterest = ({ target: { value } }) => {
        setInterest(value);
    };

    return (
        <div className='Contain'>
            <div className='Menu'>
                <div className='Item'>
                    <p className='label'>Duration:</p>
                    <Radio.Group options={durationOptions} value={duration} onChange={changeDuration}/>
                    <br />
                </div>
                <div className='Item'>
                    <p className='label'>Style:</p>
                    <Radio.Group options={styleOptions} value={style} onChange={changeStyle}/>
                    <br />
                </div>
                <div className='Item'>
                    <p className='label'>Interest:</p>
                    <Radio.Group options={interestOptions} value={interest} onChange={changeInterest}/>
                    <br />
                </div>
            </div>
            <Button>Search</Button>
        </div>
    );
}

export default Menu;