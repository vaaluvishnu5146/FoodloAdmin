import CreateProduct from "./Pages/CreateProduct";
import ManageOrders from "./Pages/ManageOrders";
import ManageProducts from "./Pages/ManageProducts";
import UpdateProduct from "./Pages/UpdateProduct";

const routes = [
  {
    name: "Create Product",
    path: "/createProduct",
    component: () => <CreateProduct />,
  },
  {
    name: "Manage Products",
    path: "/manageProducts",
    component: () => <ManageProducts />,
  },
  {
    name: "Update Product",
    path: "/editProduct/:id",
    component: () => <UpdateProduct />,
  },
  {
    name: "Manage Orders",
    path: "/orders",
    component: () => <ManageOrders />,
  },
];

export default routes;
