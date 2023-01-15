import { OrderEdit } from "../orders/components/order-edit.component";
import { OrderList } from "../orders/components/order-list.component";
import { OrderShow } from "../orders/components/order-show.component";
import { OrderCreate } from "../orders/components/order-create.component";

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


export const ordersResource = {
    name: "orders",
    list: OrderList,
    edit: OrderEdit,
    show: OrderShow,
    create: OrderCreate,
    options: { label: "Замовлення" },
    icon: ShoppingBagIcon,
  };