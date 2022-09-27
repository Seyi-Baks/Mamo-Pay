import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import InvoicesPage from './pages/InvoicePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/invoices" />} />
      <Route path="invoices" element={<InvoicesPage />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
