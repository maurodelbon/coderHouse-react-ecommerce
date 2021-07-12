import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import CartWidget from '../cartwidget/CartWidget';

export default function NavBar() {
    return (
        <div>
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Vibralta</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Almentacion</Nav.Link>
          <Nav.Link href="#features">Yoga</Nav.Link>
          <Nav.Link href="#pricing">Productos</Nav.Link>
          <CartWidget />
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
        </div>
    )
}
