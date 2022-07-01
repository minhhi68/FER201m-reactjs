import React from 'react';
import {reduxForm, Field} from 'redux-form';

const SimpleForm = props => {
    const {handleSubmit} = props
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>First name</label>
                <div>
                <Field 
                name = "firstName"
                component="input"
                type="text"
                placeholder="First Name"
                />
            </div>
            </div>
            <div>
                <Label>First name</Label>
                <div>
                    <Field 
                    name = "lastName"
                    component="input"
                    type="text"
                    placeholder="Last Name"
                    />
                </div>

            </div>
            <div>
                <button type ="submit">Submit</button>

            </div>
        </form>
    )
}

export default reduxForm({
    form: 'simple' // a unique identifier for this form  
})(SimpleForm)