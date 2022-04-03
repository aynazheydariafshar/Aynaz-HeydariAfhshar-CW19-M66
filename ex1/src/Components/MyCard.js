import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from "react-bootstrap";

const MyCard = (props) => {
    return <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.price}</Card.Text>
            <Button variant="primary" onClick={props.handleclick}>Add Card</Button>
        </Card.Body>
    </Card>
}

MyCard.propTypes = {
    title : PropTypes.string,
    price : PropTypes.number,
    handleclick : PropTypes.func,
    image : PropTypes.string
}


export default MyCard;