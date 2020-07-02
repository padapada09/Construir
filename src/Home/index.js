import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Spinner, Col, Card } from 'react-bootstrap';
import { usePublications } from './usePublications';

const Home = ({filter, setTitle}) =>
{

    const publications = usePublications();

    useEffect(() => { 
        setTitle("Camino al puente")
    },[setTitle]);

    if (publications.loading) return (
        <Container fluid style={{padding: 0}}>
            <Row style={{justifyContent: 'center', height: '30vh', alignItems: 'center'}}>
                <Spinner animation="border"/>
            </Row>
        </Container>
    )
    
    return publications.filter(publication =>  !filter || publication.Titulo[0].toLowerCase().includes(filter.toLowerCase())).map((publication, index, {length}) =>
        <Col key={index} xs={12} md={6} lg={4}
        style={{...styles.card, marginBottom: (index === length-1 && window.innerWidth < 600) ? 40 : 0 }}>
            <Link to={`/Publicacion/${publication.Documento}`} style={{width: '90%', textDecoration: 'none'}}>
                <Card style={{ height: '100%'}}>
                    <Card.Img variant="top" src={publication.Imagen.url} style={{maxHeight: '20rem'}}/>
                    <div style={{flex: 1}}/>
                    <Card.Body style={{flex: 0}}>
                        <Card.Title style={{textAlign: 'left'}}>{publication.Titulo}</Card.Title>
                        <Card.Text style={{textAlign: 'justify'}}>{publication.Descripcion}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )

}

const styles = {
    card: {
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '20px'
    }
}

export default Home;