import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectHomeItems } from "../../../store/home/home.selector";
import HomeItems from "../../home-items/home-items.component";
import { HomeContainer } from "./home.styles";

const Home = () => {
  /*
const lastItemId =
    SHOP_DATA[SHOP_DATA.length - 1].items[
      SHOP_DATA[SHOP_DATA.length - 1].items.length - 1
    ]
  const lastItem = SHOP_DATA.reduce(
    (acc, cur) => acc.concat(cur.items),
    []
  ).pop();*/

  /* return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const items = categoriesMap[title];
        return (
          <>
            <h2>
              <span>{title.toUpperCase()}</span>
            </h2>
            {items
              .filter((_, indx) => indx < 1)
              .map((item, indx) => (
                <ProductCard key={item.id || indx} item={item} title={title} />
              ))}
          </>
        );
      })}
    </>
  );*/
  const items = useSelector(selectHomeItems);

  return (
    <HomeContainer>
      {items.map((item) => (
        <HomeItems key={item.id} items={item} />
      ))}
    </HomeContainer>
  );
};
export default Home;
