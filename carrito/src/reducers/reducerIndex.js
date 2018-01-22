import { ADD_CARRITO,REMOVE_CARRITO, REMOVE_ALL } from '../constants';
import {bake_cookie, read_cookie } from 'sfcookies';


const producto = (action,idProdCar) => {
  return {
    id : action.id,
    cantidad:action.cantidad,
    idProdCar
  }
}


const productos = (state = [], action)  => {
  let productos = null;
  state = read_cookie('productos_seleccionados');
  let length = 0;
  if (state.length > 0){
    length = state.length - 1;
  }
  switch (action.type){
    case ADD_CARRITO:
      let idProdCar =   (state.length === 0) ? 1 : state[length].idProdCar + 1;
      productos = [...state,producto(action,idProdCar)];
      bake_cookie('productos_seleccionados',productos);
      return productos;
    case REMOVE_CARRITO:
       productos = state.filter(product => product.idProdCar !== action.idProdCar);
       bake_cookie('productos_seleccionados',productos);
       return productos;
    case REMOVE_ALL:
      productos = state.filter(product => product.idProdCar === 0);
      bake_cookie('productos_seleccionados',productos);
      return productos;
    default:
        return state;
  }
}

export default productos;
