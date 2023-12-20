import React, { useContext } from 'react';
import { Badge, Button, ButtonGroup, Col, Container, Dropdown, FormControl, Navbar, NavbarText, Placeholder } from 'react-bootstrap';
import '../Css/Header.css'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { cartcontext } from '../Context/Context';
import { AiFillDelete } from 'react-icons/ai';


function Header() {
    const value = useContext(cartcontext)
    const { state, dispatch } = value
    return (
        <div>
            <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>Shopping Cart</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-between">
                        <div className="d-flex">
                            <Navbar.Text className='search'>
                                <FormControl style={{ width: 500, marginLeft: 150 }} placeholder='Search a product' />
                            </Navbar.Text>
                        </div>
                        <Dropdown drop='down-centered' className='mr-5' style={{ marginRight: 120 }}>
                            <Dropdown.Toggle variant="success">
                                <FaShoppingCart />
                                <Badge bg="success">{state.cart.length}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-left" style={{ minHeight: 300, minWidth: 300 }}>

                                {state.cart.length > 0 ? (
                                    <>
                                        {state.cart.map((prod) => (
                                            <span className="cartitem" key={prod.id}>
                                                <img
                                                    src={prod.image}
                                                    className="cartItemImg"
                                                    alt={prod.name}
                                                />
                                                <div className="cartItemDetail">
                                                    <span>{prod.name}</span>
                                                    <span>$ {prod.price.split(".")[0]}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod,
                                                        })
                                                    }
                                                />
                                            </span>
                                        ))}

                                        <Link to="/cart">
                                            <Button style={{ width: "95%", margin: "0 10px" }}>
                                                Go To Cart
                                            </Button>
                                        </Link>
                                    </>
                                ) : (
                                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
