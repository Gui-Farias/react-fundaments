import { useState } from 'react';
import style from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);


  function hanldeDeleteComment() {
    onDeleteComment(content)
  }

  const handleLikeComment = () => setLikeCount(likeCount+1)

  return (
    <div className={style.comment}>
      <img src="https://github.com/gui-farias.png" alt="" />
      <div className={style.content}>
        <div className={style.commentBox}>
          <button title='Deletar comentario' onClick={hanldeDeleteComment}> Deletar </button>
          <h3>Devon Lane</h3>
          <h5>1h ago</h5>
          <p>{content}</p>
        </div>
        
        <button onClick={handleLikeComment}>Aplaudir <span>{likeCount}</span></button>
      </div>
    </div>
  )
}
