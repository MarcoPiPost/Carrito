import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectionComponent from "./selectionComponent";
import CartComponent from "./cartComponent";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './MainApp.css';

class MainApp extends Component {
  constructor(props){
    super(props);
    this.state = {prodSel: ''}
  }


  render(){
    return(
      <MuiThemeProvider>
        <div className="MainApp">
            <div className="row">

              <div className="title">
                Carrito de Compras
              </div>
              <div className="col-8">
                <div className = 'SelComp'>
                  <SelectionComponent />
                </div>
              </div>
              <div className="col-4">
                <div className = 'cartComp'>
                  <CartComponent />
                </div>
              </div>
            </div>
        </div>
      </MuiThemeProvider>
    )
  }

}//termina App

function mapStateToProps(state){
  return {
    state
  }
}
export default connect(mapStateToProps, { })(MainApp);
