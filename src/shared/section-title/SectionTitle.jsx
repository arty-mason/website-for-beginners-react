import cs from 'classnames';
import styles from './SectionTitle.module.css';

function SectionTitle(props) {
  const { className, text } = props;

  return (
    <h2 className={cs(styles.sectionTitle, className)}>{text}</h2 >
  )
}

export default SectionTitle;

