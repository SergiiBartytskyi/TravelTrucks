import { Routes, Route } from "react-router";
import Layout from "./components/Layout/Layout";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CamperDetailPage from "./pages/CamperDetailPage/CamperDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
