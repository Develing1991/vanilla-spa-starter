import { Component } from './core/core'

export default class App extends Component{
  constructor(){
    super({
      tagName: 'App'
    })
  }
  render() {
    
    const routeView = document.createElement('router-view')
    this.el.append(
      routeView
    )
  }
}