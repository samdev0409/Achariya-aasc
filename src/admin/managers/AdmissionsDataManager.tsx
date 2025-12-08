import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

// -----------------------------------------------------
// Types
// -----------------------------------------------------
interface AdmissionsData {
  _id?: string;
  data: {
    title: string;
    formTitle: string;
    paragraphs: string[];
  };
}

// -----------------------------------------------------
// Ensure backend response is always safe
// -----------------------------------------------------
const sanitizeItem = (item: any): AdmissionsData => ({
  _id: item?._id,
  data: {
    title: item?.data?.title ?? "",
    formTitle: item?.data?.formTitle ?? "",
    paragraphs: Array.isArray(item?.data?.paragraphs)
      ? item.data.paragraphs
      : [],
  },
});

const EMPTY_DATA: AdmissionsData = {
  data: {
    title: "",
    formTitle: "",
    paragraphs: [],
  },
};

// -----------------------------------------------------
// Component
// -----------------------------------------------------
const AdmissionsDataManager: React.FC = () => {
  const [data, setData] = useState<AdmissionsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<AdmissionsData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "home/admissionsdata";

  // -----------------------------------------------------
  // LOAD DATA
  // -----------------------------------------------------
  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axiosInstance.get(`/${collectionName}`);

      const cleaned = (Array.isArray(res.data) ? res.data : [res.data]).map(
        sanitizeItem
      );

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

  // -----------------------------------------------------
  // SAVE
  // -----------------------------------------------------
  const handleSave = async () => {
    if (!editItem) return;

    try {
      if (isNew) {
        await axiosInstance.post(`/${collectionName}`, editItem);
      } else {
        await axiosInstance.put(`/${collectionName}/${editItem._id}`, editItem);
      }

      alert("Saved successfully!");
      setIsEditing(false);
      fetchData();
    } catch (err: any) {
      alert("Error saving: " + err.message);
    }
  };

  // -----------------------------------------------------
  // DELETE
  // -----------------------------------------------------
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this entry?")) return;

    try {
      await axiosInstance.delete(`/${collectionName}/${id}`);
      fetchData();
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  // -----------------------------------------------------
  // FIELD UPDATES
  // -----------------------------------------------------
  const updateField = (key: keyof AdmissionsData["data"], value: any) => {
    if (!editItem) return;

    setEditItem({
      ...editItem,
      data: {
        ...editItem.data,
        [key]: value,
      },
    });
  };

  const addParagraph = () => {
    if (!editItem) return;

    setEditItem({
      ...editItem,
      data: {
        ...editItem.data,
        paragraphs: [...editItem.data.paragraphs, ""],
      },
    });
  };

  const updateParagraph = (index: number, value: string) => {
    if (!editItem) return;

    const newParas = [...editItem.data.paragraphs];
    newParas[index] = value;

    setEditItem({
      ...editItem,
      data: {
        ...editItem.data,
        paragraphs: newParas,
      },
    });
  };

  const deleteParagraph = (index: number) => {
    if (!editItem) return;

    const newParas = editItem.data.paragraphs.filter((_, i) => i !== index);

    setEditItem({
      ...editItem,
      data: { ...editItem.data, paragraphs: newParas },
    });
  };

  // -----------------------------------------------------
  // FORM RENDER
  // -----------------------------------------------------
  const renderForm = () => {
    if (!editItem) return null;

    const safe = sanitizeItem(editItem);

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New Admissions Entry" : "Edit Admissions Data"}
        </h3>

        {/* Title */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Title</label>
          <input
            type="text"
            value={safe.data.title}
            onChange={(e) => updateField("title", e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Form Title */}
        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Form Title</label>
          <input
            type="text"
            value={safe.data.formTitle}
            onChange={(e) => updateField("formTitle", e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Paragraphs */}
        <div style={{ marginTop: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
            }}
          >
            <strong>Paragraphs ({safe.data.paragraphs.length})</strong>
            <button
              className="btn btn-primary"
              onClick={addParagraph}
              style={{ fontSize: "0.85rem", padding: "0.25rem 0.75rem" }}
            >
              + Add Paragraph
            </button>
          </div>

          {safe.data.paragraphs.map((para, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1rem",
                padding: "0.75rem",
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
                <label className="form-label">Paragraph {index + 1}</label>
                <button
                  className="btn"
                  onClick={() => deleteParagraph(index)}
                  style={{
                    fontSize: "0.8rem",
                    padding: "0.25rem 0.5rem",
                    background: "#fee2e2",
                    color: "#dc2626",
                  }}
                >
                  Delete
                </button>
              </div>

              <textarea
                rows={4}
                value={para}
                onChange={(e) => updateParagraph(index, e.target.value)}
                style={inputStyle}
              />
            </div>
          ))}
        </div>

        {/* Footer Buttons */}
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

  // -----------------------------------------------------
  // MAIN UI
  // -----------------------------------------------------
  if (loading) return <div>Loading…</div>;

  return (
    <div className="collection-manager">
      <div
        className="admin-header"
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <h2>Admissions Data</h2>

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

      {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}

      {isEditing ? (
        renderForm()
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((item) => {
            const safe = sanitizeItem(item);

            return (
              <div
                key={item._id}
                style={{
                  padding: "1rem",
                  border: "1px solid #e2e8f0",
                  background: "white",
                  borderRadius: 6,
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: 8 }}>
                  {safe.data.title || "Untitled"}
                </div>

                <div style={{ color: "#64748b", marginBottom: 4 }}>
                  Form: {safe.data.formTitle}
                </div>

                <div style={{ color: "#64748b", marginBottom: 4 }}>
                  Paragraphs: {safe.data.paragraphs.length}
                </div>

                <div style={{ color: "#64748b", fontSize: "0.85rem" }}>
                  ID: {item._id}
                </div>

                <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => {
                      setEditItem(sanitizeItem(item));
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

// -----------------------------------------------------
// Shared Styles
// -----------------------------------------------------
const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  borderRadius: 4,
  border: "1px solid #ccc",
};

export default AdmissionsDataManager;
