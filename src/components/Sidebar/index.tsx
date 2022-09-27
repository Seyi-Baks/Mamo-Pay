/* eslint-disable prettier/prettier */
import cn from 'classnames';
import style from './styles.module.css';
import { SidebarData } from './content';

export function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.buttonContainer}>
      <button
        type="button"
        className={style.sidebarButton}
      >
        <span>Create payment link</span>
      </button>
      </div>
      <ul className={style.sidebarList}>
        {SidebarData.map((elem) => (
          <li key={elem.name} className={cn(style.sidebarItem, {[style.activeLink]: elem.name === 'Invoices'})}>
            {" "}
            <div className={style.icon}>{elem.icon}</div>{" "}
            <div className={style.title}>{elem.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
