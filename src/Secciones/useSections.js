import { useState, useEffect } from 'react';
import Airtable from 'airtable';

export const useSections = () =>
{
    const db = new Airtable({apiKey: 'keyex6Kwdhe175oDe'}).base('appkbpPWy0vb4V7T1');
    const [sections, setSections] = useState({loading: true});
    
    
    useEffect(() =>
    {
        db('Seccion').select({
            view: "Grid view"
        }).eachPage((records) => {
            setSections(records.map(record => ({...record.fields, id: record.id})));
        },(err) => err && console.error(err));
    },[db]);

    return sections;
}