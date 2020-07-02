import React, { useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useMessages } from './useMessages';

const Nosotros = ({setTitle, assets}) =>
{

    const messages = useMessages();

    useEffect(() => { 
        setTitle("Nosotros") 
    },[setTitle]);

    if (messages.loading) return (
        <Container fluid style={{padding: 0}}>
            <Row style={{justifyContent: 'center', height: '30vh', alignItems: 'center'}}>
                <Spinner animation="border"/>
            </Row>
        </Container>
    )

    return (
        <Container style={{paddingTop: '20px'}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', padding: 40}}>
                <img src={assets.nosotros} alt="Imagen del grupo"/>
            </div>
            {
                messages.map((message, index) =>
                    <div key={index}>
                        <h1>{message.title}</h1>
                        <p>{message.description}</p>
                    </div>
                )
            }
            <div style={{height: 100}}/>
        </Container>
    );
}

export default Nosotros;