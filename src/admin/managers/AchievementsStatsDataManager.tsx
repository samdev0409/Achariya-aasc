import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface StatItem {
  label: string;
  icons: string;
  startValue: number;
  endValue: number;
  suffix: string;
}

interface AchievementsStatsData {
  _id?: string;
  data: {
    items: StatItem[];
  };
}

const EMPTY_ITEM: StatItem = {
  label: "",
  icons: "",
  startValue: 0,
  endValue: 0,
  suffix: "+",
};

const sanitizeItem = (item: any): AchievementsStatsData => ({
  _id: item?._id,
  data: {
    items: Array.isArray(item?.data?.items) ? item.data.items : [],
  },
});

const AchievementsStatsDataManager: React.FC = () => {
  const [data, setData] = useState<AchievementsStatsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<AchievementsStatsData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "home/achievementsstatsdata";

  // -------------------------------
  // FETCH DATA (SAFE & CLEAN)
  // -------------------------------
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

  // -------------------------------
  // SAVE
  // -------------------------------
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

  // -------------------------------
  // DELETE
  // -------------------------------
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this item?")) return;
    try {
      await axiosInstance.delete(`/${collectionName}/${id}`);
      fetchData();
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  // -------------------------------
  // FORM ITEM UPDATES — SAFE
  // -------------------------------
  const addStatItem = () => {
    if (!editItem) return;

    setEditItem({
      ...editItem,
      data: {
        items: [...editItem.data.items, { ...EMPTY_ITEM }],
      },
    });
  };

  const updateStatItem = (index: number, field: keyof StatItem, value: any) => {
    if (!editItem) return;

    const newItems = editItem.data.items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );

    setEditItem({ ...editItem, data: { items: newItems } });
  };

  const deleteStatItem = (index: number) => {
    if (!editItem) return;

    const newItems = editItem.data.items.filter((_, i) => i !== index);

    setEditItem({ ...editItem, data: { items: newItems } });
  };

  // -------------------------------
  // FORM UI
  // -------------------------------
  const renderForm = () => {
    if (!editItem) return null;

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New" : "Edit Achievements Stats"}
        </h3>

        {/* STAT ITEMS */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <strong>Stat Items ({editItem.data.items.length})</strong>

            <button
              className="btn btn-primary"
              onClick={addStatItem}
              style={{ fontSize: "0.85rem", padding: "0.25rem 0.75rem" }}
            >
              + Add Stat Item
            </button>
          </div>

          {(editItem?.data?.items ?? []).map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                background: "#f9fafb",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
              }}
            >
              {/* HEADER */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <strong>Stat Item {index + 1}</strong>

                <button
                  className="btn"
                  onClick={() => deleteStatItem(index)}
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

              {/* FIELDS */}
              <div className="form-group" style={{ marginBottom: "0.75rem" }}>
                <label className="form-label">Label</label>
                <input
                  type="text"
                  value={item.label}
                  onChange={(e) =>
                    updateStatItem(index, "label", e.target.value)
                  }
                  style={inputStyle}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "0.75rem" }}>
                <label className="form-label">Icon</label>
                <input
                  type="text"
                  value={item.icons}
                  onChange={(e) =>
                    updateStatItem(index, "icons", e.target.value)
                  }
                  style={inputStyle}
                />
              </div>

              {/* TWO COLUMNS */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <label className="form-label">Start Value</label>
                  <input
                    type="number"
                    value={item.startValue}
                    onChange={(e) =>
                      updateStatItem(
                        index,
                        "startValue",
                        parseInt(e.target.value)
                      )
                    }
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="form-label">End Value</label>
                  <input
                    type="number"
                    value={item.endValue}
                    onChange={(e) =>
                      updateStatItem(
                        index,
                        "endValue",
                        parseInt(e.target.value)
                      )
                    }
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: "0.75rem" }}>
                <label className="form-label">Suffix</label>
                <input
                  type="text"
                  value={item.suffix}
                  onChange={(e) =>
                    updateStatItem(index, "suffix", e.target.value)
                  }
                  style={inputStyle}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ACTION BTNS */}
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
            onClick={() => setIsEditing(false)}
            style={{ background: "#ccc" }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  // -------------------------------
  // MAIN UI
  // -------------------------------
  if (loading) return <div>Loading…</div>;

  return (
    <div className="collection-manager">
      <div
        className="admin-header"
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <h2>Achievements Stats</h2>

        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem({ data: { items: [] } });
              setIsNew(true);
              setIsEditing(true);
            }}
          >
            + Add New
          </button>
        )}
      </div>

      {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}

      {isEditing ? (
        renderForm()
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((item) => (
            <div
              key={item._id}
              style={{
                padding: "1rem",
                border: "1px solid #e2e8f0",
                background: "white",
                borderRadius: 6,
              }}
            >
              <div style={{ fontWeight: "bold", marginBottom: 6 }}>
                Achievements Stats
              </div>

              <div style={{ color: "#64748b", marginBottom: 4 }}>
                Items: {item.data.items.length}
              </div>

              <div style={{ color: "#64748b", fontSize: "0.85rem" }}>
                ID: {item._id}
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <button
                  className="btn"
                  onClick={() => {
                    setEditItem(sanitizeItem(item)); // Deep-safe
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

// REUSABLE INPUT STYLE
const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  borderRadius: 4,
  border: "1px solid #ccc",
};

export default AchievementsStatsDataManager;
