import { Post } from './post'
import { Header } from './components/header'

import './global.css'
import style from './app.module.css'
import { Sidebar } from './components/Sidebar'


export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
            author='Gui' 
            content="Lorem ipsum dolor sit amet." 
          />

          <Post 
            author='Rafa' 
            content="Lorem consectetur adipisicing. ipsum dolor sit amet."
          />
        </main>
      </div>
    </div>
  )
}
