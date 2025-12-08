import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface AllHomeData {
  _id?: string;
  data: {
    welcome: string;
    leadership: {
      leads: string;
    };
    stats: string;
    campus: string;
    missionVision: string;
    events: string;
    recruiters: string;
    admission: string;
    announcements: string;
    testimonials: string;
    schoolsAndColleges: string;
    carousel: string;
    newsTicker: string;
  };
}

const AllHomeDataManager: React.FC = () => {
  const [data, setData] = useState<AllHomeData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<AllHomeData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "home__allhomedata";

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
    } finally {
      setLoading(false);
    }
  };

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
    if (!window.confirm("Delete this configuration?")) return;
    try {
      await axiosInstance.delete(`/${collectionName}/${id}`);
      fetchData();
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  const updateField = (path: string, value: any) => {
    if (!editItem) return;
    const updated = { ...editItem };
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

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New" : "Edit All Home Data Configuration"}
        </h3>
        <p style={{ marginBottom: "1.5rem", color: "#64748b" }}>
          This configuration maps home page sections to their data sources.
        </p>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Welcome Data Source</label>
          <input
            type="text"
            value={editItem.data.welcome}
            onChange={(e) => updateField("data.welcome", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Leadership Leads Source</label>
          <input
            type="text"
            value={editItem.data.leadership.leads}
            onChange={(e) =>
              updateField("data.leadership.leads", e.target.value)
            }
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Stats Data Source</label>
          <input
            type="text"
            value={editItem.data.stats}
            onChange={(e) => updateField("data.stats", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Campus Data Source</label>
          <input
            type="text"
            value={editItem.data.campus}
            onChange={(e) => updateField("data.campus", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Mission Vision Data Source</label>
          <input
            type="text"
            value={editItem.data.missionVision}
            onChange={(e) => updateField("data.missionVision", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Events Data Source</label>
          <input
            type="text"
            value={editItem.data.events}
            onChange={(e) => updateField("data.events", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Recruiters Data Source</label>
          <input
            type="text"
            value={editItem.data.recruiters}
            onChange={(e) => updateField("data.recruiters", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Admission Data Source</label>
          <input
            type="text"
            value={editItem.data.admission}
            onChange={(e) => updateField("data.admission", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Announcements Data Source</label>
          <input
            type="text"
            value={editItem.data.announcements}
            onChange={(e) => updateField("data.announcements", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Testimonials Data Source</label>
          <input
            type="text"
            value={editItem.data.testimonials}
            onChange={(e) => updateField("data.testimonials", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Schools And Colleges Data Source</label>
          <input
            type="text"
            value={editItem.data.schoolsAndColleges}
            onChange={(e) =>
              updateField("data.schoolsAndColleges", e.target.value)
            }
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Carousel Data Source</label>
          <input
            type="text"
            value={editItem.data.carousel}
            onChange={(e) => updateField("data.carousel", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">News Ticker Data Source</label>
          <input
            type="text"
            value={editItem.data.newsTicker}
            onChange={(e) => updateField("data.newsTicker", e.target.value)}
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
        <h2>All Home Data Configuration</h2>
        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem({
                data: {
                  welcome: "",
                  leadership: { leads: "" },
                  stats: "",
                  campus: "",
                  missionVision: "",
                  events: "",
                  recruiters: "",
                  admission: "",
                  announcements: "",
                  testimonials: "",
                  schoolsAndColleges: "",
                  carousel: "",
                  newsTicker: "",
                },
              });
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
          {data.map((item) => (
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
                Home Data Config
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
          ))}
        </div>
      )}
    </div>
  );
};

export default AllHomeDataManager;
