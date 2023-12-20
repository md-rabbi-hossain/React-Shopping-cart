import React, { useContext } from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'react-bootstrap';
import Rating from '../Component/Rating'
import { cartcontext } from '../Context/Context';
function SingleProducts({ product }) {

    const context = useContext(cartcontext)
    const { state, dispatch } = context

    console.log(state);
    return (
        <div className='product' style={{ width: '30%', margin: '15px' }}>
            <Card>
                <CardImg variant='top' src={product.image} alt={product.name}>
                </CardImg>
                <CardBody>
                    <CardTitle>{product.name}</CardTitle>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>$ {product.price.split(".")[0]}</span>
                        {product.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 days delivery</div>
                        )}
                        <Rating rating={product.rating} />
                    </Card.Subtitle>
                    {state.cart.some((p) => p.id === product.id) ? (
                        <Button
                            variant="danger"
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: product,
                                })
                            }
                        >
                            Remove from Cart
                        </Button>
                    ) : (
                        <Button
                            onClick={() =>
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: product,
                                })
                            }
                            disabled={!product.inStock}
                        >
                            {!product.inStock ? "Out of Stock" : "Add to Cart"}
                        </Button>
                    )}
                </CardBody>
            </Card>
        </div>
    );
}

export default SingleProducts;
