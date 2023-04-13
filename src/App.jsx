import { Post } from './components/post'
import { Header } from './components/header'

import './global.css'
import style from './app.module.css'
import { Sidebar } from './components/Sidebar'


const posts = [
  {
    id: 1,
    author: {
      photo: 'https://github.com/gui-farias.png',
      name: 'Guilherme Farias' ,
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragrapy',
        text: 'Fala galeraa 👋' 
      },
      {
        type: 'paragrapy',
        text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' 
      },
      {
        type: 'link',
        text: 'jane.design/doctorcare' 
      },
      {
        type: 'link',
        text: '#novoprojeto #nlw #rocketseat' 
      }
    ],
    publishedAt: new Date('2023-04-01 20:00:00')
  },
  {
    id: 2,
    author: {
      photo: 'https://github.com/gui-farias.png',
      name: 'Gui Farias' ,
      role: 'Mobile Developer'
    },
    content: [
      {
        type: 'paragrapy',
        text: 'Eae galeraa 👋' 
      },
      {
        type: 'paragrapy',
        text: 'Acabei de subir mais um projeto no meu portifa. O nome do projeto é DoctorCare 🚀' 
      },
      {
        type: 'link',
        text: 'abacate.design/baba' 
      },
      {
        type: 'link',
        text: '#novoprojeto #nlw #rocketseat' 
      }
    ],
    publishedAt: new Date('2023-04-05 09:00:00')
  },
]


export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </div>
  )
}
