import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import PageNotFound from "./pages/PageNotFound";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import ProductsContext from "./context/ProductsContext";

function App() {
  return (
    <>
      <ProductsContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ProductsContext>
    </>
  );
}

export default App;
