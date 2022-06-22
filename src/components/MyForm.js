import React from 'react';

class MyForm extends React.Component {
    constructor(){
        super()
        this.state = {
            text : ''
        }
    }
    handleOnChange = (e) => {
        this.setState({
            text: e.target.value}
        )
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        alert('Text was just submitted: ' + this.state.text)
        this.setState({
            text : ''}
        )
    }
    render(){
        return(
            <div>
                <form>

                    <input type= "text" value={this.state.text} onChange={this.handleOnChange}/>
                    <input type="submit"/>>


                </form>
            </div>
        )
    }
}
export default MyForm;