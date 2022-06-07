import React from 'react';
// class này có thêt đặt tên khác tên folder
class Hello extends React.Component{
   constructor(props){
   super(props); // super: lớp cha
    

}
   render(){
   	return(
   		<div>
        <h1>Em yeu co</h1>
        <h1>{this.props.msg}</h1> 
        <h2>{this.props.user.id}, {this.props.user.name}</h2>
        </div>
   		);
   }
} 


export default Hello; 