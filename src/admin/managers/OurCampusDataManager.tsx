import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

// -------------------------------------------------------
// Types
// -------------------------------------------------------
interface OurCampusData {
  _id?: string;
  data: {
    title: string;
    image: string;
    videoUrl: string;
    paragraphs: string[];
  };
}

// -------------------------------------------------------
// Sanitizer (MOST IMPORTANT — prevents ALL crashes)
// -------------------------------------------------------
const sanitizeItem = (item: any): OurCampusData => ({
  _id: item?._id,
  data: {
    title: item?.data?.title || "",
    image: item?.data?.image || "",
    videoUrl: item?.data?.videoUrl || "",
    paragraphs: Array.isArray(item?.data?.paragraphs)
      ? item.data.paragraphs
      : [],
  },
});

// Default empty object used when creating a new record
const EMPTY_DATA: OurCampusData = {
  data: {
    title: "",
    image: "",
    videoUrl: "",
    paragraphs: [],
  },
};

// -------------------------------------------------------
// Component
// -------------------------------------------------------
const OurCampusDataManager: React.FC = () => {
  const [data, setData] = useState<OurCampusData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<OurCampusData | null>(null);
  const [isNew, setIsNew] = useState(false);

<<<<<<< HEAD
  const collectionName = "home/ourcampusdata";
=======
  const collectionName = "home__ourcampusdata";
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

  // -------------------------------------------------------
  // Fetch + Sanitize Data
  // -------------------------------------------------------
  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axiosInstance.get(`/${collectionName}`);

<<<<<<< HEAD
      const cleaned = (Array.isArray(res.data) ? res.data : [res.data]).map(
        sanitizeItem
      );
=======
      const cleaned = (Array.isArray(res.data) ? res.data : [res.data])
        .map(sanitizeItem);
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

      setData(cleaned);
    } catch (e: any) {
      setError("Failed to load data: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // -------------------------------------------------------
  // Save
  // -------------------------------------------------------
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

  // -------------------------------------------------------
  // Delete
  // -------------------------------------------------------
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this item?")) return;

    try {
      await axiosInstance.delete(`/${collectionName}/${id}`);
      fetchData();
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  // -------------------------------------------------------
  // Field Updates
  // -------------------------------------------------------
  const updateField = (path: string, value: any) => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    const parts = path.split(".");
    let current: any = updated;

    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) current[parts[i]] = {};
      current = current[parts[i]];
    }

    current[parts[parts.length - 1]] = value;
    setEditItem(updated);
  };

  // -------------------------------------------------------
  // Paragraph Controls
  // -------------------------------------------------------
  const addParagraph = () => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    updated.data.paragraphs.push("");

    setEditItem(updated);
  };

  const updateParagraph = (index: number, value: string) => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    updated.data.paragraphs[index] = value;

    setEditItem(updated);
  };

  const deleteParagraph = (index: number) => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
<<<<<<< HEAD
    updated.data.paragraphs = updated.data.paragraphs.filter(
      (_, i) => i !== index
    );
=======
    updated.data.paragraphs = updated.data.paragraphs.filter((_, i) => i !== index);
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

    setEditItem(updated);
  };

  // -------------------------------------------------------
  // Render Form
  // -------------------------------------------------------
  const renderForm = () => {
    if (!editItem) return null;

    const safe = sanitizeItem(editItem);

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: 20 }}>
          {isNew ? "Create New Our Campus Entry" : "Edit Our Campus"}
        </h3>

        {/* Title */}
        <div className="form-group" style={{ marginBottom: 12 }}>
          <label className="form-label">Title</label>
          <input
            type="text"
            value={safe.data.title}
            onChange={(e) => updateField("data.title", e.target.value)}
<<<<<<< HEAD
            style={{
              width: "100%",
              padding: ".5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
=======
            style={{ width: "100%", padding: ".5rem", borderRadius: 4, border: "1px solid #ccc" }}
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
          />
        </div>

        {/* Image */}
        <div className="form-group" style={{ marginBottom: 12 }}>
          <label className="form-label">Image URL</label>
          <input
            type="text"
            value={safe.data.image}
            onChange={(e) => updateField("data.image", e.target.value)}
<<<<<<< HEAD
            style={{
              width: "100%",
              padding: ".5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
=======
            style={{ width: "100%", padding: ".5rem", borderRadius: 4, border: "1px solid #ccc" }}
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
          />
        </div>

        {/* Video URL */}
        <div className="form-group" style={{ marginBottom: 12 }}>
          <label className="form-label">Video URL</label>
          <input
            type="text"
            value={safe.data.videoUrl}
            onChange={(e) => updateField("data.videoUrl", e.target.value)}
<<<<<<< HEAD
            style={{
              width: "100%",
              padding: ".5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
=======
            style={{ width: "100%", padding: ".5rem", borderRadius: 4, border: "1px solid #ccc" }}
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
          />
        </div>

        {/* Paragraphs */}
        <div style={{ marginTop: "1.5rem" }}>
<<<<<<< HEAD
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
=======
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
            <strong>Paragraphs ({safe.data.paragraphs.length})</strong>
            <button className="btn btn-primary" onClick={addParagraph}>
              + Add Paragraph
            </button>
          </div>

          {safe.data.paragraphs.map((para, index) => (
            <div
              key={index}
              style={{
                padding: "0.75rem",
                background: "#f9fafb",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                marginBottom: "1rem",
              }}
            >
<<<<<<< HEAD
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
=======
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                <label>Paragraph {index + 1}</label>
                <button
                  className="btn"
                  style={{ background: "#fee2e2", color: "#dc2626" }}
                  onClick={() => deleteParagraph(index)}
                >
                  Delete
                </button>
              </div>

              <textarea
                rows={4}
                value={para}
                onChange={(e) => updateParagraph(index, e.target.value)}
                style={{
                  width: "100%",
                  padding: ".5rem",
                  borderRadius: 4,
                  border: "1px solid #ccc",
                }}
              />
            </div>
          ))}
        </div>

        {/* Save Buttons */}
        <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
<<<<<<< HEAD
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button
            className="btn"
            style={{ background: "#ccc" }}
            onClick={() => setIsEditing(false)}
          >
=======
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn" style={{ background: "#ccc" }} onClick={() => setIsEditing(false)}>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
            Cancel
          </button>
        </div>
      </div>
    );
  };

  // -------------------------------------------------------
  // Main UI
  // -------------------------------------------------------
  if (loading) return <div>Loading…</div>;

  return (
    <div className="collection-manager">
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <h2>Our Campus</h2>

        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem(EMPTY_DATA);
              setIsNew(true);
              setIsEditing(true);
            }}
          >
            + Add New
          </button>
        )}
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      {isEditing ? (
        renderForm()
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((raw) => {
            const item = sanitizeItem(raw);

            return (
              <div
                key={item._id}
                style={{
                  padding: "1rem",
                  border: "1px solid #e2e8f0",
                  borderRadius: 6,
                  background: "white",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: 8 }}>
                  {item.data.title || "Untitled"}
                </div>

                <div style={{ color: "#64748b", marginBottom: 4 }}>
                  Paragraphs: {item.data.paragraphs.length}
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
                    onClick={() => item._id && handleDelete(item._id!)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OurCampusDataManager;
