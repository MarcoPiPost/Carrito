import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';
import { GET_IMAGE_URL } from '../constants';
import './selectionComponent.css';
import { anadirCarrito } from '../actions/actionIndex';

const styles = {
  customWidth: {
    width: 250,
  },
};
const btnstyle = {
  margin: 10,
};
const items = [];
for (let i = 1; i <= 10; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
}

class selectionComponent extends Component {
  constructor(props){
    super(props);
    this.state = {selectedProd: 0, imageURL: '',data: require('../productos.json'), productTitle: '', productDsc: '',productPrice: '',cantidad:0};
  }


  changeSelection = (event,index, value) => {
    let imgURL = GET_IMAGE_URL(value);
    let nombre = '';
    let dsc = '';
    let prc = '';
    if (value > 0){
      nombre = this.state.data[value - 1].nombre;
      dsc =this.state.data[value - 1].leyenda;
      prc ="$"+ this.state.data[value - 1].precio;
    }
    this.setState({selectedProd: value,imageURL:imgURL,productTitle: nombre,productDsc:dsc,productPrice:prc,cantidad:1});
  }

  changeCantidad= (event,index, value) => {
    this.setState({cantidad:value});
  }

  anadirCarrito(){
    this.props.anadirCarrito(this.state.selectedProd,this.state.cantidad);
  }

  renderProducto(){
    if (this.state.selectedProd !== 0){
      return(
      <div className="col-12">
        <div className="imgHolder"><img src= {this.state.imageURL} alt=" "/></div>
        <div className="col-4">
            <div className="descripcion">
              <div className="prodTitle">{this.state.productTitle}</div>
              <div className="prodDsc"><p>{this.state.productDsc}</p></div>
              <div className="prodPrice">{this.state.productPrice}</div>
            </div>
            <div className="cantButton">
              <DropDownMenu maxHeight={300} value={this.state.cantidad} onChange={this.changeCantidad}>
                {items}
              </DropDownMenu>
            </div>
            <div className="addButton">
              <RaisedButton
              label="Añadir" primary={this.state.selectedProd > 0} disabled={this.state.selectedProd <= 0}
              style={btnstyle}
              onClick={() => this.anadirCarrito()}
              />
            </div>
          </div>
        </div>
      )
    }else{
      return(
        <div></div>
      )
    }

  }

  render(){
    return(
      <div className="selectionComponent">
        <div>
         <DropDownMenu id="ddlMenu" value={this.state.selectedProd} onChange={this.changeSelection} style={styles.customWidth} autoWidth={false}>
           <MenuItem value={0} primaryText= 'Seleccione un producto' />
           <MenuItem value={1} primaryText= {this.state.data[0].nombre} />
           <MenuItem value={2} primaryText= {this.state.data[1].nombre} />
           <MenuItem value={3} primaryText= {this.state.data[2].nombre} />
         </DropDownMenu>
        </div>
        <div className="producto">
          {this.renderProducto()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    productos: state
  }
}

export default connect(mapStateToProps, { anadirCarrito })(muiThemeable() (selectionComponent));//connect(mapStateToProps, { })(selectionComponent);
