import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/kamilalmeida.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kamila Almeida</strong>
              <time title="23 de fevereiro às 09h58">cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
          <footer>
            <button>
                Aplaudir <span>20</span>
              <ThumbsUp />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
