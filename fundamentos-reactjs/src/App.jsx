import { Header } from "./components/Header";
import "./global.css";
import styles from "./components/app.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";



function App() {


  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>


  )
}

export default App
