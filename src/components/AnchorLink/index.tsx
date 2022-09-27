/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
import { Link } from 'react-router-dom';
import style from './styles.module.css';

export function AnchorLink(props: any) {
  return (
    <Link
      data-testid="anchorLink"
      className={` ${style.link} ${props.className}`}
      to={props.to}
    >
      {props.children}
    </Link>
  );
}
