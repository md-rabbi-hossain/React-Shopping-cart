import { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { Cartreducer, productReducer } from "./reducer";

const cartcontext = createContext();

const Stock = [0, 3, 5, 6, 7];
const Rating = [1, 2, 3, 4, 5];
faker.seed(99);
const ContextProvider = ({ children }) => {
  const products = [...Array(100)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: Math.floor(Math.random() * Stock.length),
    fastDelivery: faker.datatype.boolean(),
    ratings: Math.floor(Math.random() * Rating.length),
  }));

  const [state, dispatch] = useReducer(Cartreducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <cartcontext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </cartcontext.Provider>
  );
};

export { ContextProvider, cartcontext };

// productId: faker.string.uuid(),
// productName: faker.commerce.productName(),
// productPrice: faker.commerce.price(),
// fastdelivery: faker.datatype.boolean(),
// rating: faker.faker.random.arrayElement([1, 2, 3, 4, 5]),
