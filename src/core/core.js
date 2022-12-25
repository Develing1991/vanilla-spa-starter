///// Component /////
export class Component {
  constructor(payload = {}){
    const { 
      tagName = 'div',
      state = {},
      props = {},
      ChildComponents = []
    } = payload
    this.el = document.createElement(tagName)
    this.state = state
    this.props = props
    this.ChildComponents = ChildComponents
    this.render()
  }
  render(){
    // ...
  }
}

///// Router /////
function routeRender(routes){
  if(!location.hash){
    history.replaceState(null, '', '/#/')
  }
  
  const routerView = document.querySelector('router-view');
  
  // location.hash : '#/about?a=123&b=456'
  const [hash, queryString = null] = location.hash.split('?');
  const query = queryString && queryString.split('&').reduce((acc, curr)=>{
    const [key, value] = curr.split('=')
    acc[key] = value
    return acc
  },{})

  history.replaceState(query, '') // 경로 생략

  //  /#\/about\/?$/.test('#/about')
  const currentRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash))
  routerView.innerHTML = '' //초기화
  routerView.append(currentRoute.component)

  scrollTo(0, 0)
}
export function creatRouter(routes) {
  return function(){
    window.addEventListener('popstate', () => {
      routeRender(routes)
    })
    // 초기 호출
    routeRender(routes)
  }
}

//// Store /////

export class Store {
  constructor(state){
    this.state = {}
    this.observers = {}
    for(const key in state){
      // for(const key in state[storeName]){
      //   this.state = { [storeName]:{} }
      //   this.observers = { [storeName]:{ [key] : []}}
        
      //   Object.defineProperty(this.state[storeName], key, {
      //     get: () => state[storeName][key],
      //     set: (val) =>{
      //       state[storeName][key] = val
      //       //this.observers[storeName][key](val)
      //       this.observers[storeName][key].forEach(observer => observer(val))
      //       //this.observers[key].forEach(observer => observer(val))
      //     }
      //   })
      //   console.log(this.observers);
      // }
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) =>{
          state[key] = val
          this.observers[key].forEach(observer => observer(val))
        }
      })
    }
  }
  subscribe(key, cb){
    // const [storeName, key] = target.split('/')
    // this.observers[storeName][key] = cb
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : this.observers[key] = [cb]
      
  }
}