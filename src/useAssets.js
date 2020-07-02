import { useState, useEffect } from 'react';
import Airtable from 'airtable';

const useAssets = () =>
{
    const db = new Airtable({apiKey: 'keyex6Kwdhe175oDe'}).base('appkbpPWy0vb4V7T1');
    const [assets, setAssets] = useState({loading: true});
    
    useEffect(() =>
    {
        db('Imagenes').select({
            view: "Grid view"
        }).eachPage((records) => {
            for (let record of records) {
                setAssets(assets => ({...assets, [record.fields.Nombre]: record.fields.Imagen[0].url}));
            }
            setAssets(assets => ({...assets, loading: false}));
        },(err) => err && console.error(err));
    },[db]);

    return assets;
}

export default useAssets;