import { Component } from "../core/core"


export default class FruitItem extends Component{
  constructor(payload){
    super({
      tagName: 'li',
      props: payload.props
    })
  }

  render(){
    this.el.textContent = `${this.props.name} - ${this.props.price}`
  }
}