import React from 'react';

export class Text extends React.Component{

    constructor(props){
    	super(props);
    	this.state={
    		value:props.value
    	}
    }
 	
 	onChange(e){
 		this.setState({value:e.target.value},function(){
 			this.props.onChange(this.state.value);
 		});
 	}

	render() {

		return (
			<div className='container'> 
				<input type="number" value={this.state.value} onChange={this.onChange.bind(this)} />
			</div>

	     );
}};