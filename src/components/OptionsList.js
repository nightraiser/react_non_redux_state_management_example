import React, { Component } from 'react'

export default class OptionsList extends Component {
    constructor(props){
        super(props);
        this.updateItem = this.updateItem.bind(this);
    }
    updateItem(e){
        let isChecked = e.target.checked;
       let index = e.target.getAttribute('data-id');
       this.props.updateSelectedItem(index,isChecked);
    }
    render() {
    const data = this.props.data;
    let options = data.map((item,index) => {
        return (
            <tr key={item.id}>
                <td><input type="checkbox" data-id={index} checked={item.selected} onChange={this.updateItem} /></td>
                <td>{item.title}</td>
            </tr>
        )
    })
    return (
      <div>
          <h4>OptionsList</h4>
       <table>
       <tbody>
           {options}
        </tbody>
       </table>
      </div>
    )
  }
}
