import { createContext, useReducer } from "react";
import { faker } from '@faker-js/faker'
import { Cartreducer } from "./reducer";




const cartcontext = createContext()

const Stock = [0, 3, 5, 6, 7]
const Rating = [1, 2, 3, 4, 5]
faker.seed(99)
const ContextProvider = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.url(),
        inStock: Math.floor(Math.random() * Stock.length),
        fastDelivery: faker.datatype.boolean(),
        ratings: Math.floor(Math.random() * Rating.length)
    }));

    const [state, dispatch] = useReducer(Cartreducer, {
        products: products,
        cart: []
    });

    return <cartcontext.Provider value={{ state, dispatch }}>
        {children}
    </cartcontext.Provider>
}

export { ContextProvider, cartcontext }



























// productId: faker.string.uuid(),
// productName: faker.commerce.productName(),
// productPrice: faker.commerce.price(),
// fastdelivery: faker.datatype.boolean(),
// rating: faker.faker.random.arrayElement([1, 2, 3, 4, 5]),