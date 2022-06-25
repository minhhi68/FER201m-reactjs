import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class MyUncontrolledForm extends React.Component{
    constructor(props){
        super(props){
            this.state = {
                isCase: false;
            }
            this.changeIsCase = this.changeIsCase.bind(this);
        }
        changeIsCase(){
            const value = this.inputText.value;
            this.setState((isCase: this.state.isCase));
            if(this.state.isCase) this.inputText.value = value.toUpperCase();
        
            else this.inputText.value = value.toLowerCase();
        }

        render(){
            return(
                <div className = "container">
                <div className="row m-5">
                <div className="col-2 col-sm-2">
                <form>
                <p><input type = "text" ref= = {inputControl=> this.inputText=inputControl} placeholder="input a text"/></p>
                <p>Input type ="button" onClick={this.changeisCase</p>
                </form>
                </div>
                </div>
                </div>
            )
        }
    }
}