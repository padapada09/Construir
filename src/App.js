import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from './Home';
import Nosotros from './Nosotros';
import Secciones from './Secciones';
import Publicacion from './Publicacion';
import useAssets from './useAssets';

const App = () =>
{

  const [search, setSearch] = useState(null);
  const [title, setTitle] = useState("Camino al puente");
  const [collapsed, collapse] = useState(false);
  const assets = useAssets();

  return (
    <Router>
      <Container fluid style={{padding: 0}}>
        <Row noGutters style={{justifyContent: 'center', background: 'red', position: 'sticky', top: '0px', zIndex: 9999}}>
          <Col xs={12}>
            <Navbar bg="light" expand="lg" onToggle={() => collapse(!collapsed)} expanded={collapsed} style={styles.shadow}>
              <Navbar.Brand href="/" style={{display: 'flex', alignItems: 'center', maxWidth: '60%'}}>
                <img style={{width: '3rem', height: '3rem', borderRadius: '10rem'}} alt="Logo de camino al puente" src={assets.logo}/>
                <h1 style={{margin: '0px', flex: 1, textAlign: 'left', paddingLeft: '20px'}}>{window.innerWidth < 600 ? title : 'Camino al puente'}</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavLink activeStyle={{color: 'black'}} onClick={() => collapse(false)} style={{textDecoration: 'none', color: 'grey', margin: '10px'}} exact to="/"><Nav.Item>Home</Nav.Item></NavLink>
                  <NavLink activeStyle={{color: 'black'}} onClick={() => collapse(false)} style={{textDecoration: 'none', color: 'grey', margin: '10px'}} to="/Secciones"><Nav.Item>Secciones</Nav.Item></NavLink>
                  <NavLink activeStyle={{color: 'black'}} onClick={() => collapse(false)} style={{textDecoration: 'none', color: 'grey', margin: '10px'}} to="/Nosotros"><Nav.Item>Nosotros</Nav.Item></NavLink>
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
                  <Home filter={search} setTitle={setTitle}/>
                </Route>
                <Route path="/Nosotros">
                  <Nosotros setTitle={setTitle} assets={assets}/>
                </Route>
                <Route path={["/Secciones/:id","/Secciones"]}>
                  <Secciones filter={search} setTitle={setTitle}/>
                </Route>
                <Route path="/Publicacion/:id">
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

const styles = {
  shadow: {
    boxShadow: '0px 2px 20px -10px rgba(66,66,66,1)'
  }
}

export default App;
