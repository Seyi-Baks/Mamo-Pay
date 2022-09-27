/* eslint-disable jsx-a11y/alt-text */
import style from './styles.module.css';
import logo from '../../assets/icons/mamo-logo.svg';

export function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.header}>
        <img className={style.logo} src={logo} />
      </div>
      <div className={style.headerContent} />
    </div>
  );
}
