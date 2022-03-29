import cs from 'classnames';
import styles from './WrapperFull.module.css';

function WrapperFull(props) {
  const { className, children } = props;

  return (
    <div className={cs(styles.wrapperFull, className)}>
      {children}
    </div>
  );
}

export default WrapperFull;