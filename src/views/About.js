import TheMainComponent from "../layouts/mains/TheMain";

export default class About extends TheMainComponent{
  render(){
    //const { a, b, c} = history.state
    this.el.innerHTML = /*html*/`
      <h1>About Page!</h1>
      
    `
  }
}