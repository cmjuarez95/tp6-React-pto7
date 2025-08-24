import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = () => {
    return (
        <ListGroupItem className='d-flex'><EmpleadoAvatar></EmpleadoAvatar><div className='d-flex flex-column justify-content-around'><h5 className='mx-2'>Nombre</h5> <div className='d-flex flex-row '><p className='mx-2'>TITLE</p><p>departamento</p></div></div></ListGroupItem>
    );
};

export default EmpleadoRow;