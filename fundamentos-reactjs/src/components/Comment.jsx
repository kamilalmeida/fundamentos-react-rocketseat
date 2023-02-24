import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasborder={false} src="https://github.com/maykbrito.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kamila Almeida</strong>
              <time title="23 de fevereiro às 09h58">cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Kamila, parabéns!! 👏👏</p>
          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>

            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
