import React from 'react';
import { ListGroupItem, Badge } from 'react-bootstrap';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = ({empleado}) => {
    return (
        <ListGroupItem className='d-flex '><EmpleadoAvatar pic={empleado.pic}></EmpleadoAvatar>
        <div className='d-flex flex-column justify-content-around'>
            <h5>{empleado.fullName}</h5>
            <small className="text-muted">{empleado.title} <Badge bg="primary">{empleado.department}</Badge></small>
        </div></ListGroupItem>
    );
};

export default EmpleadoRow;