import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Spinner, Col, Card } from 'react-bootstrap';
import { usePublications } from './usePublications';

const Home = ({filter, setTitle}) =>
{

    const publications = usePublications();

    useEffect(() => { setTitle("Camino al puente")},[]);

    if (publications.loading) return (
        <Container fluid style={{padding: 0}}>
            <Row style={{justifyContent: 'center', height: '30vh', alignItems: 'center'}}>
                <Spinner animation="border"/>
            </Row>
        </Container>
    )
    
    return publications.filter(publication =>  !filter || publication.Titulo.includes(filter)).map((publication, index) =>
        <Col key={index} style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}} xs={12} md={6} lg={4}>
            <Link to={`/Publicacion/${publication.Documento}`} style={{width: '90%', textDecoration: 'none'}}>
                <Card style={{ height: '100%'}}>
                    <Card.Img variant="top" src={publication.Imagen.url} style={{maxHeight: '20rem'}}/>
                    <Card.Body>
                        <Card.Title style={{textAlign: 'left'}}>{publication.Titulo}</Card.Title>
                        <Card.Text style={{textAlign: 'justify'}}>{publication.Descripcion}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )

}

export default Home;