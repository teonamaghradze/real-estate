import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Layout from "./pages/layout/Layout";
import Login from "./pages/login/Login";
import SinglePage from "./pages/singlePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <List />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
      ],
    },
  ]);
  return (
    // <div className="layout">
    //   <section className="navbar">
    //     <Navbar />
    //   </section>

    //   <section className="content">
    //     <Home />
    //   </section>
    // </div>

    <RouterProvider router={router} />
  );
}

export default App;
