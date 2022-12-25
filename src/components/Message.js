import { Component } from "../core/core"
import store from "../store/index"


export default class Message extends Component{
  constructor(){
    super()
    store.subscribe('msg', (val)=>{
      console.log(val);
      this.render()
    })
  }

  render(){
    // this.el.innerHTML = /*html*/`
    //   <h2>${store.state.msg}</h2>
    // `
    this.el.innerHTML = /*html*/`
      <h2>${store.state.msg}</h2>
    `
  }
}