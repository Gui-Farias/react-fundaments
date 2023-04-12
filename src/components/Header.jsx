import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <span>
        <img src={igniteLogo} alt="logotipo do ignite" />
        <b>Ignite Feed</b>
      </span>
    </header>
  )
}
