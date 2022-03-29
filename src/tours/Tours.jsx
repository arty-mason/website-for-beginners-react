import cs from 'classnames'
import styles from './Tours.module.css';
import cardsConfig from './config'
import { WrapperFull } from '../shared/wrapper-full'

function Tours() {
  return (
    <div className={styles.container} id="articles">
      <WrapperFull>
        {cardsConfig.map((cardInfo) => {
          return (
            <div key={cardInfo.id} className={cs(styles.toursTour, styles.tour)}>
              <div className={styles.tourPic}>
                <img
                  src={cardInfo.img}
                  alt={cardInfo.name}
                />
              </div>
              <div className={styles.tourInfo}>
                <h3 className={styles.tourTitle}>{cardInfo.name}</h3>
                <p className={styles.tourDesc}>{cardInfo.description}
                </p>
                <a href={cardInfo.link} className={styles.tourMore}>VIEW PREFECTURE</a>
              </div>
            </div>
          )
        })}
      </WrapperFull>
    </div >
  )
}
export default Tours;