import style from './Comment.module.css';

export function Comment() {
  return (
    <div className={style.comment}>
      <img src="https://github.com/gui-farias.png" alt="" />
      <div className={style.content}>
        <div className={style.commentBox}>
          <button title='Deletar comentario'> Deletar </button>
          <h3>Devon Lane</h3>
          <h5>1h ago</h5>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <div className={style.like}>
          <button>Aplaudir <span>30</span></button>
        </div>
      </div>
    </div>
  )
}
