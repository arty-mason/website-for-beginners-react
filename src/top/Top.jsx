import styles from './Top.module.css';

function Top() {
  return (
    <div className={styles.top} id="locations">
      <div>
        <h2 className={styles.topTitle} > Today top places to visit</h2>
        {/* section-title */}
        <div className={styles.topCards}>
          <div className={styles.topCard}>
            <div className={styles.topCardPic}>
              <img
                src="./img/top-pic-1-min.jpg"
                alt="NAGOYA"
              />
              <div className={styles.topCardStats}>
                <h3 className={styles.topCardTitle}>NAGOYA</h3>
                <div className={styles.topCardLikes}>
                  <span>221</span>
                </div>
                <div className={styles.topCardComments}>
                  <span >50</span>
                </div>
              </div>
            </div>
            <p className={styles.topCardDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string
              hide when guests come over. Being gorgeous with belly side up i
              could pee on this.
            </p>
            <a href="#!" className={styles.topCardMore}>SEE MORE</a>
          </div>
          <div className={styles.topCard}>
            <div className={styles.topCardPic}>
              <img
                src="./img/top-pic-2-min.jpg"
                alt="NIIGATA"
              />
              <div className={styles.topCardStats}>
                <h3 className={styles.topCardTitle}>NIIGATA</h3>
                <div className={styles.topCardLikes}>
                  <span>221</span>
                </div>
                <div className={styles.topCardComments}>
                  <span>50</span>
                </div>
              </div>
            </div>
            <p className={styles.topCardDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string
              hide when guests come over. Being gorgeous with belly side up i
              could pee on this.
            </p>
            <a href="#!" className={styles.topCardMore}>SEE MORE</a>
          </div>
          <div className={styles.topCard}>
            <div className={styles.topCardPic}>
              <img
                src="./img/top-pic-3-min.jpg"
                alt="OSAKA"
              />
              <div className={styles.topCardStats}>
                <h3 className={styles.topCardTitle}>OSAKA</h3>
                <div className={styles.topCardLikes}>
                  <span>221</span>
                </div>
                <div className={styles.topCardComments}>
                  <span>50</span>
                </div>
              </div>
            </div>
            <p className={styles.topCardDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string
              hide when guests come over. Being gorgeous with belly side up i
              could pee on this.
            </p>
            <a href="#!" className={styles.topCardMore}>SEE MORE</a>
          </div>
          <div className={styles.topCard}>
            <div className={styles.topCardPic}>
              <img
                src="./img/top-pic-4-min.jpg"
                alt="SAITAMA"
              />
              <div className={styles.topCardStats}>
                <h3 className={styles.topCardTitle}>SAITAMA</h3>
                <div className={styles.topCardLikes}>
                  <span>221</span>
                </div>
                <div className={styles.topCardComments}>
                  <span>50</span>
                </div>
              </div>
            </div>
            <p className={styles.topCardDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string
              hide when guests come over. Being gorgeous with belly side up i
              could pee on this.
            </p>
            <a href="#!" className={styles.topCardMore}>SEE MORE</a>
          </div>
          <div className={styles.topCard}>
            <div className={styles.topCardPic}>
              <img
                src="./img/top-pic-5-min.jpg"
                alt="UENO"
              />
              <div className={styles.topCardStats}>
                <h3 className={styles.topCardTitle}>UENO</h3>
                <div className={styles.topCardLikes}>
                  <span>221</span>
                </div>
                <div className={styles.topCardComments}>
                  <span>50</span>
                </div>
              </div>
            </div>
            <p className={styles.topCardDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string
              hide when guests come over. Being gorgeous with belly side up i
              could pee on this.
            </p>
            <a href="#!" className={styles.topCardMore}>SEE MORE</a>
          </div>
          <div className={styles.topCard}>
            <div className={styles.topCardPic}>
              <img
                src="./img/top-pic-6-min.jpg"
                alt="SHIBUYA"
              />
              <div className={styles.topCardStats}>
                <h3 className={styles.topCardTitle}>SHIBUYA</h3>
                <div className={styles.topCardLikes}>
                  <span>221</span>
                </div>
                <div className={styles.topCardComments}>
                  <span>50</span>
                </div>
              </div>
            </div>
            <p className={styles.topCardDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string
              hide when guests come over. Being gorgeous with belly side up i
              could pee on this.
            </p>
            <a href="#!" className={styles.topCardMore}>SEE MORE</a>
          </div>
        </div>
      </div>
    </div >
  )
}
export default Top;