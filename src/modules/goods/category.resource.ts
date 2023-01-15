import { CategoryCreate } from "../category/components/category-create/category-create";
import { CategoryEdit } from "../category/components/category-edit/category-edit";
import { CategoryList } from "../category/components/category-list/category-list";

import DvrIcon from "@mui/icons-material/Dvr";

export const categoryResource = {
  name: "categories",
  list: CategoryList,
  edit: CategoryEdit,
  create: CategoryCreate,
  options: { label: "Категорії" },
  icon: DvrIcon,
};
