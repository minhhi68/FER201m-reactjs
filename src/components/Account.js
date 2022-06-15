import React from 'react';

class Account extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : 'Van',
            balance : 1000;

		};
	}
	render(){
		return (
			<div>
			<h2>name: {this.state.name}</h2>
             <h2>balance: {this.state.balance}</h2>
             </div>
			);
	}
}

import default Account;