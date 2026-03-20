import React, { useEffect } from "react";
import { createRoot } from "react-dom/client"; 
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router";
import { HelmetProvider, Helmet } from "react-helmet-async";

// Component Imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/Products/ProductsPage";
import ProductDetailPage from "./components/Products/ProductDetailPage";
import ContactUsPage from "./components/ContactUsPage";
import ScrollToTop from "./components/ScrollToTop";
import SearchResultsPage from "./components/Header/SearchResultsPage";
import FacilitiesPage from "./components/Facilities/FacilitiesPage";
import FacilityDetailsPage from "./components/Facilities/FacilityDetailsPage";
import CareersPage from "./components/CareersPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import ProjectDetailPage from "./components/Projects/ProjectDetailPage";
import AboutUsPage from "./components/About/AboutUsPage";
import DigitalBusinessCard from "./components/People/DigitalBusinessCard";
import ErrorPage from "./components/ErrorPage";

/**
 * Root Component
 * Acts as the global controller for the application.
 */
const Root = () => {
  const location = useLocation();

  useEffect(() => {
    const isDigitalCardPage = location.pathname.startsWith("/people/");
    const handleWidgetVisibility = () => {
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
        if (isDigitalCardPage) {
          window.Tawk_API.hideWidget();
        } else {
          window.Tawk_API.showWidget();
        }
      }
    };

    handleWidgetVisibility();
    if (window.Tawk_API) window.Tawk_API.onLoad = handleWidgetVisibility;

    const timer = setTimeout(handleWidgetVisibility, 200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Arc Engineering | Structural & Civil Solutions</title>
        <meta name="description" content="Arc Engineering provides world-class engineering, architectural, and facility management services." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Outlet />
    </HelmetProvider>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/about", element: <AboutUsPage /> },
          { path: "/products", element: <ProductPage /> },
          { path: "/products/:categorySlug/:id", element: <ProductDetailPage /> },
          { path: "/contact", element: <ContactUsPage /> },
          { path: "/search/:query", element: <SearchResultsPage /> },
          { path: "/facilities", element: <FacilitiesPage /> },
          { path: "/facilities/:id", element: <FacilityDetailsPage /> },
          { path: "/careers", element: <CareersPage /> },
          { path: "/projects", element: <ProjectsPage /> },
          { path: "/projects/:id", element: <ProjectDetailPage /> },
        ],
      },
      {
        path: "people/:username",
        element: <DigitalBusinessCard />,
      },
    ],
  },
]);

// --- MODERN REACT 18 INITIALIZATION ---
// Removed hydrateRoot logic to prevent Vercel/Puppeteer build errors.
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);