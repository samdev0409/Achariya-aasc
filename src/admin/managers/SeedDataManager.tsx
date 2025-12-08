<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
import axiosInstance from "../../utils/axiosInstance";

interface SeedData {
  _id?: string;
  id: number;
  image: string;
  text: string;
}

const SeedDataManager: React.FC = () => {
<<<<<<< HEAD
  const collection = "campus-life/seeddata";

  const [items, setItems] = useState<SeedData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [editItem, setEditItem] = useState<SeedData | null>(null);

  // -----------------------------------------------------------
  // FETCH ALL
  // -----------------------------------------------------------
  const fetchItems = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axiosInstance.get(`/${collection}`);
      const arr = Array.isArray(res.data) ? res.data : [res.data];

      setItems(arr.filter(Boolean));
    } catch (err: any) {
      setError("Failed to load data: " + err.message);
=======
  const [data, setData] = useState<SeedData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<SeedData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "campus-life__seeddata";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axiosInstance.get(`/${collectionName}`);
      setData(Array.isArray(res.data) ? res.data : [res.data]);
    } catch (e: any) {
      setError("Failed to load data: " + e.message);
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    } finally {
      setLoading(false);
    }
  };

<<<<<<< HEAD
  useEffect(() => {
    fetchItems();
  }, []);

  // -----------------------------------------------------------
  // CREATE / UPDATE
  // -----------------------------------------------------------
  const saveItem = async () => {
    if (!editItem) return;

    try {
      if (isNew) {
        await axiosInstance.post(`/${collection}`, editItem);
      } else {
        await axiosInstance.put(`/${collection}/${editItem._id}`, editItem);
      }

      setIsEditing(false);
      fetchItems();
    } catch (err: any) {
      alert("Save failed: " + err.message);
    }
  };

  // -----------------------------------------------------------
  // DELETE
  // -----------------------------------------------------------
  const deleteItem = async (id?: string) => {
    if (!id) return;
    if (!confirm("Delete this item?")) return;

    try {
      await axiosInstance.delete(`/${collection}/${id}`);
      fetchItems();
    } catch (err: any) {
      alert("Delete failed: " + err.message);
    }
  };

  // -----------------------------------------------------------
  // UPDATE FIELD IN FORM
  // -----------------------------------------------------------
=======
  const handleSave = async () => {
    if (!editItem) return;
    try {
      if (isNew) {
        await axiosInstance.post(`/${collectionName}`, editItem);
      } else {
        await axiosInstance.put(`/${collectionName}/${editItem._id}`, editItem);
      }
      alert("Saved successfully");
      setIsEditing(false);
      fetchData();
    } catch (err: any) {
      alert("Error saving: " + err.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this item?")) return;
    try {
      await axiosInstance.delete(`/${collectionName}/${id}`);
      fetchData();
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
  const updateField = (field: keyof SeedData, value: any) => {
    if (!editItem) return;
    setEditItem({ ...editItem, [field]: value });
  };

<<<<<<< HEAD
  // -----------------------------------------------------------
  // FORM UI
  // -----------------------------------------------------------
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
  const renderForm = () => {
    if (!editItem) return null;

    return (
<<<<<<< HEAD
      <div style={{ maxWidth: 700 }}>
        <h3>{isNew ? "Create New SEED Data" : "Edit SEED Data"}</h3>

        <label>ID</label>
        <input
          type="number"
          value={editItem.id}
          onChange={(e) => updateField("id", Number(e.target.value))}
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />

        <label>Image</label>
        <input
          type="text"
          value={editItem.image}
          onChange={(e) => updateField("image", e.target.value)}
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />

        <label>Text</label>
        <textarea
          value={editItem.text}
          rows={5}
          onChange={(e) => updateField("text", e.target.value)}
          style={{ width: "100%", padding: 8, margin: "8px 0" }}
        />

        <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
          <button className="btn btn-primary" onClick={saveItem}>
            Save
          </button>
          <button className="btn" onClick={() => setIsEditing(false)}>
=======
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New SEED Data" : "Edit SEED Data"}
        </h3>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">ID</label>
          <input
            type="number"
            className="form-input"
            value={editItem.id}
            onChange={(e) => updateField("id", parseInt(e.target.value))}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Image</label>
          <input
            type="text"
            className="form-input"
            value={editItem.image}
            onChange={(e) => updateField("image", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Text</label>
          <textarea
            className="form-input"
            rows={6}
            value={editItem.text}
            onChange={(e) => updateField("text", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            paddingTop: "1rem",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          <button className="btn btn-primary" onClick={handleSave}>
            Save Changes
          </button>
          <button
            className="btn"
            style={{ background: "#ccc" }}
            onClick={() => setIsEditing(false)}
          >
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
            Cancel
          </button>
        </div>
      </div>
    );
  };

<<<<<<< HEAD
  // -----------------------------------------------------------
  // MAIN UI
  // -----------------------------------------------------------
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
  if (loading) return <div>Loading…</div>;

  return (
    <div className="collection-manager">
      <div
<<<<<<< HEAD
        style={{ display: "flex", alignItems: "center", marginBottom: 16 }}
      >
        <h2>SEED Data</h2>

=======
        className="admin-header"
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <h2>SEED Data</h2>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
<<<<<<< HEAD
              setEditItem({
                id: items.length + 1,
                image: "",
                text: "",
              });
=======
              setEditItem({ id: data.length + 1, image: "", text: "" });
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
              setIsNew(true);
              setIsEditing(true);
            }}
          >
            + Add New
          </button>
        )}
      </div>

<<<<<<< HEAD
      {error && <div style={{ color: "red" }}>{error}</div>}
=======
      {error && <div style={{ marginTop: 8, color: "red" }}>{error}</div>}
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

      {isEditing ? (
        renderForm()
      ) : (
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item) => (
            <div
              key={item._id}
              style={{
                padding: 16,
                border: "1px solid #e2e8f0",
                borderRadius: 6,
                background: "#fff",
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((item) => (
            <div
              key={item._id}
              style={{
                padding: "1rem",
                border: "1px solid #e2e8f0",
                borderRadius: 6,
                background: "white",
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
              }}
            >
              <div style={{ fontWeight: "bold", marginBottom: 8 }}>
                SEED Item #{item.id}
              </div>
<<<<<<< HEAD

              <div style={{ color: "#555", fontSize: 14 }}>
                {(item?.text ?? "").substring(0, 100)}...
              </div>

              <div
                style={{
                  fontSize: 12,
                  color: "#999",
                  marginTop: 8,
                }}
              >
                DB ID: {item._id}
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                <button className="btn" onClick={() => {
                  setEditItem(item);
                  setIsNew(false);
                  setIsEditing(true);
                }}>
                  Edit
                </button>

                <button
                  className="btn"
                  style={{ background: "#fee2e2", color: "#dc2626" }}
                  onClick={() => deleteItem(item._id)}
=======
              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                }}
              >
                {item.text.substring(0, 100)}...
              </div>
              <div style={{ color: "#64748b", fontSize: "0.85rem" }}>
                ID: {item._id}
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <button
                  className="btn"
                  onClick={() => {
                    setEditItem(item);
                    setIsNew(false);
                    setIsEditing(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn"
                  style={{ background: "#fee2e2", color: "#dc2626" }}
                  onClick={() => item._id && handleDelete(item._id)}
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SeedDataManager;
