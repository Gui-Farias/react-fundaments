import { useState } from 'react'
import { Comment } from './Comment'
import style from './Post.module.css'


export function Post({author, publishedAt, content}) {
  const [comments, setComments] = useState([1,2,3]);
  
  const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)
  // or date fns to other format


  function handleCreateNewComment(params) {
    event.preventDefault()
    setComments([...comments, comments.length+1])
    console.log(comments);
  }
  console.log(comments);

  return (
    <article className={style.post}>
      <header className={style.header}>
         <div className={style.authorInfo}>
          <img 
            className={style.photo}
            src={author.photo} 
            alt="" 
          />
          <div>
            <b>{author.name}</b>
            <p>{author.role}</p>
          </div>
        </div>
        <time title='12 de Abril as 16h10' dateTime='2023-04-12 16h10'>{publishedDateFormated}</time>
      </header>

      <div className={style.content}>

        {content.map(line => {
          if (line.type === 'paragrapy') {
            return <p>{line.text}</p>
          } else if ((line.type === 'link')) {
            return <p> <a href="#"> {line.text} </a>  </p>
          }
        })}

      </div>

      <form className={style.form} onSubmit={handleCreateNewComment}>
        <b>Deixe seu feedback</b>

        <textarea placeholder='Comente aqui!'/>

        <button type="submit">Publicar</button>
      </form>

      <div className={style.commentList}>
        {comments.map(comemnt => {
          return <Comment />
        })}
      </div>
    </article>
  )
}
