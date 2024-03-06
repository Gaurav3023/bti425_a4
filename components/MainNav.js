import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MainNav() {
  const router = useRouter();
  const [searchField, setSearchField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchField.trim() !== "") {
      router.push(`/artwork?title=true&q=${encodeURIComponent(searchField.trim())}`);
      setSearchField("");
    }
  };

  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">Gaurav Saini</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home<span className="visually-hidden">(current)</span></Nav.Link>
            <Nav.Link href="/search" className="nav-link">Advanced Search</Nav.Link>
          </Nav>
          <Form onSubmit={handleSubmit} className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-sm-2"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
            />
            <Button type="submit" variant="success" className="my-2 my-sm-0">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
