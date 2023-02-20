import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { homeItemsStart } from "../../store/home/home.action";
import { deleteHomeForm } from "../../utils/firebase/firebase.utils";

import {
  BackgroundImage,
  Body,
  Button,
  HomeItemContainer,
} from "./home-items.styles";

const HomeItems = ({ items }) => {
  const { imageUrl, title, route } = items;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onNavigateHandler = () => navigate(route);
  const deleteItemHandler = async () => {
    await deleteHomeForm(title);
    dispatch(homeItemsStart());
  };
  return (
    <HomeItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
      <Button onClick={deleteItemHandler}>X</Button>
    </HomeItemContainer>
  );
};

export default HomeItems;
