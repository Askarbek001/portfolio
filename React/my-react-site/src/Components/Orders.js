import React, { Component } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

export class Orders extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./image/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price} $</b>
        <RiDeleteBinLine className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />

      </div>
    )
  }
}

export default Orders