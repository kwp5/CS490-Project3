import React, { useState, useRef } from 'react';
import './Login.css';
import fetch from 'isomorphic-fetch';

export default function Grouping() {
    const inputRef = useRef(null);
    const [groupData, setGroupData] = useState([]);
    function inviteUser() {
        const url = '/invite' + '?email=' + inputRef;
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json()).then((responseData) => { setGroupData(responseData) });
    }
    
    return (
        <div>
            <label for="invUser">
                User's Email: 
            </label>
            <input ref={inputRef} type="text" name="invUser" />
            <br />
            <button type="button" onClick={inviteUser}>
                Add to Group
            </button>
            <div>
                {groupData}
            </div>
        </div>
    );
}
