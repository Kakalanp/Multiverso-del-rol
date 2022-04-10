import styles from '../styles/Schedule.module.css'
import data from '../dataPlaceholder.js'
import Event from './Event'

export default function Schedule() {
    const confirmedTopic = data.filter((topic) => topic.ESTADO === 'Confirmado')
    return(
        <div className={styles.container}>
            <div className={styles.content}>
          {data.map((topic) => (
            <Event key={Math.random()} master={topic.MASTER} title={topic.TEMA} date={topic.FECHA} time={topic.HORARIO} masterId={topic.ID} />
          ))}
          </div>
        </div>
    )
}