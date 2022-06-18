import React from 'react';

import PresentationalComponent from './PresentationalComponent';

class ContainerComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: "my blog",
			content: "i love orchids..."
		}
	}
	render(){
		return(
			<div>
			<PresentationalComponent title = {this.state.title} content = {this.state.content} />
			</div>
			);
	}
}

export default ContainerComponent;