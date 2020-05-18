import React from 'react';
import { Container, Row, Spinner, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PDFViewer from 'pdf-viewer-reactjs'
import { useDocument } from './useDocument';
import ReactMarkDown from 'react-markdown';
import styles from './document.css';

const Publicacion = () =>
{
    const { id } = useParams();
    const document = useDocument(id);

    if (document.loading) return (
        <Container fluid style={{padding: 0}}>
            <Row style={{justifyContent: 'center', height: '30vh', alignItems: 'center'}}>
                <Spinner animation="border"/>
            </Row>
        </Container>
    );

    return (
        <Col xs={12} style={{padding: '20px'}}>
            <ReactMarkDown source={document.content} />
        </Col>
    );
}

export default Publicacion;