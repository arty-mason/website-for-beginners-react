import styles from './Videos.module.css';

function Videos() {
  return (
    <div className={styles.videos} id="videos">
      <div className={styles.videosWrapper}>
        <div className={styles.videoItem}></div>
        <iframe
          className={styles.videoElement}
          src="https://www.youtube.com/embed/0nTO4zSEpOs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div >
  );
}
export default Videos;