import React, { useContext } from 'react';
import { cartcontext } from '../Context/Context';
import SingleProducts from './SingleProducts';
import '../Css/Home.css'
import Filter from './Filter';

function Home() {
    const value = useContext(cartcontext)
    const { state } = value
    return (
        <div className='Home'>
            <Filter />
            <div className="product-container">
                {state.products?.map((product) => (
                    <SingleProducts product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
