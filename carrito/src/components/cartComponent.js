import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import { removerProducto, removerTodos } from '../actions/actionIndex';

const style = {
  margin: 12,
};

class cartComponent extends Component {
  constructor(props){
    super(props);
    this.state = {data: require('../productos.json')};
  }

  removerProducto(id){
    this.props.removerProducto(id);
  }

  removerTodos(){
      this.props.removerTodos();
  }

  renderProductos() {
     // secondaryText={"Precio $"+ this.state.data[product.id].precio}  product.id
    const { productos } = this.props;
    console.log('productos',productos);
    let k = 0;
    return(
        <List>
        <div
          className="deleteButton"
          onClick={() => this.removerTodos()}>
            &#x2715;
        </div>
        {
          productos.map(product => {
            let i = 0;
            while (i < this.state.data.length){
              if (this.state.data[i].id === product.id){
                  break
              }
              i++;
            }
            return(
              <div key={"div1 "+k++}>
                <div key={"div2 "+k++}>
                  <ListItem key={"item "+k} primaryText={ this.state.data[i].nombre+ " x " +product.cantidad} secondaryText={"Precio $"+ this.state.data[i].precio*product.cantidad}/>
                </div>
                <div key={"div3 "+k++}>
                  <RaisedButton key={"button "+k}label="Remover" style={style} onClick={() => this.removerProducto(product.idProdCar)}/>
                </div>
                <Divider />
              </div>
            )
          })
        }
        </List>
    )
  }


  render(){
    return(
        <div>
          {this.renderProductos()}
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    productos: state
  }
}

export default connect(mapStateToProps, { removerProducto, removerTodos })(muiThemeable() (cartComponent));
