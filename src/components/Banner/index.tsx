import style from './styles.module.css';

export function Banner() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.invoiceTitle}>Invoices</h1>
        <p className={style.outstandingAmount}>
          Total outstanding amount:{' '}
          <span className={style.amount}>AED 1,915.76</span>
        </p>
      </div>
    </div>
  );
}
