import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAndAddCategoriesStart } from "../../../store/categories/categories.action";
import {
  selectCategoriesArray,
  selectIsLoading,
} from "../../../store/categories/categories.selectors";
import { homeFetchStart } from "../../../store/home/home.action";
import { isAdminExist } from "../../../store/user/user.selectors";
import Spinner from "../../spinner/spinner.component";
import { AddItemsContainer, AddItemsForm, Input } from "./add-items.styles";
const defaultField = {
  id: null,
  name: "",
  imageUrl: "",
  price: "",
  rating: "",
};
const defaultHomeField = {
  id: null,
  title: "",
  imageUrl: "",
  route: "",
};

const AddItems = () => {
  const categoriesArray = useSelector(selectCategoriesArray);
  const isLoading = useSelector(selectIsLoading);
  const admin = useSelector(isAdminExist);
  const [homePage, setHomePage] = useState(false);
  useEffect(() => {
    setShopData(categoriesArray);
  }, [categoriesArray]);
  const dispatch = useDispatch();
  const [shopData, setShopData] = useState(categoriesArray);
  const [newItem, setNewItem] = useState(defaultField);
  const [homeItem, setHomeItem] = useState(defaultHomeField);
  const [selectedTitle, setSelectedTitle] = useState("");

  const addItem = (title, newItem) => {
    newItem.id = Date.now();
    let updatedShopData = shopData.map((data) => {
      if (data.title === title) {
        data.items.push(newItem);
      }
      return data;
    });

    const titleExists = updatedShopData.find((data) => data.title === title);
    if (!titleExists) {
      updatedShopData = [...updatedShopData, { title, items: [newItem] }];
    }

    setShopData(updatedShopData);
    dispatch(updateAndAddCategoriesStart(updatedShopData));

    setNewItem(defaultField);
  };

  const handleAddItem = (event) => {
    const { price, rating } = newItem;
    event.preventDefault();
    if (price === 0 || rating === 0) return;
    addItem(selectedTitle, newItem);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewItem({ ...newItem, [name]: value });
  };
  const handleHomeSubmit = (e) => {
    e.preventDefault();
    homeItem.id = Date.now();
    homeItem.title =
      homeItem.title.charAt(0).toUpperCase() +
      homeItem.title.slice(1).toLowerCase();

    dispatch(homeFetchStart(homeItem));
    setHomeItem(defaultHomeField);
  };
  const handleHomeInputChange = (event) => {
    const { name, value } = event.target;
    setHomeItem({ ...homeItem, [name]: value });
  };
  const clicked = (e) => {
    if (e.target.value === "Home Page") {
      setHomePage(true);
    } else {
      setHomePage(false);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <AddItemsContainer>
          <select defaultValue={"DEFAULT"} onChange={clicked}>
            <option value="DEFAULT" disabled>
              Current Titles ...
            </option>
            {admin && <option value="Home Page">Home Page</option>}
            {shopData.map(({ title }) => {
              return (
                <option key={title} value={title}>
                  {title}
                </option>
              );
            })}
          </select>
          {homePage ? (
            <AddItemsForm onSubmit={handleHomeSubmit}>
              <Input
                type="text"
                name="title"
                value={homeItem.title}
                placeholder="Enter The Title"
                onChange={handleHomeInputChange}
                required
              />

              <Input
                type="text"
                name="imageUrl"
                value={homeItem.imageUrl}
                placeholder="Enter image URL"
                onChange={handleHomeInputChange}
                required
              />
              <Input
                type="text"
                name="route"
                value={homeItem.route}
                placeholder="Enter The route for example: shop/... "
                onChange={handleHomeInputChange}
                required
              />
              <button>submit</button>
            </AddItemsForm>
          ) : (
            <AddItemsForm onSubmit={handleAddItem}>
              <Input
                type="text"
                name="title"
                placeholder="Enter New Title"
                onChange={(event) =>
                  setSelectedTitle(
                    event.target.value.charAt(0).toUpperCase() +
                      event.target.value.slice(1).toLowerCase()
                  )
                }
                required
              />
              <Input
                type="text"
                name="name"
                value={newItem.name}
                placeholder="Enter name"
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="imageUrl"
                value={newItem.imageUrl}
                placeholder="Enter image URL"
                onChange={handleInputChange}
                required
              />
              <Input
                type="number"
                name="price"
                value={newItem.price}
                placeholder="Enter price"
                onChange={handleInputChange}
                required
                min={1}
              />
              <Input
                type="number"
                name="rating"
                value={newItem.rating}
                placeholder="Enter rating"
                onChange={handleInputChange}
                min={1}
                required
                max={5}
              />
              <button>submit</button>
            </AddItemsForm>
          )}
        </AddItemsContainer>
      )}
    </>
  );
};
export default AddItems;
