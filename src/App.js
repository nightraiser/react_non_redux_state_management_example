import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {OptionsData} from './Mockdata';
import OptionsList from './components/OptionsList';
import SelectedOptions from './components/SelectedOptions';
class App extends Component {
  constructor(props){
    super(props);
    let state = {
      optionsList:[],
      selectedOptionsList:[],
    }
    this.state = state;
    this.updateSelectedItem = this.updateSelectedItem.bind(this);
  }
  componentWillMount(){
    let data = OptionsData;
    this.setState({optionsList:data,selectedOptionsList:[]});
  }
  updateSelectedItem(index,value){
    let optionsList = Object.assign([],this.state.optionsList);
    let selectedList = Object.assign([],this.state.selectedOptionsList);
    optionsList[index].selected = value;
    let optionId = optionsList[index].id;
    if(value === true){
      selectedList.push(optionsList[index]);
    }
    else{
      let removeIndexArr = selectedList.map((item,index) => {
          if(item.id == optionId){
            return index;
          }
      });
      selectedList.splice(removeIndexArr[0],1);
    }
    this.setState({optionsList:optionsList,selectedOptionsList:selectedList});
  }
  render() {
    return (
      <div className="App">
       
     
          <table>
            <tbody>
            <tr>
              <td style={{verticalAlign:'top'}}>
                <OptionsList data={this.state.optionsList} updateSelectedItem = {this.updateSelectedItem} />
              </td>
              <td style={{verticalAlign:'top'}}>
                <SelectedOptions updateSelectedItem = {this.updateSelectedItem} data={this.state.selectedOptionsList}/>
              </td>
            </tr>
            </tbody>
          </table>
      
      </div>
    );
  }
}

export default App;
