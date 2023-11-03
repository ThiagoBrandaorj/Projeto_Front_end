import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseConteiner}>
            <h1>tá vindo de frase.js</h1>
            <p className={styles.fraseContent}>Vasco</p>
        </div>
    ) 
}
export default Frase