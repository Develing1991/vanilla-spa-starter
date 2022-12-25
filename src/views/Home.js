import Message from "../components/Message";
import TextField from "../components/TextField";
import TheMainComponent from "../layouts/mains/TheMain";

export default class Home extends TheMainComponent{
  render(){
    this.el.innerHTML = /*html*/`
      <h1>Home Page!</h1>
    `
    this.el.append(
      new TextField().el,
      new Message().el,
    )
  }
}