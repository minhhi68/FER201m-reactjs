import React from 'react';
 class Warning extends React.Component{
          constructor(){
          	super();
          	//this.display = this.display.bond(this);

          }

          displa = ()=>{
          	alert('welcome to handling event');

          }

          render(){
          	return (
          		<button onClick={ ()=>this.display())>Click me </button>;
          	}
          		);
          }


 }

 export default Warning;