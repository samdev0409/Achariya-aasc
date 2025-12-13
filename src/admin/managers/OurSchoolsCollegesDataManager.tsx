import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

// -------------------------------------------------------
// Types
// -------------------------------------------------------
interface OurSchoolsCollegesData {
  _id?: string;
  data: {
    title: string;
    logos: string[];
  };
}

// -------------------------------------------------------
// Sanitizer (prevents ALL null crashes)
// -------------------------------------------------------
const sanitizeItem = (item: any): OurSchoolsCollegesData => ({
  _id: item?._id,
  data: {
    title: item?.data?.title || "",
    logos: Array.isArray(item?.data?.logos) ? item.data.logos : [],
  },
});

const EMPTY_DATA: OurSchoolsCollegesData = {
  data: {
    title: "Our Schools And Colleges",
    logos: [],
  },
};

// -------------------------------------------------------
// Component
// -------------------------------------------------------
const OurSchoolsCollegesDataManager: React.FC = () => {
  const [data, setData] = useState<OurSchoolsCollegesData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<OurSchoolsCollegesData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "home/ourschoolscollegesdata";

  // -------------------------------------------------------
  // Fetch + SANITIZE result
  // -------------------------------------------------------
  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axiosInstance.get(`/${collectionName}`);
      const cleaned = (Array.isArray(res.data) ? res.data : [res.data]).map(
        sanitizeItem
      );
      setData(cleaned);
    } catch (err: any) {
      setError("Failed to load data: " + err.message);
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
  // Update fields
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
  // Logos manipulation
  // -------------------------------------------------------
  const addLogo = () => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    updated.data.logos.push("");

    setEditItem(updated);
  };

  const updateLogo = (index: number, value: string) => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    updated.data.logos[index] = value;

    setEditItem(updated);
  };

  const deleteLogo = (index: number) => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    updated.data.logos = updated.data.logos.filter((_, i) => i !== index);

    setEditItem(updated);
  };

  // -------------------------------------------------------
  // Form Renderer
  // -------------------------------------------------------
  const renderForm = () => {
    if (!editItem) return null;

    const safe = sanitizeItem(editItem);

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New" : "Edit Schools & Colleges"}
        </h3>

        {/* Title */}
        <div className="form-group" style={{ marginBottom: "1.5rem" }}>
          <label className="form-label">Title</label>
          <input
            type="text"
            value={safe.data.title}
            onChange={(e) => updateField("data.title", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Logos List */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <strong>School/College Logos ({safe.data.logos.length})</strong>
            <button className="btn btn-primary" onClick={addLogo}>
              + Add Logo
            </button>
          </div>

          {safe.data.logos.map((logo, index) => (
            <div
              key={index}
              style={{
                padding: "0.75rem",
                marginBottom: "1rem",
                background: "#f9fafb",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <label>Logo {index + 1}</label>
                <button
                  className="btn"
                  onClick={() => deleteLogo(index)}
                  style={{ background: "#fee2e2", color: "#dc2626" }}
                >
                  Delete
                </button>
              </div>

              <input
                type="text"
                value={logo}
                placeholder="Enter logo filename"
                onChange={(e) => updateLogo(index, e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: 4,
                  border: "1px solid #ccc",
                }}
              />
            </div>
          ))}
        </div>

        {/* Save Buttons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button
            className="btn"
            style={{ background: "#ccc" }}
            onClick={() => setIsEditing(false)}
          >
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
        <h2>Our Schools & Colleges</h2>

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

      {/* Error */}
      {error && <div style={{ color: "red" }}>{error}</div>}

      {/* Editing */}
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
                  Logos: {item.data.logos.length}
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

export default OurSchoolsCollegesDataManager;
