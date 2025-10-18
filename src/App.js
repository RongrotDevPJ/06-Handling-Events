
import { Routes, Route } from "react-router-dom";
import Navbar from "./features/Navbar.js";
import Container from "./features/Container.js";
import Home from "./features/Home.js";
import AddForm from "./features/Product/AddForm.js";
import UpdateForm from "./features/Product/UpdateForm.js"; 

export default function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-product" element={<AddForm />} />
          <Route path="/update-product/:id" element={<UpdateForm />} />
        </Routes>
      </Container>
    </>
  );
}
