/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
import style from './styles.module.css';
import close from '../../assets/icons/close.svg';

export function Modal(props: any) {
  const { show, children, onClose } = props;

  if (!show) {
    return null;
  }

  return (
    <div className={style.modalWrapper}>
      <button onClick={onClose} className={style.modalButton}>
        <img className={style.addIcon} src={close} alt="add-icon" />
      </button>
      <div className={style.modal}>{children}</div>
    </div>
  );
}
