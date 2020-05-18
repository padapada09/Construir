import React from 'react';
import { Container, Row, Spinner, Col, Card } from 'react-bootstrap';
import { usePublications } from './usePublications';

const Home = ({filter}) =>
{

    const publications = usePublications();

    if (publications.loading) return (
        <Container fluid style={{padding: 0}}>
            <Row style={{justifyContent: 'center', height: '30vh', alignItems: 'center'}}>
                <Spinner animation="border"/>
            </Row>
        </Container>
    )
    
    return publications.filter(publication =>  !filter || publication.title.includes(filter)).map((publication, index) =>
        <Col key={index} style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}} xs={12} md={6} lg={4}>
            <Card style={{ width: '90%'}} onClick={() => window.location.href = `/Publicacion/${publication.document}`} as="button">
                <Card.Img variant="top" src={publication.img.url} />
                <Card.Body>
                <Card.Title style={{textAlign: 'left'}}>{publication.title}</Card.Title>
                <Card.Text style={{textAlign: 'justify'}}>{publication.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )

}

export default Home;