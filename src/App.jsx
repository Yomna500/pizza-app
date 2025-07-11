// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Home from "./ui/Home";
// import Error from "./ui/Error";
// import Menu, { loader as menuLoader } from "./features/menu/Menu";
// import Cart from "./features/cart/Cart";
// import CreateOrder, {
//   action as createOrderAction,
// } from "./features/order/CreateOrder";
// import Order, { loader as orderLoader } from "./features/order/Order";
// import { action as updateOrderAction } from "./features/order/UpdateOrder";
// import AppLayout from "./ui/AppLayout";

// //create browser router
// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/", //root path
//         element: <Home />, // the home page
//       },
//       {
//         path: "/menu",
//         element: <Menu />,
//         loader: menuLoader, //provide data to menu page
//         errorElement: <Error />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//       {
//         path: "/order/new",
//         element: <CreateOrder />,
//         action: createOrderAction,
//       },
//       {
//         path: "/order/:orderId",
//         element: <Order />,
//         loader: orderLoader,
//         errorElement: <Error />,
//         action: updateOrderAction,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <HashRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/new" element={<CreateOrder />} />
          <Route path="/order/:orderId" element={<Order />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
}

export default App;
