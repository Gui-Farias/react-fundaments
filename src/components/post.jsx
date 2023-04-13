import { useState } from 'react'
import { Comment } from './Comment'
import style from './Post.module.css'


export function Post({author, publishedAt, content}) {
  const [comments, setComments] = useState([
    'Post muito bacana emmm!!'
  ]);

  const [newComment, setNewComment] = useState('');
  
  const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)
  // or date fns to other format

  function handleNewComment() {
    setNewComment(event.target.value)
  }

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newComment])
    setNewComment('')
  }

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
            return <p key={line.text}>{line.text}</p>
          } else if ((line.type === 'link')) {
            return <p key={line.text}> <a href="#"> {line.text} </a>  </p>
          }
        })}

      </div>

      <form className={style.form} onSubmit={handleCreateNewComment}>
        <b>Deixe seu feedback</b>

        <textarea name='comment' placeholder='Comente aqui!' onChange={handleNewComment} value={newComment}/>

        <button type="submit">Publicar</button>
      </form>

      <div className={style.commentList}>
        {comments.map(comemnt => {
          return <Comment key={comemnt} content={comemnt}/>
        })}
      </div>
    </article>
  )
}
