import React from 'react';

export class Select extends React.Component{

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
				<select className='form-control' onChange={this.onChange.bind(this)}>
				<option value='html'>Yes</option>
				<option value='text'>No</option>
				</select>
			</div>

	     );
}};