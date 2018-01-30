import React from 'react';
import { Card, Input } from 'reactstrap';
export const Search = (props) => {
    const onChange = (e) => {
        props.handleChange({ [e.target.name]: e.target.value })
    }
    return (
        <Card>
            <Input onChange={onChange} type="search" name="search" id="exampleSearch" placeholder="search" />
        </Card>
    );

}
