import styles from './Intro.module.css';

function Intro() {
  return (
    <div className={styles.intro} id="sign-in">
      <div className="wrapper">
        <h1 className={styles.title}> Discover Amazing places in Japan</h1>
        <p className={styles.subtitle}>
          Jump off balcony, onto stranger's head. Chase ball of string hide
          when guests come over. Being gorgeous with belly side up i could pee
          on this if i had the energy but under the bed, for attack the child,
          open the door,
        </p>
        <form className={styles.searchForm}>
          <fieldset className={styles.searchFormWrap}>
            <p className={styles.searchFormInfo}>
              <input type="text" name="user-activity" className={styles.searchFormField}
                placeholder="What would you like to do?" />
              <input type="text" name="user-destination" className={styles.searchFormField}
                placeholder="Where would you like to go?" />
              <button type="submit" className={styles.searchFormSubmit}>
                search
              </button>
            </p>
          </fieldset>
        </form>
      </div>
    </div >
  );
}
export default Intro;