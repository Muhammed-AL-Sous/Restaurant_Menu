import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

const CardsList = ({ itemsData }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.1, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="mt-2">
      {itemsData.map((card) => (
        <motion.div
          key={card.id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible" // Scroll Reveal Effect
          viewport={{ once: true, amount: 0.2 }} // يظهر عند ظهور 20% من العنصر
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 4px 5px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Card className="d-flex flex-row flex-wrap flex-md-nowrap justify-content-sm-center shadow my-3">
            <Card.Img src={card.img} alt="card-img" className="card-Img" />
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
  );
};

export default CardsList;
