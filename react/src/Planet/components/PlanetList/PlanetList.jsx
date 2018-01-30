import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
export const PlanetList = (props) => {
    const renderItems = () => {
        const { list } = props;
        return list.map(((item, index) => (<ListGroupItem key={index}>{item.name}</ListGroupItem>)));
    }

    return (

        <ListGroup>
            {renderItems()}
        </ListGroup>

    );

}
