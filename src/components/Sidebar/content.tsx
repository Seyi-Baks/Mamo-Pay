import SettingsIcon from '@mui/icons-material/Settings';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentIcon from '@mui/icons-material/Payment';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

export const SidebarData = [
  {
    icon: <DashboardIcon />,
    name: 'Overview',
    alt: 'overview icon',
    link: '/overview',
  },
  {
    icon: <InsertLinkIcon />,
    name: 'Payments links',
    alt: 'payments links icon',
    link: '/payment-links',
  },
  {
    icon: <InsertDriveFileIcon />,
    name: 'Invoices',
    alt: 'invoices icon',
    link: '/invoices',
  },
  {
    icon: <PaymentIcon />,
    name: 'Payments',
    alt: 'payments icon',
    link: '/payments',
  },
  {
    icon: <SwapHorizIcon />,
    name: 'Settlements',
    alt: 'settlements icon',
    link: '/settlements',
  },
  {
    icon: <SettingsIcon />,
    name: 'Account settings ',
    alt: 'account settings icon',
    link: '/account-settings',
  },
];
