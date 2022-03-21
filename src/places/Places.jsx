import styles from './Places.module.css';

function Places() {
  return (
    <div className={styles.places}>
      <div>
        <div className={styles.placesCaption}>
          <h2 className={styles.placesTitle} >
            {/* "section-title" */}
            Get inspired for your next trip
          </h2>
          <a href="#!" className={styles.placesViewAll}>VIEW ALL</a>
        </div>
        <div className={styles.placesCards}>
          <div className={styles.placesCard}>
            {/* places__card_size_lg */}
            < img
              src="/img/place-1-min.jpg"
              alt="Mount Fuji"
              className={styles.placesCardPic}
            />
            {/* places__card-pic_size_lg */}
            <h3 className={styles.placesCardTitle}>
              Mount Fuji
            </h3>
            <a href="#!" className={styles.placesCardLink}></a>
          </div>
          <div className={styles.placesCard}>
            {/* places__card_size_lg" */}
            <img
              src="/img/place-2-min.jpg"
              alt="Kyoto"
              className={styles.placesCardPic}
            />
            {/* places__card-pic_size_lg */}
            <h3 className={styles.placesCardTitle}>Kyoto</h3>
            <a href="#!" className={styles.placesCardLink}></a>
          </div>
          <div className={styles.placesCard}>
            {/* places__card_size_sm */}
            <img
              src="/img/place-3-min.jpg"
              alt="Tokyo"
              className={styles.placesCardPic}
            />
            {/* places__card-pic_size_sm */}
            <h3 className={styles.placesCardTitle}>Tokyo</h3>
            <a href="#!" className={styles.placesCardLink}></a>
          </div>
          <div className={styles.placesCard}>
            {/* places__card_size_sm */}
            <img
              src="/img/place-4-min.jpg"
              alt="Niigata"
              className={styles.placesCardPic}
            />
            {/* places__card-pic_size_sm */}
            <h3 className={styles.placesCardTitle}>Niigata</h3>
            <a href="#!" className={styles.placesCardLink}></a>
          </div>
          <div className={styles.placesCard}>
            {/* places__card_size_sm */}
            <img
              src="/img/place-5-min.jpg"
              alt="Sapporo"
              className={styles.placesCardPic}
            />
            {/* places__card-pic_size_sm */}
            <h3 className={styles.placesCardTitle}>Sapporo</h3>
            <a href="#!" className={styles.placesCardLink}></a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Places;