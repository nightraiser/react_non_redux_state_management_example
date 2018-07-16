import React, { Component } from 'react'

export default class SelectedOptions extends Component {
   constructor(props){
       super(props);
       this.removeSelectedItem = this.removeSelectedItem.bind(this);
   } 
   removeSelectedItem(e){
       this.props.updateSelectedItem(e.target.getAttribute('data-id'));
   }
  render() {
    const data = this.props.data;
    let options = [];
    if(data.length > 0){
        options = data.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.title}</td>
                <td><button data-id={item.id  -1 } onClick={this.removeSelectedItem}>X</button></td>
            </tr>
        )
    });
    }
    return (
      <div>
         <div>
          <h4>SelectedOptions</h4>
       <table>
       <tbody>
           {options}
           </tbody>
       </table>
      </div>
      </div>
    )
  }
}
