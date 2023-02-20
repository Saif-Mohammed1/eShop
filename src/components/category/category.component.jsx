import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories.selectors";
import ProductCard from "../product-card/product-card.component";
import { BeforeProductCard } from "../product-card/product.styles";
import Spinner from "../spinner/spinner.component";
import { CategoryContainer } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  const [product, setProduct] = useState(categoriesMap[category]);
  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          <h2>{category.toLocaleUpperCase()} </h2>
          <BeforeProductCard>
            {product &&
              product.map((items) => (
                <ProductCard key={items.id} item={items} title={category} />
              ))}
          </BeforeProductCard>
        </CategoryContainer>
      )}
    </>
  );
};
export default Category;
