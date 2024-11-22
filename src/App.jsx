//rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

//layouts
import MainLayout from "./layouts/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index:true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}/>
}

export default App;
