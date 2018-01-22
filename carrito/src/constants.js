export const  ADD_CARRITO = 'ADD_CARRITO';
export const  REMOVE_CARRITO = 'REMOVE_CARRITO';
export const  REMOVE_ALL = 'REMOVE_ALL';
export const GET_IMAGE_URL = (id) => {
  let imgURL = '';
  switch (id){
    case 1:
      imgURL = "https://www.bananaprint.es/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/camiseta-beagle-roly-rol-6554k-azul-denim-img01.jpg";
      return imgURL;
    case 2:
      imgURL = "https://images.sportsdirect.com/images/products/48600225_l.jpg";
      return imgURL;
    case 3:
      imgURL = "https://www.customink.com/mms/images/catalog/styles/291900/catalog_detail_image_large.jpg";
      return imgURL;
    default:
      return imgURL;
  }
}
