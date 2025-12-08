import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface MissionVisionData {
  _id?: string;
  data: {
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    image: string;
    videoUrl: string;
    ctaText: string;
    ctaLink: string;
  };
}

const MissionVisionDataManager: React.FC = () => {
  const [data, setData] = useState<MissionVisionData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<MissionVisionData | null>(null);
  const [isNew, setIsNew] = useState(false);

<<<<<<< HEAD
  const collectionName = "home/missionvisiondata";
=======
  const collectionName = "home__missionvissiondata";
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

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
          {isNew ? "Create New" : "Edit Mission & Vision"}
        </h3>

        {/* Mission Section */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: 6,
          }}
        >
          <strong style={{ display: "block", marginBottom: "1rem" }}>
            Mission
          </strong>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Title</label>
            <input
              type="text"
              value={editItem.data.mission.title}
              onChange={(e) =>
                updateField("data.mission.title", e.target.value)
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
            <label className="form-label">Description</label>
            <textarea
              rows={4}
              value={editItem.data.mission.description}
              onChange={(e) =>
                updateField("data.mission.description", e.target.value)
              }
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        {/* Vision Section */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: 6,
          }}
        >
          <strong style={{ display: "block", marginBottom: "1rem" }}>
            Vision
          </strong>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Title</label>
            <input
              type="text"
              value={editItem.data.vision.title}
              onChange={(e) => updateField("data.vision.title", e.target.value)}
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
              rows={4}
              value={editItem.data.vision.description}
              onChange={(e) =>
                updateField("data.vision.description", e.target.value)
              }
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        {/* Media & CTA */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: 6,
          }}
        >
          <strong style={{ display: "block", marginBottom: "1rem" }}>
            Media & Call to Action
          </strong>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Image</label>
            <input
              type="text"
              value={editItem.data.image}
              onChange={(e) => updateField("data.image", e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Video URL</label>
            <input
              type="text"
              value={editItem.data.videoUrl}
              onChange={(e) => updateField("data.videoUrl", e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">CTA Text</label>
            <input
              type="text"
              value={editItem.data.ctaText}
              onChange={(e) => updateField("data.ctaText", e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">CTA Link</label>
            <input
              type="text"
              value={editItem.data.ctaLink}
              onChange={(e) => updateField("data.ctaLink", e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </div>
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
        <h2>Mission & Vision</h2>
        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem({
                data: {
                  mission: { title: "", description: "" },
                  vision: { title: "", description: "" },
                  image: "",
                  videoUrl: "",
                  ctaText: "",
                  ctaLink: "",
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
                Mission & Vision
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                }}
              >
                Mission: {item.data.mission.title}
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                }}
              >
                Vision: {item.data.vision.title}
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

export default MissionVisionDataManager;
