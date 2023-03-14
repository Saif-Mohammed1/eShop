import {
  AddItem,
  Details,
  Form,
  Info,
  ProductCardContainer,
  RemoveItem,
  UpdateItem,
} from "./product.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { addItemToCart } from "../../store/cart/cart.action";
import { useEffect, useState } from "react";
import { isAdminExist } from "../../store/user/user.selectors";
import {
  fetchCategoriesStart,
  updateAndAddCategoriesStart,
} from "../../store/categories/categories.action";
import { selectCategoriesArray } from "../../store/categories/categories.selectors";
import { deleteFormField } from "../../utils/firebase/firebase.utils";
const defaultFiled = { id: null, name: "", price: "", imageUrl: "" };
const ProductCard = ({ item, title }) => {
  const categoriesArray = useSelector(selectCategoriesArray);
  const [shopData, setShopData] = useState(categoriesArray);
  const IsAdmin = useSelector(isAdminExist);
  const dispatch = useDispatch();
  useEffect(() => {
    setShopData(categoriesArray);
  }, [categoriesArray, dispatch]);

  const [updateItems, setUpdateItems] = useState(defaultFiled);
  const { name, price, imageUrl, rating } = item;
  const [isEdit, setEdit] = useState(false);
  const cartItems = useSelector(selectCartItems);

  const addItemsHandler = () => dispatch(addItemToCart(cartItems, item));
  const updateItem = (title, updatedItem) => {
    title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    const updatedShopData = shopData.map((data) => {
      if (data.title === title) {
        const index = data.items.findIndex(
          (item) => item.id === updatedItem.id
        );

        data.items[index] = { ...data.items[index], ...updatedItem };
      }
      return data;
    });
    setShopData(updatedShopData);

    dispatch(updateAndAddCategoriesStart(shopData));

    setUpdateItems(defaultFiled);
    setEdit(false);
  };
  const handleAddItem = (event) => {
    event.preventDefault();
    updateItems.id = item.id;

    if (price === 0 || rating === 0) return;

    updateItem(title, updateItems);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUpdateItems({ ...updateItems, [name]: value });
  };
  const removeItem = async () => {
    await deleteFormField(title, item.id);
    dispatch(fetchCategoriesStart());
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Details>
        {isEdit ? (
          <Form onSubmit={handleAddItem}>
            <div>
              <input
                type="text"
                placeholder="Enter New Name"
                name="name"
                value={updateItems.name}
                onChange={handleInputChange}
              />
              <input
                name="price"
                value={updateItems.price}
                type="number"
                placeholder="Enter New Price"
                onChange={handleInputChange}
                min={0}
              />
              <input
                name="imageUrl"
                value={updateItems.imageUrl}
                type="text"
                placeholder="Enter New imageUrl"
                onChange={handleInputChange}
              />
            </div>
            <input type={"submit"} />
          </Form>
        ) : (
          <>
            <span>{name}</span>
            <Info>
              <p>{price}$</p>
              <div>
                {rating &&
                  Array(rating * 1)
                    .fill()
                    .map((_, i) => <p>⭐</p>)}
              </div>
            </Info>
          </>
        )}
        <AddItem onClick={addItemsHandler}>Add Product</AddItem>
        {IsAdmin && (
          <>
            <UpdateItem className="update" onClick={() => setEdit(true)}>
              Update Product
            </UpdateItem>
            <RemoveItem className="remove" onClick={removeItem}>
              X
            </RemoveItem>
          </>
        )}
      </Details>
    </ProductCardContainer>
  );
};
export default ProductCard;
