import { Post } from './post'

export function App() {
  return (
    <div>
      <h1>Vite + React</h1>
      <Post 
        author='Gui' 
        content="Lorem ipsum dolor sit amet." 
      />
      
      <Post 
        author='Rafa' 
        content="Lorem consectetur adipisicing. ipsum dolor sit amet."
      />
    </div>
  )
}
