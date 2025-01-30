import React from "react";
import { useParams } from "react-router-dom";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

const CategoryPage = () => {
  const { category } = useParams();
  const titles = {
    masculinos: "Perfumes Masculinos",
    femininos: "Perfumes Femininos",
    importados: "Perfumes Importados",
  };

  return (
    <div>
      <h2>{titles[category]}</h2>
      <ProductSection title="" category={category} />
      <Footer /> {}
    </div>
  );
};

export default CategoryPage;
