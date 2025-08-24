import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = ({empleados}) => {
    return (
        <ListGroup>
            {empleados.map((emp)=>(
                <EmpleadoRow key={emp.id} empleado={emp}></EmpleadoRow>
            ))}
            
        </ListGroup>
    );
};

export default EmpleadoList;