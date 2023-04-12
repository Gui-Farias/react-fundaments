import { Post } from './components/post'
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
            authorPhoto='https://github.com/gui-farias.png'
            authorName='Guilherme Farias' 
            authorJob="web Developer" 
          />

          <Post 
            authorPhoto='https://github.com/gui-farias.png'
            authorName='Guilherme Farias' 
            authorJob="web Developer" 
          />

        </main>
      </div>
    </div>
  )
}
