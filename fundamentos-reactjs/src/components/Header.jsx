
import styles from "../components/header.module.css";
import igniteLogo from "../assets/Ignite-logo.svg"



export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
            <strong >Ignite Feed</strong>
        </header>

    )
}