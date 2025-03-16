import module from "../module.json";
import { ProductLayout } from "../layouts";
import { ProductPageList } from "../pages";

export default {
  ...module,
  router: {
    layout: {
      path: module.id,
      element: <ProductLayout />,
    },
    childs: {
      productPageList: {
        index: true,
        element: <ProductPageList />,
      },
    },
  },
};
