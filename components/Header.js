import styles from './Header.module.css';

const Header = ({children}) => {
  return (
    <header className={styles.header}>
      {children}
      <div className={styles['custom-shape-divider']}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles['shape-fill']}
          ></path>
        </svg>
      </div>
      <a href="#introduction" className={styles['icon-down']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="8" y1="12" x2="12" y2="16" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="16" y1="12" x2="12" y2="16" />
        </svg>
      </a>
    </header>
  );
};

export default Header;
