import logo from 'assets/svg/logo.svg';
import styles from './logo.module.css';

function Logo() {
  return (
    <div>
      <img src={logo} className={styles.appLogo} alt='logo' />
    </div>
  );
}

export default Logo;
