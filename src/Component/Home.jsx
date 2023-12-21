import React, { useContext } from 'react';
import { cartcontext } from '../Context/Context';
import SingleProducts from './SingleProducts';
import '../Css/Home.css'
import Filter from './Filter';
import '../Css/Responsive.css'
function Home() {
    const value = useContext(cartcontext)
    const { state, productState } = value
    const { byStock, byFastDelivery, sort, byRating, searchQuery } = productState
    const transformProducts = () => {
        let sortedProducts = state.products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
        }

        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
        }

        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (prod) => prod.ratings >= byRating
            );
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery)
            );
        }

        return sortedProducts;
    };


    return (
        <div className='Home'>
            <Filter />
            <div className="product-container">
                {transformProducts().map((product) => (
                    <SingleProducts product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
