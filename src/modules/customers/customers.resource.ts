
import PeopleIcon from '@mui/icons-material/People';
import { CustomerList } from './customer-list/customer-list.component';
import { CustomerShow } from './customer-show/customer-show.component';


export const customerResource = {
  name: 'customers',
  list: CustomerList,
  show: CustomerShow,
  options: { label: 'Користувачі' },
  icon: PeopleIcon,
};