import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';

export const useDocument = (id) =>
{
    const db = new Airtable({apiKey: 'keyex6Kwdhe175oDe'}).base('appkbpPWy0vb4V7T1');
    const [document, setDocument] = useState({loading: true});
    
    
    useEffect(() =>
    {
        db('Documento').find(id, (err, record) => err ? console.error(err) : setDocument({content: record.fields.content, author: record.fields.author, sources: record.fields.sources}));
    },[]);

    return document;
}