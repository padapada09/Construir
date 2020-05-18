import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';

export const useMessages = () =>
{
    const db = new Airtable({apiKey: 'keyex6Kwdhe175oDe'}).base('appkbpPWy0vb4V7T1');
    const [messages, setMessages] = useState({loading: true});
    
    useEffect(() =>
    {
        db('Nosotros').select({
            maxRecords: 10,
            view: "Grid view"
        }).eachPage((records) => setMessages(records.map(record => (record.fields))),(err) => err && console.error(err));
    },[]);

    return messages;
}