import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useRef } from "react";

function NavBar({ filterBySearch }) {
  const [searchWord, setSearchWord] = useState("");
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    filterBySearch(searchWord);
    setSearchWord("");

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container className="p-relative">
        <Navbar.Brand className="brand-container">
          <span className="brand-logo"></span>
        </Navbar.Brand>
        <div className="text-white text-center brand-name">
          Resto Restaurant
        </div>
        <Form className="d-flex form-search" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="عن ماذا تبحث ...؟"
            className="search-input"
            aria-label="Search"
            value={searchWord}
            ref={inputRef}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <Button variant="outline-primary" className="mx-2" type="submit">
            بحث
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
