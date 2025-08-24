import React from 'react';
import { Figure } from 'react-bootstrap';
const EmpleadoAvatar = (empleado) => {
    return (
        <Figure className='me-2 mb-0' ><Figure.Image
        width={100}
        height={100}
        alt="171x180"
        src={empleado.pic}
        roundedCircle
      /></Figure>
    );
};

export default EmpleadoAvatar;