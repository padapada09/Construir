import React from 'react';
import { Container, Row, Spinner, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDocument } from './useDocument';
import ReactMarkDown from 'react-markdown';
import styles from './document.module.scss';

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
            <h1>{document.Autores.length > 1 ? 'Autores:' : 'Autor:'}</h1>
            {   document.nombre_autores?.length &&
                <div className={styles.Autores}>
                    {document.nombre_autores.map((nombre, index) => (
                        <div key={index} className={styles.Perfil}>
                            <img className={styles.Foto} src={document.foto_autores[index].url} alt={`Imagen de la publicación ${nombre}`}/>
                            <div className={styles.Nombre}>{`${nombre}`}</div>
                        </div>
                    ))}
                </div>
            }
            <h1>{document.Titulo}</h1>
            <ReactMarkDown escapeHtml={false} source={document.Contenido} />
            {   document.nombre_fuentes?.length &&
                <>
                    <h1>Fuentes:</h1>
                    <div className={styles.Autores}>
                        {document.nombre_fuentes.map((nombre, index) => (
                            <a key={index} className={styles.Perfil} href={document.href_fuentes[index]}>
                                <div className={styles.Nombre}>{`${nombre}`}</div>
                            </a>
                        ))}
                    </div>
                </>
            }
        </Col>
    );
}

export default Publicacion;