import React, { useState, useEffect } from 'react';
import Airtable from 'airtable';

export const usePublications = (section_id) =>
{

    const db = new Airtable({apiKey: 'keyex6Kwdhe175oDe'}).base('appkbpPWy0vb4V7T1');
    const [publications, setPublications] = useState({loading: true});
    
    
    useEffect(() =>
    {
        if (section_id) {
            db('Publicacion').select({
                maxRecords: 10,
                view: "Grid view"
            }).eachPage((records) => {
                return setPublications(
                    records
                    .map(record => ({...record.fields, Imagen: record.fields.Imagen[0]}))
                    .filter(publication => publication.Seccion.includes(section_id))
                )
            },(err) => err && console.error(err));
        } else {
            setPublications(null);
        }
    },[section_id]);

    return publications;
}