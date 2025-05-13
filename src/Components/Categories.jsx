import { motion } from "framer-motion";
import { cardsData } from "../CardsData";

const Categories = ({ filterItems }) => {
  const categoriesList = cardsData.map((cat) => cat.category);
  const uniqueCategories = ["الكل", ...new Set(categoriesList)];

  return (
    <div>
      <ul className="categories-list d-flex justify-content-center gap-3 list-unstyled">
        {uniqueCategories.map((category, index) => (
          <motion.li
            key={category}
            className="category-item fs-4 rounded shadow fw-semibold text-warning border p-2"
            style={{ cursor: "pointer" }}
            onClick={() => filterItems(category)}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {category}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
