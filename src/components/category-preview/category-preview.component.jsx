import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles";

const CategoryPreview = ({ items, title }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title.toLowerCase()}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {items &&
          items
            .filter((_, indx) => indx < 4)
            .map((item, indx) => (
              <ProductCard key={item.id || indx} item={item} title={title} />
            ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
