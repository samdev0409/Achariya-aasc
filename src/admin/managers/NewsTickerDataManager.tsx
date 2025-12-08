import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

// ---------------------------------------------
// Types
// ---------------------------------------------
interface NewsTickerData {
  _id?: string;
  data: {
    items: string[];
  };
}

// ---------------------------------------------
// Sanitizer (prevents all null crashes)
// ---------------------------------------------
const sanitizeItem = (item: any): NewsTickerData => ({
  _id: item?._id,
  data: {
    items: Array.isArray(item?.data?.items) ? item.data.items : [],
  },
});

const EMPTY_NEWS_TICKER: NewsTickerData = {
  data: {
    items: [],
  },
};

// ---------------------------------------------
// Component
// ---------------------------------------------
const NewsTickerDataManager: React.FC = () => {
  const [data, setData] = useState<NewsTickerData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<NewsTickerData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "home__newstickerdata";

  // ---------------------------------------------
  // Fetch & Sanitize Data
  // ---------------------------------------------
  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axiosInstance.get(`/${collectionName}`);

      const cleaned = (Array.isArray(res.data) ? res.data : [res.data])
        .map(sanitizeItem);

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

  // ---------------------------------------------
  // Save
  // ---------------------------------------------
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

  // ---------------------------------------------
  // Delete
  // ---------------------------------------------
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this news ticker?")) return;

    try {
      await axiosInstance.delete(`/${collectionName}/${id}`);
      fetchData();
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  // ---------------------------------------------
  // Add / Update / Delete item
  // ---------------------------------------------
  const addItem = () => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    updated.data.items.push("");

    setEditItem(updated);
  };

  const updateItem = (index: number, value: string) => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    updated.data.items[index] = value;

    setEditItem(updated);
  };

  const deleteItem = (index: number) => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    updated.data.items = updated.data.items.filter((_, i) => i !== index);

    setEditItem(updated);
  };

  // ---------------------------------------------
  // FORM UI
  // ---------------------------------------------
  const renderForm = () => {
    if (!editItem) return null;

    const safe = sanitizeItem(editItem);

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New News Ticker" : "Edit News Ticker"}
        </h3>

        {/* Items list */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <strong>News Items ({safe.data.items.length})</strong>

            <button
              className="btn btn-primary"
              onClick={addItem}
              style={{ fontSize: "0.85rem", padding: "0.25rem 0.75rem" }}
            >
              + Add News Item
            </button>
          </div>

          {safe.data.items.map((text, index) => (
            <div
              key={index}
              style={{
                background: "#f9fafb",
                padding: "0.75rem",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <label className="form-label">News Item {index + 1}</label>

                <button
                  className="btn"
                  onClick={() => deleteItem(index)}
                  style={{
                    background: "#fee2e2",
                    color: "#dc2626",
                    fontSize: "0.8rem",
                  }}
                >
                  Delete
                </button>
              </div>

              <textarea
                rows={3}
                value={text}
                onChange={(e) => updateItem(index, e.target.value)}
                placeholder="Enter news text"
                style={{
                  width: "100%",
                  borderRadius: 4,
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div
          style={{
            borderTop: "1px solid #e2e8f0",
            paddingTop: "1rem",
            display: "flex",
            gap: "1rem",
          }}
        >
          <button className="btn btn-primary" onClick={handleSave}>
            Save Changes
          </button>

          <button
            className="btn"
            onClick={() => setIsEditing(false)}
            style={{ background: "#ccc" }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  // ---------------------------------------------
  // MAIN UI
  // ---------------------------------------------
  if (loading) return <div>Loading…</div>;

  return (
    <div className="collection-manager">
      {/* Header */}
      <div
        className="admin-header"
        style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
      >
        <h2>News Ticker Data</h2>

        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem(EMPTY_NEWS_TICKER);
              setIsNew(true);
              setIsEditing(true);
            }}
          >
            + Add News Ticker
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
                  background: "white",
                  borderRadius: 6,
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: 8 }}>
                  News Ticker
                </div>

                <div style={{ color: "#64748b", marginBottom: 4 }}>
                  Items: {item.data.items.length}
                </div>

                <div style={{ color: "#64748b", fontSize: "0.85rem" }}>
                  ID: {item._id}
                </div>

                {/* Buttons */}
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

export default NewsTickerDataManager;
