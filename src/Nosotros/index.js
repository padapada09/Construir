import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useMessages } from './useMessages';

const Nosotros = ({setTitle}) =>
{

    const messages = useMessages();

    useEffect(() => { setTitle("Nosotros") },[]);

    if (messages.loading) return (
        <Container fluid style={{padding: 0}}>
            <Row style={{justifyContent: 'center', height: '30vh', alignItems: 'center'}}>
                <Spinner animation="border"/>
            </Row>
        </Container>
    )

    return (
        <Container style={{paddingTop: '20px'}}>
            <img src="https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/e35/28151926_1925024434479508_5873166034076172288_n.jpg?_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=SVc7PO6Esr0AX8WviQ4&se=7&oh=510ae38d44ebdaa42547ad3247a1b5c5&oe=5EEB2EF3"/>
            {
                messages.map((message, index) =>
                    <div key={index}>
                        <h1>{message.title}</h1>
                        <p>{message.description}</p>
                    </div>
                )
            }
        </Container>
    );
}

export default Nosotros;