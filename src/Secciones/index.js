import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Spinner, Col, Card } from 'react-bootstrap';
import { useSections } from './useSections';
import { usePublications } from './usePublications';

const Secciones = ({filter, setTitle}) =>
{

    const sections = useSections();
    const { id } = useParams();
    const publications = usePublications(id);
    useEffect(() => { setTitle("Secciones") },[])
    
    if (sections.loading || publications?.loading) return (
        <Container fluid style={{padding: 0}}>
            <Row style={{justifyContent: 'center', height: '30vh', alignItems: 'center'}}>
                <Spinner animation="border"/>
            </Row>
        </Container>
    )

    if (!id) return sections.filter(section =>  !filter || section.title.includes(filter)).map((section, index) =>
        <Col key={index} style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}} xs={12} md={6} lg={4}>
            <Link to={`/Secciones/${section.id}`} style={{width: '90%', textDecoration: 'none'}}>
                <Card style={{ height: '100%'}}>
                    <Card.Img variant="top" src={section.img[0].url} />
                    <Card.Body>
                    <Card.Title style={{textAlign: 'left'}}>{section.title}</Card.Title>
                    <Card.Text style={{textAlign: 'justify'}}>{section.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )

    if (publications?.length) return publications.filter(publication =>  !filter || publication.title.includes(filter)).map((publication, index) =>
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
    );
    
    return (
        <div style={{width: '100%', padding: '20px'}}>
            <h2>Parece que aún no hay articulos en esta sección</h2>
        </div>
    )

}

export default Secciones;