import styles from './Tours.module.css';

function Tours() {
  return (
    <div className={styles.container} id="articles">
      <div>
        <div className={styles.toursTour}>
          {/* tour */}
          <div className={styles.toursTour}>
            <img
              src="./img/tour-1-min.jpg"
              alt="Prefecture in Focus: Tottori"
            />
          </div>
          <div className={styles.tourInfo}>
            <h3 className={styles.tourTitle}>Prefecture in Focus: Tottori</h3>
            <p className={styles.tourDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string
              hide when guests come over. Being gorgeous with belly side up i
              could pee on this if i had the energy but under the bed, for
              attack the child, open the door,
            </p>
            <a href="#!" className={styles.tourMore}>VIEW PREFECTURE</a>
          </div>
        </div>
        <div className={styles.toursTour}>
          {/* tour */}
          <div className={styles.tourInfo}>
            <h3 className={styles.tourTitle}>
              Featured Neighborhood: Kyoto’s Arashiyama
            </h3>
            <p className={styles.tourDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string
              hide when guests come over. Being gorgeous with belly side up i
              could pee on this if i had the energy but under the bed, for
              attack the child, open the door,
            </p>
            <a href="#!" className={styles.tourMore}>VIEW PREFECTURE</a>
          </div>
          <div className={styles.tourPic}>
            {/* tour__pic_mob-first */}
            <img
              src="./img/tour-2-min.jpg"
              alt="Featured Neighborhood: Kyoto’s Arashiyama"
            />
          </div>
        </div>
      </div>
    </div >
  )
}
export default Tours;