import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../Css/Filter.css'
import Rating from './Rating';

function Filter() {
    const [rate, setrate] = useState(2);
    return (
        <div className='filters'>
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={`inline-1`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={`inline-2`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={`inline-3`}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type="checkbox"
                    id={`inline-4`}
                />
            </span>

            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating rating={rate} onClick={(i) => setrate(i)} style={{ cursor: "pointer" }} />
            </span>
            <Button variant='light'> clear filter</Button>
        </div>
    );
}

export default Filter















