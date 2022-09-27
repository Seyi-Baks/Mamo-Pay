import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Table } from '../../components/Table';
import style from './styles.module.css';

function InvoicesPage() {
  return (
    <div>
      <Header />
      <div className={style.content}>
        <Sidebar />
        <div className={style.mainContent}>
          <Banner />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default InvoicesPage;
