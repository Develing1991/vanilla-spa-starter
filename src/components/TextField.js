import { Component } from "../core/core"
import store from "../store/index"


export default class TextField extends Component{
  
  render(){
    this.el.innerHTML = /*html*/`
      <!-- <input value="${store.state.msg}"/> -->
      <input value="${store.state.msg}"/>
    `

    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', ()=>{
      store.state.msg = inputEl.value //set
    })
    
  }
}