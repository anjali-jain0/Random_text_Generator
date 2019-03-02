import React from 'react';
import Axios from 'axios';
import {Output} from './output';
import {Select} from './select';
import {Text} from './text';

export class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
      paras:4,
      format:'html',
      text:''
    }
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    Axios.get('https://baconipsum.com/api/?type=all-meat&paras=' + this.state.paras + '&start-with-lorem=1&format=' + this.state.format)
    .then((response) => {
      this.setState({text:response.data},function(){
        console.log(this.state);
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  showHtml(value){
    console.log(value);
    this.setState({format:value},this.getSampleText());
  }

   showPara(value){
    this.setState({paras:value},this.getSampleText());
  }

  render() {
    return (
      <div className='container'>
      <h1 className="text-center">ReactJS Sample Text Generator</h1>
      <hr />
      <form>
      Include Html: <br />
      <Select value={this.state.format} onChange={this.showHtml.bind(this)} />
      <br />
      Paragraphs : <br />
      <Text value={this.state.paras} onChange={this.showPara.bind(this)} />
      <br />
      </form>
      <Output value={this.state.text}  />
      </div>
    );
  }
}

