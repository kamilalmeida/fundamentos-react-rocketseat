
import styles from "./Avatar.module.css"

export function Avatar({ hasborder = true, src }) {
  return (
    <div>
      <img className={hasborder ? styles.avatarWithBorder : styles.avatar} src={src} />
    </div>
  );
}
