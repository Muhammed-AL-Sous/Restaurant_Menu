import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./Components/NavBar.jsx";
import Categories from "./Components/Categories.jsx";
import CardsList from "./Components/CardsList.jsx";
import { cardsData } from "./CardsData.js";
import { useState } from "react";

const App = () => {
  const [itemsData, setItemsData] = useState(cardsData);

  const filterItems = (category) => {
    if (category === "الكل") {
      setItemsData(cardsData);
    } else {
      const filteredItems = cardsData.filter(
        (item) => item.category === category
      );
      setItemsData(filteredItems);
    }
  };

  const filterBySearch = (word) => {
    if (word !== "") {
      const filteredItems = cardsData.filter(
        (item) => item.title.toLowerCase().includes(word.toLowerCase())
        // OR
        // cardsData.filter((item) => item.title === word)
      );
      setItemsData(filteredItems);
    } else {
      setItemsData(cardsData);
    }
  };

  return (
    <div className="app">
      <Row>
        <NavBar filterBySearch={filterBySearch} />
      </Row>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="text-center mt-4 ">
              <h1 className="fw-bold menu-name">قائمة الطعام</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center mt-4">
            <Categories filterItems={filterItems} />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <CardsList itemsData={itemsData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
