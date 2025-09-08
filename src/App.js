import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import ProductPage from "./components/ProductPage";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
};

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <AppLayout />
},
{
  path: "/about",
  element: <About />
},
{
  path: "/products",
  element: <ProductPage />
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
