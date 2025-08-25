# Lista de Empleados

## Descripción

Employee List App es una **aplicación web en React** que permite mostrar una lista de empleados utilizando **componentes reutilizables** y estilizada con **React-Bootstrap**.

El proyecto está diseñado para ilustrar **buenas prácticas en React**, como:  
- Uso de **props** para pasar datos a componentes hijos.  
- Renderizado de **listas dinámicas** con `.map()` y `key`.  
- Composición de **componentes reutilizables** (`EmpleadoAvatar`, `EmpleadoRow`, `EmpleadoList`).  
- Uso de **Bootstrap** para maquetación y estilos rápidos.  

## Deploy

Podés ver la aplicación aquí: [Lista de empleados](https://listaempleados-mj.netlify.app/)

## Estructura de Componentes

- **`EmpleadoAvatar`**  
  Muestra la foto del empleado. Se recibe la propiedad `pic` con el nombre del archivo de imagen.

- **`EmpleadoRow`**  
  Representa una fila de la lista con:  
  - Avatar del empleado  
  - Nombre completo (`fullName`)  
  - Cargo (`title`)  
  - Departamento (`department`) como un `Badge` azul  

- **`EmpleadoList`**  
  Contenedor que recorre un **array de empleados** y renderiza un `EmpleadoRow` por cada uno.

## Tecnologías

- React  
- React-Bootstrap  
- Bootstrap 5  
- JavaScript   
- CSS

