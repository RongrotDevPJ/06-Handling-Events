import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./features/Navbar";
import Container from "./features/Container";
import Home from "./features/Home";
import AddForm from "./features/Product/AddForm";
import UpdateForm from "./features/Product/UpdateForm";
import axios from "axios";
const productsData = require("./app/data");

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("https://apimocha.com/react-redux-class/products");
      const merged = [...productsData, ...res.data];
      const map = new Map(merged.map((p) => [p.id, p]));
      setProducts(Array.from(map.values()));
      setLoading(false);
    }
    getProducts();
  }, []);

  if (loading) return <div>Loading products…</div>;

  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/create-product" element={<AddForm />} />
          <Route path="/update-product/:id" element={<UpdateForm products={products} />} />
        </Routes>
      </Container>
    </>
  );
}
