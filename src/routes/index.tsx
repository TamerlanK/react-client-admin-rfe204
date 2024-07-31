import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouteObject,
} from "react-router-dom"
import AdminLayout from "../components/Admin/Layout"
import ClientLayout from "../components/Client/Layout"
import AddProductPage from "../pages/Admin/AddProduct"
import DashboardPage from "../pages/Admin/Dashboard"
import ProductsPageAdmin from "../pages/Admin/Products"
import ContactPage from "../pages/Client/Contact"
import HomePage from "../pages/Client/Home"
import ProductDetailsPage from "../pages/Client/ProductDetails"
import ProductsPage from "../pages/Client/Products"
import NotFoundPage from "../components/NotFound"
import FavoritesPage from "../pages/Client/Favorites"

export const ROUTES: RouteObject[] = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "add-product",
        element: <AddProductPage />,
      },
      {
        path: "products",
        element: <ProductsPageAdmin />,
      },
    ],
  },
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
        children: [{ path: ":id", element: <ProductDetailsPage /> }],
      },
    ],
  },
]

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="add-product" element={<AddProductPage />} />
        <Route path="products" element={<ProductsPageAdmin />} />
      </Route>
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="products">
          <Route index element={<ProductsPage />} />
          <Route path=":id" element={<ProductDetailsPage />} />
        </Route>
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
