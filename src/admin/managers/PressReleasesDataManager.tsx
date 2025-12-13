import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface PressRelease {
  _id?: string;
  title: string;
  date: string;
  description: string;
  fileUrl: string;
}

const PressReleasesDataManager: React.FC = () => {
  const [data, setData] = useState<PressRelease[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<PressRelease | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "about/pressreleasesdata";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axiosInstance.get(`/${collectionName}`);

      // FIX: backend returns {data:null}
      const cleaned = res.data.map((item: any) => ({
        _id: item._id,
        ...(item.data || {
          title: "",
          date: "",
          description: "",
          fileUrl: ""
        }),
      }));

      setData(cleaned);
    } catch (e: any) {
      setError("Failed to load: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editItem) return;

    const payload = { data: editItem };

    try {
      if (isNew) {
        await axiosInstance.post(`/${collectionName}`, payload);
      } else {
        await axiosInstance.put(`/${collectionName}/${editItem._id}`, payload);
      }

      alert("Saved successfully");
      setIsEditing(false);
      fetchData();
    } catch (err: any) {
      alert("Error saving: " + err.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete item?")) return;

    try {
      await axiosInstance.delete(`/${collectionName}/${id}`);
      fetchData();
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  const updateField = (field: keyof PressRelease, value: any) => {
    if (!editItem) return;
    setEditItem({ ...editItem, [field]: value });
  };

  const renderForm = () => {
    if (!editItem) return null;

    return (
      <div style={{ maxWidth: 800 }}>
        <h3>{isNew ? "Add New Press Release" : "Edit Press Release"}</h3>

        {/* Title */}
        <label>Title</label>
        <input
          className="form-input"
          value={editItem.title}
          onChange={(e) => updateField("title", e.target.value)}
        />

        {/* Date */}
        <label style={{ marginTop: 8 }}>Date</label>
        <input
          type="date"
          className="form-input"
          value={editItem.date}
          onChange={(e) => updateField("date", e.target.value)}
        />

        {/* Description */}
        <label style={{ marginTop: 8 }}>Description</label>
        <textarea
          className="form-input"
          rows={4}
          value={editItem.description}
          onChange={(e) => updateField("description", e.target.value)}
        />

        {/* File URL */}
        <label style={{ marginTop: 8 }}>PDF File URL</label>
        <input
          className="form-input"
          value={editItem.fileUrl}
          onChange={(e) => updateField("fileUrl", e.target.value)}
        />

        <div style={{ marginTop: 15, display: "flex", gap: 10 }}>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button className="btn" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      </div>
    );
  };

  if (loading) return <div>Loading…</div>;

  return (
    <div>
      <h2>Press Releases</h2>

      {!isEditing && (
        <button
          className="btn btn-primary"
          style={{ marginBottom: 10 }}
          onClick={() => {
            setEditItem({
              title: "",
              date: "",
              description: "",
              fileUrl: "",
            });
            setIsNew(true);
            setIsEditing(true);
          }}
        >
          + Add New
        </button>
      )}

      {error && <div style={{ color: "red" }}>{error}</div>}

      {isEditing ? (
        renderForm()
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ddd",
                padding: 14,
                borderRadius: 6,
                background: "white",
              }}
            >
              <h3>{item.title || "Untitled"}</h3>
              <p>Date: {item.date || "—"}</p>
              <p style={{ color: "#555" }}>
                {item.description?.slice(0, 100)}...
              </p>

              {item.fileUrl && (
                <a href={item.fileUrl} target="_blank" rel="noopener noreferrer">
                  View File
                </a>
              )}

              <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
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
          ))}
        </div>
      )}
    </div>
  );
};

export default PressReleasesDataManager;
