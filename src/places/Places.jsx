import cs from 'classnames';
import styles from './Places.module.css';
import placesConfig from './config'

function Places() {
  return (
    <div className={styles.places}>
      <div className="wrapper">
        <div className={styles.placesCaption}>
          <h2 className={cs(styles.placesTitle, "sectionTitle")}>
            Get inspired for your next trip
          </h2>
          <a href="#!" className={styles.placesViewAll}>VIEW ALL</a>
        </div>
        <div className={styles.placesCards}>
          {placesConfig.map((placeInfo, index) => {
            const isLgCard = index <= 1;
            const containerClass = isLgCard ? styles.placesCardSizeLg : styles.placesCardSizeSm;
            const imgContainerClass = isLgCard ? styles.placesCardPicSizeLg : styles.placesCardPicSizeSm;

            return (
              <div key={placeInfo.id} className={cs(styles.placesCard, containerClass)}>
                <img
                  src={placeInfo.img}
                  alt={placeInfo.name}
                  className={cs(styles.placesCardPic, imgContainerClass)}
                />
                <h3 className={styles.placesCardTitle}>
                  {placeInfo.name}
                </h3>
                <a href={placeInfo.link} className={styles.placesCardLink}></a>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  );
}
export default Places;