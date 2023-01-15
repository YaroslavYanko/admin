import { GoodsCreate } from "./components/goods-create/goods-create.component";
import { GoodEdit } from "./components/goods-edit/goods-edit.component";
import { GoodList } from "./components/goods-list/goods-list.component";

import StoreIcon from '@mui/icons-material/Store';

export const goodsResource = {
    name:'goods',
    list: GoodList,
    edit:GoodEdit,
    create:GoodsCreate,
    options:{ label: 'Товари' },
    icon:StoreIcon
}