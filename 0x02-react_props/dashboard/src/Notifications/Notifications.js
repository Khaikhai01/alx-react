import React from 'react';
import './Notifications.css';
import icon from './icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <button style={{
        position: 'absolute',
        top: 15,
        right: 15,
        border: 'none',
        backgroundColor: '#fff'
      }}aria-label="Close" onClick={() => console.log('Close button has been clicked')}><img src={icon} alt="logo" style={{width: 15}}/></button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
}