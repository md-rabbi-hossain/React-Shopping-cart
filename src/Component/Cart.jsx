import React, { useContext, useEffect, useState } from 'react';
import { cartcontext } from '../Context/Context';
import { Button, Col, FormControl, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';
import '../Css/Responsive.css'
function Cart() {
    const context = useContext(cartcontext)
    const [total, settotal] = useState();
    const { state: { cart, qty }, dispatch } = context

    useEffect(() => {
        settotal(cart.reduce((acc, current) => acc + Number(current.price) * current.qty, 0))
    }, [cart]);

    return (
        <div className='Home'>
            <div className="product-container">
                <ListGroup>
                    {cart.map((product) => (
                        <ListGroupItem>
                            <Row>
                                <Col md={2}>
                                    <Image src={product.image} alt={product.name} fluid rounded />
                                </Col>
                                <Col md={2}>
                                    <span>{product.name}</span>
                                </Col>
                                <Col md={2}>$ {product.price}</Col>
                                <Col md={2}>
                                    <Rating rating={product.ratings} />
                                </Col>
                                <Col md={2}>
                                    <FormControl as='select'
                                        value={product.qty}
                                        onChange={(e) =>
                                            dispatch({
                                                type: "CHANGE_CART_QTY",
                                                payload: {
                                                    id: product.id,
                                                    qty: e.target.value,
                                                },
                                            })
                                        } >
                                        {[...Array(product.inStock).keys()].map((x) => (
                                            <option key={x + 1}>{x + 1}</option>
                                        ))}
                                    </FormControl>
                                </Col>
                                <Col md={2}>
                                    <Button
                                        type="button"
                                        variant="light"
                                        onClick={() =>
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: product,
                                            })
                                        }
                                    >
                                        <AiFillDelete fontSize="20px" />
                                    </Button>


                                </Col>


                            </Row>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
            <div className="filters summury">
                <span className='title'>subTotal ({cart.length})</span>
                <span style={{ fontSize: '20px' }}> Total${total} </span>
                <Button type='button' disabled={cart.length === 0}>Checkout</Button>
            </div>
        </div>
    );
}
export default Cart;

