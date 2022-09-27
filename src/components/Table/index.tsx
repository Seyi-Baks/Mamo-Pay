/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import cn from 'classnames';
import add from '../../assets/icons/add.svg';
import { HorizontalTabs } from '../HorizontalTabs';
import style from './styles.module.css';
import content from './__mockData__/index.json';
import { Modal } from '../Modal';

export function Table() {
  const [selectedTab, setSelectedTab] = useState('All invoices');
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (selectedTab === 'All invoices') {
      setData(content);
    } else {
      setData(content.filter((elem) => elem.status === selectedTab));
    }
  }, [selectedTab]);

  return (
    <>
      <div className={style.container}>
        <div className={style.tableTabs}>
          <HorizontalTabs
            tabs={['All invoices', 'Outstanding', 'Paid', 'Cancelled']}
            state={selectedTab}
            setter={setSelectedTab}
          />
          <button className={style.newInvoice} onClick={() => setShow(!show)}>
            <img className={style.addIcon} src={add} alt="add-icon" />
            <span className={style.buttonLabel}>New invoice</span>
          </button>
        </div>
        <div className={style.tableHeader}>
          <ul>
            <li>Invoice ID</li>
            <li>Customer</li>
            <li>Amount</li>
            <li>Status</li>
            <li>Created</li>
          </ul>
        </div>
        <div className={style.tableBody}>
          {data.map((elem) => (
            <ul>
              <li>{elem.invoiceID}</li>
              <li>{elem.customer}</li>
              <li>{elem.amount}</li>
              <li>
                <span
                  className={cn({
                    [style.label_cancelled]: elem.status === 'Cancelled',
                    [style.label_outstanding]: elem.status === 'Outstanding',
                    [style.label_paid]: elem.status === 'Paid',
                  })}
                >
                  {elem.status}
                </span>
              </li>
              <li>{elem.created}</li>
              <li>...</li>
            </ul>
          ))}
        </div>
      </div>
      <Modal show={show} onClose={() => setShow(!show)}>
        <form>
          <div className={style.formHeaderSection}>
            <h1 className={style.formHeader}>Create and send invoice</h1>
            <p className={style.formSubHeading}>
              An email with the invoice will be sent to your customer with a
              payment link for them to settle the invoice
            </p>
          </div>

          <div className={style.formContent}>
            <h3 className={style.formSectionHeader}>Customer</h3>

            <input placeholder="First name" type="text" />
            <input placeholder="Last name" type="text" />
            <input placeholder="Email" type="text" />
            <div className={style.phone}>
              <label className={style.phoneLabel}>Phone (optional)</label>
              <input type="number" className={style.input} />
            </div>

            <h3 className={style.formSectionHeader}>Amount</h3>

            <input placeholder="AED" type="text" />

            <h3 className={style.formSectionHeader}>Description</h3>

            <input
              placeholder="What's payment for"
              type="text"
              className={style.input}
            />
          </div>

          <div className={style.formButtonContainer}>
            <button>Send invoice</button>
          </div>
        </form>
      </Modal>
    </>
  );
}
