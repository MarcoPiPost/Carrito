import { ADD_CARRITO,REMOVE_CARRITO,REMOVE_ALL } from '../constants';

export const anadirCarrito = (id,cantidad) => {
  const action = {
    type: ADD_CARRITO,
    id,
    cantidad
  }
  return action;
}

export const removerProducto = (idProdCar) => {
  const action = {
    type: REMOVE_CARRITO,
    idProdCar
  }
  return action;
}

export const removerTodos = () => {
  const action = {
    type: REMOVE_ALL,
  }
  return action;
}
