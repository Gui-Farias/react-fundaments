import style from './Post.module.css'

export function Post(props) {
  return (
    <article className={style.post}>
      <header className={style.header}>
         <div className={style.authorInfo}>
          <img 
            className={style.photo}
            src={props.authorPhoto} 
            alt="" 
          />
          <div>
            <b>{props.authorName}</b>
            <p>{props.authorJob}</p>
          </div>
        </div>
        <time title='12 de Abril as 16h10' dateTime='2023-04-12 16h10'>1h ago</time>
      </header>

      <div className={style.content}>

        <p> Fala galeraa 👋</p>

        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p> <a href="#"> 👉 jane.design/doctorcare</a></p>

        <p> <a href="#"> #novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}
