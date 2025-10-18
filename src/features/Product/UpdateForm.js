import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateForm({ products = [], onUpdate, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const p = products.find((x) => String(x.id) === String(id));
    if (p) {
      setName(p.name || "");
      setImageURL(p.imageURL || "");
      setType(p.type || "");
    }
  }, [id, products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate?.({ id, name: name.trim(), imageURL: imageURL.trim(), type: type.trim() });
    navigate("/");
  };

  const handleDelete = () => {
    onDelete?.(id);
    navigate("/");
  };

  return (
    <>
      <h1>Update Product</h1>
      <form id="update-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="imageURL">Image URL</label>
          <input id="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="type">Type</label>
          <input id="type" value={type} onChange={(e) => setType(e.target.value)} />
        </div>

        <button type="button" className="UpdateForm__delete-button" onClick={handleDelete}>
          Delete product
        </button>
        <button type="submit">Update product</button>
      </form>
    </>
  );
}
