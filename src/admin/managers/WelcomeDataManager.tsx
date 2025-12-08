import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface WelcomeData {
  _id?: string;
  data: {
    title: string;
    description: string;
  };
}

// ------------------------------
// UNIVERSAL SANITIZER
// ------------------------------
const sanitize = (item: any): WelcomeData => ({
  _id: item?._id || "",
  data: {
    title: item?.data?.title || "",
    description: item?.data?.description || "",
  },
});

// default empty safe object
const EMPTY_ITEM: WelcomeData = {
  data: { title: "", description: "" },
};

const WelcomeDataManager: React.FC = () => {
  const [data, setData] = useState<WelcomeData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<WelcomeData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "home__welcomedata";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axiosInstance.get(`/${collectionName}`);

      const cleaned = (Array.isArray(res.data) ? res.data : [res.data]).map(
        sanitize
      );

      setData(cleaned);
    } catch (e: any) {
      setError("Failed to load data: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editItem) return;

    const safe = sanitize(editItem);

    try {
      if (isNew) {
        await axiosInstance.post(`/${collectionName}`, safe);
      } else {
        await axiosInstance.put(`/${collectionName}/${safe._id}`, safe);
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

  const updateField = (path: string, value: any) => {
    if (!editItem) return;

    const updated = sanitize(editItem);
    const parts = path.split(".");
    let current: any = updated;

    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) current[parts[i]] = {};
      current = current[parts[i]];
    }

    current[parts[parts.length - 1]] = value;
    setEditItem(updated);
  };

  const renderForm = () => {
    if (!editItem) return null;

    const safe = sanitize(editItem);

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New Welcome Data" : "Edit Welcome Data"}
        </h3>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
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

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Description</label>
          <textarea
            rows={6}
            value={safe.data.description}
            onChange={(e) => updateField("data.description", e.target.value)}
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
            Cancel
          </button>
        </div>
      </div>
    );
  };

  if (loading) return <div>Loading…</div>;

  return (
    <div className="collection-manager">
      <div
        className="admin-header"
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <h2>Welcome Data</h2>
        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem(EMPTY_ITEM);
              setIsNew(true);
              setIsEditing(true);
            }}
          >
            + Add New
          </button>
        )}
      </div>

      {error && <div style={{ marginTop: 8, color: "red" }}>{error}</div>}

      {isEditing ? (
        renderForm()
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((raw) => {
            const item = sanitize(raw);

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
                  {item.data.title || "(Untitled)"}
                </div>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: "0.85rem",
                    marginBottom: 4,
                  }}
                >
                  {item.data.description
                    ? item.data.description.substring(0, 100) + "..."
                    : "(No description)"}
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

export default WelcomeDataManager;
