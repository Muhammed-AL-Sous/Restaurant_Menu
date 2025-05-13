import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

function NavBar({ filterBySearch }) {
  const [searchWord, setSearchWord] = useState("");

  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="brand-container">
          <div className="brand-logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 navbar-links"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <span className="text-white text-center brand-name">
              Resto Restaurant
            </span>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="عن ماذا تبحث ...؟"
              className="search-input"
              aria-label="Search"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />
            <Button
              variant="outline-primary"
              className="mx-2"
              onClick={() => {
                filterBySearch(searchWord);
                setSearchWord("");
              }}
            >
              بحث
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
