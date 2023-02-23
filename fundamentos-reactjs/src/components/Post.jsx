import styles from "./Post.module.css";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/kamilalmeida.png" />
          <div className={styles.authorInfo}>
            <strong>Kamila Almeida</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="23 de fevereiro às 09h58">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>
          Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um
          projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto
          é DoctorCare 🚀
        </p>

        <p>
          👉 <a href=""> jane.design/doctorcare</a>{" "}
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
