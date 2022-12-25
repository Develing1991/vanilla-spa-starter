import { creatRouter } from '../core/core'
import { createComponentIndex } from '../hoc'
import TheFooter from '../layouts/footers/TheFooter'
import TheHeader from '../layouts/headers/TheHeader'
import About from '../views/About'
import Home from '../views/Home'


export default creatRouter([
  { 
    path: '#/',
    component: createComponentIndex(TheHeader, Home, TheFooter)
  },
  { 
    path: '#/about',
    component: createComponentIndex(TheHeader, About, TheFooter)
  }
])