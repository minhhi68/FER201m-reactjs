import React from 'react';

import {Form, FormGroup, Label, Input, Button, FormFeedback} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';

class TestForm extends React.Component{
       constructor(props){
        super(props);
        this.state={
            fullname : '',
            age: 0,
            email: '',
            error: {
                fullname: '',
                age: '',
                email: ''


            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
       }

       render(){
        return(
            <div className="container">
                <div className="row row-context">
          <Form onSubmit = {this.handleSubmit}>
            <Form onSubmit = {this.handleSubmit}>
                <FormGroup>
                    <Label for = "fullName">Fullname:</Label>
                    <Input type ="text" id="fullname" placeholder ="fullName" value = {this.state.fullName}
                    valid = {this.state.error.fullName === ''} invalid={this.state.error.fullName != ''}
                    onChange = {this.handleInputChange}
                    onBlur = {this.handleInputBlur}/>
                    <FormFeedback>{this.state.error.fullName}</FormFeedback>
                </FormGroup>
            </Form>
          </Form>

          <FormGroup>
                    <Label for = "age">age:</Label>
                    <Input type ="text" id="age" placeholder ="age" value = {this.state.age}
                    valid = {this.state.error.age === ''} invalid={this.state.error.age != ''}
                    onChange = {this.handleInputChange}
                    onBlur = {this.handleInputBlur}/>
                    <FormFeedback>{this.state.error.age}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for = "email">email:</Label>
                    <Input type ="text" id="email" placeholder ="email" value = {this.state.email}
                    valid = {this.state.error.email === ''} invalid={this.state.error.email != ''}
                    onChange = {this.handleInputChange}
                    onBlur = {this.handleInputBlur}/>
                    <FormFeedback>{this.state.error.email}</FormFeedback>
                </FormGroup>

                </div>

            </div>
        )
       }

       handleInputChange(event){
        const nameControl = event.target.name;
        const value = event.target.value;
        //console.log(nameControl + "," +value);
        this.setState( { [nameControl] : value} );
       }

       handleInputBlur(event){
        const nameControl = event.target.name;
        const value = event.target.value;
           const pattern = /^[a-zA-Z] + [@] [a-zA-Z] + ([.][a-zA-Z] +){1,2}$/;
           if(nameControl === "fullname" && value.length <3){
            this.setState ({
                error: {... this.state.error, fullname: "Your name should be from 3 chars"}
            
            });

           }
           else if(nameControl ==="age" && (parseInt(value) <18 || parseInt(value) <65 )){
            this.setState({
                error : {... this.state.error.age: "your age should be from 18 to 65"}

            });
           }

           else if(nameControl === "email" && !pattern.test(value)){
            this.setState({
                error:  {... this.state.error, email: "Your email should be xxx@xxx.xx or xxx@xxx.xx.xx"}

            });

           }
            else {
                this.setState({
                    error: {... this.state.error,fullname: "",age: "", email:""}

                });
            }
        }
        handleSubmit(event){
            event.preventDefault();
            alert("You should click the submit button");
        }

           
        
       }


