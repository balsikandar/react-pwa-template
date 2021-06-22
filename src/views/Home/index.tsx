import Logo from 'components/Logo';
import { useTranslation } from 'react-i18next';
import { useDisplayType } from 'utils/display';
import { DisplayTypes } from 'utils/display/types';
import { useComponentContainer } from './container';
import styles from './home.module.css';

function Home() {
  const { t } = useTranslation();
  const display = useDisplayType();
  const Component = useComponentContainer();

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <Logo />
        <p className={styles.welcomeText}>{t('welcome')}</p>
        {display === DisplayTypes.DESKTOP ? <p>Desktop</p> : <p>Mobile</p>}
        {Component.State.todos.map((t) => (
          <div className={t.completed ? styles.completed : ''} key={t.id}>
            {t.title}
          </div>
        ))}
      </header>
    </div>
  );
}

export default Home;
