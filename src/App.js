import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Nosotros from './Nosotros';
import Secciones from './Secciones';
import Publicacion from './Publicacion';

const App = () =>
{

  const [search, setSearch] = useState(null);
  const [collapsed, collapse] = useState(false);

  return (
    <Router>
      <Container fluid style={{padding: 0}}>
        <Row noGutters style={{justifyContent: 'center', background: 'red', position: 'sticky', top: '0px', zIndex: 9999}}>
          <Col xs={12}>
            <Navbar bg="light" expand="lg" onToggle={() => collapse(!collapsed)} expanded={collapsed}>
              <Navbar.Brand href="/">Construir</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" activeKey={window.location.pathname}>
                  <Nav.Link href="/Secciones">Secciones</Nav.Link>
                  <Nav.Link href="/Nosotros">Nosotros</Nav.Link>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Form onSubmit={(event) => event.preventDefault() || collapse(false)}>
                  <InputGroup>
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2" onChange={({target}) => setSearch(target.value)}/>
                    <InputGroup.Append>
                      <Button variant="outline-info"><span role="img" aria-label="">🔎</span></Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row noGutters style={{justifyContent: 'center'}}>
          <Col xs={12} md={10} lg={9} xl={8}>
            <Row noGutters>
              <Switch>
                <Route exact path="/">
                  <Home filter={search}/>
                </Route>
                <Route path="/Nosotros">
                  <Nosotros filter={search}/>
                </Route>
                <Route filter={search} path="/Secciones">
                  <Secciones />
                </Route>
                <Route filter={search} path="/Publicacion/:id">
                  <Publicacion />
                </Route>
              </Switch>
            </Row>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
