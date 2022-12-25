import { Component } from "../core/core"

export default class Index extends Component{
  constructor(...ChildComponents){
    super({
      tagName:'Index',
      ChildComponents
    })
  }

  render(){
    const [TheHeader, ViewComponent, TheFooter] = this.ChildComponents
    this.el.append(
      new TheHeader().el ?? new Comment('not header'),
      new ViewComponent().el ?? new Comment('not views'),
      new TheFooter().el ?? new Comment('not footer'),
    )
  }
}

export function createComponentIndex(...ChildComponents){
  return new Index(...ChildComponents).el
}