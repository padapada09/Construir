import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';

export const usePublications = () =>
{
    const db = new Airtable({apiKey: 'keyex6Kwdhe175oDe'}).base('appkbpPWy0vb4V7T1');
    const [publications, setPublications] = useState({loading: true});
    
    
    
    useEffect(() =>
    {
        db('Publicacion').select({
            maxRecords: 10,
            view: "Grid view"
        }).eachPage((records) => setPublications(records.map(record => ({...record.fields, img: record.fields.img[0]}))),(err) => err && console.error(err));
    },[]);

    return publications;
}