import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface ChiefMentorData {
  _id?: string;
  data: {
    banner: {
      title: string;
      image: string;
    };
    content: {
      title: string;
      ourleadsimage: string;    
      cheifmentordeskimage: string;
      paragraphs: string[];
      signOff: {
        text: string;
        name: string;
        title: string;
      };
    };
    cta?: any;
  };
}

const ChiefMentorDataManager: React.FC = () => {
  const [data, setData] = useState<ChiefMentorData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<ChiefMentorData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "about__chiefmentordata";

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

  const addParagraph = () => {
    if (!editItem) return;
    const updated = { ...editItem };
    if (!updated.data.content.paragraphs) {
      updated.data.content.paragraphs = [];
    }
    updated.data.content.paragraphs.push("");
    setEditItem(updated);
  };

  const updateParagraph = (index: number, value: string) => {
    if (!editItem) return;
    const updated = { ...editItem };
    updated.data.content.paragraphs[index] = value;
    setEditItem(updated);
  };

  const deleteParagraph = (index: number) => {
    if (!editItem) return;
    const updated = { ...editItem };
    updated.data.content.paragraphs = updated.data.content.paragraphs.filter(
      (_, i) => i !== index
    );
    setEditItem(updated);
  };

  const renderForm = () => {
    if (!editItem) return null;

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New" : "Edit Chief Mentor Data"}
        </h3>

        {/* Banner Section */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: 6,
          }}
        >
          <strong style={{ display: "block", marginBottom: "1rem" }}>
            Banner
          </strong>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-input"
              value={editItem.data.banner.title}
              onChange={(e) => updateField("data.banner.title", e.target.value)}
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
              value={editItem.data.banner.image}
              onChange={(e) => updateField("data.banner.image", e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: 6,
          }}
        >
          <strong style={{ display: "block", marginBottom: "1rem" }}>
            Content
          </strong>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-input"
              value={editItem.data.content.title}
              onChange={(e) =>
                updateField("data.content.title", e.target.value)
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
            <label className="form-label">Our Leads Image</label>
            <input
              type="text"
              className="form-input"
              value={editItem.data.content.ourleadsimage}
              onChange={(e) =>
                updateField("data.content.ourleadsimage", e.target.value)
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
            <label className="form-label">Chief Mentor Desk Image</label>
            <input
              type="text"
              className="form-input"
              value={editItem.data.content.cheifmentordeskimage}
              onChange={(e) =>
                updateField("data.content.cheifmentordeskimage", e.target.value)
              }
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Paragraphs Array */}
          <div style={{ marginTop: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <strong>
                Paragraphs ({editItem.data.content.paragraphs?.length || 0})
              </strong>
              <button
                className="btn btn-primary"
                onClick={addParagraph}
                style={{ fontSize: "0.85rem", padding: "0.25rem 0.75rem" }}
              >
                + Add Paragraph
              </button>
            </div>

            {editItem.data.content.paragraphs?.map((para, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  padding: "0.75rem",
                  background: "white",
                  borderRadius: 4,
                  border: "1px solid #e2e8f0",
                }}
              >
                <label className="form-label">Paragraph {index + 1}</label>
                <textarea
                  className="form-input"
                  rows={4}
                  value={para}
                  onChange={(e) => updateParagraph(index, e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  className="btn"
                  onClick={() => deleteParagraph(index)}
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.8rem",
                    padding: "0.25rem 0.5rem",
                    background: "#fee2e2",
                    color: "#dc2626",
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Sign Off */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem",
              background: "white",
              borderRadius: 4,
              border: "1px solid #e2e8f0",
            }}
          >
            <strong style={{ display: "block", marginBottom: "1rem" }}>
              Sign Off
            </strong>

            <div className="form-group" style={{ marginBottom: "1rem" }}>
              <label className="form-label">Text</label>
              <input
                type="text"
                className="form-input"
                value={editItem.data.content.signOff.text}
                onChange={(e) =>
                  updateField("data.content.signOff.text", e.target.value)
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
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-input"
                value={editItem.data.content.signOff.name}
                onChange={(e) =>
                  updateField("data.content.signOff.name", e.target.value)
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
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-input"
                value={editItem.data.content.signOff.title}
                onChange={(e) =>
                  updateField("data.content.signOff.title", e.target.value)
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
        <h2>Chief Mentor Data</h2>
        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem({
                data: {
                  banner: { title: "", image: "" },
                  content: {
                    title: "",
                    ourleadsimage: "",
                    cheifmentordeskimage: "",
                    paragraphs: [],
                    signOff: { text: "", name: "", title: "" },
                  },
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
                {item.data.banner.title || "Chief Mentor Data"}
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

export default ChiefMentorDataManager;
