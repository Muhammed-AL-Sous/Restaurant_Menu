import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";

const CardsList = ({ itemsData }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <Row>
      <Col xs={12}>
        <div className="mt-2">
          {itemsData.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="d-flex flex-column flex-md-row align-items-center shadow my-3 rounded mx-auto">
                <Card.Img
                  src={card.img}
                  alt={card.title}
                  className="card-Img mx-auto"
                  loading="lazy"
                />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Card.Title className="fs-3 fw-bold text-secondary">
                      {card.title}
                    </Card.Title>
                    <Card.Text className="fw-bold fs-5 text-danger">
                      السعر : {card.price}
                    </Card.Text>
                  </div>
                  <Card.Text className="lh-lg">{card.description}</Card.Text>
                  <Card.Subtitle className="mt-2 text-muted fw-bold fs-5">
                    {card.subtitle}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default CardsList;
