import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface AcademicCalendarData {
  _id?: string;
  data: {
    semesterTitle: string;
    pdfLink: string;
    flipbook: {
      enabled: boolean;
      note: string;
      subnote: string;
    };
    meta: {
      updatedOn: string;
      uploadedBy: string;
    };
  };
}

const AcademicCalendarDataManager: React.FC = () => {
  const [data, setData] = useState<AcademicCalendarData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<AcademicCalendarData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "academics/academiccalendardata";

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
    if (!window.confirm("Delete this calendar?")) return;
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
          {isNew ? "Create New Calendar" : "Edit Academic Calendar"}
        </h3>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">Semester Title</label>
          <input
            type="text"
            value={editItem.data.semesterTitle}
            onChange={(e) => updateField("data.semesterTitle", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
            placeholder="e.g., ODD Semester 2024–2025"
          />
        </div>

        <div className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label">PDF Link</label>
          <input
            type="text"
            value={editItem.data.pdfLink}
            onChange={(e) => updateField("data.pdfLink", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>
         <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Uploaded By</label>
            <input
              type="text"
              value={editItem.data.meta.uploadedBy}
              onChange={(e) =>
                updateField("data.meta.uploadedBy", e.target.value)
              }
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </div>

        {/* Flipbook */}
        {/* <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: 6,
          }}
        >
          <strong style={{ display: "block", marginBottom: "1rem" }}>
            Flipbook Settings
          </strong>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <input
                type="checkbox"
                checked={editItem.data.flipbook.enabled}
                onChange={(e) =>
                  updateField("data.flipbook.enabled", e.target.checked)
                }
              />
              <span>Enabled</span>
            </label>
          </div>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Note</label>
            <input
              type="text"
              value={editItem.data.flipbook.note}
              onChange={(e) =>
                updateField("data.flipbook.note", e.target.value)
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
            <label className="form-label">Sub Note</label>
            <input
              type="text"
              value={editItem.data.flipbook.subnote}
              onChange={(e) =>
                updateField("data.flipbook.subnote", e.target.value)
              }
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div> */}

        {/* Meta */}
             {/*<div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: 6,
          }}
        >
      <strong style={{ display: "block", marginBottom: "1rem" }}>
            Metadata
          </strong>

          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Updated On</label>
            <input
              type="date"
              value={editItem.data.meta.updatedOn}
              onChange={(e) =>
                updateField("data.meta.updatedOn", e.target.value)
              }
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            />
          </div> 

         
        </div>*/}

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
        <h2>Academic Calendar</h2>
        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem({
                data: {
                  semesterTitle: "",
                  pdfLink: "",
                  flipbook: {
                    enabled: true,
                    note: "",
                    subnote: "",
                  },
                  meta: {
                    updatedOn: "",
                    uploadedBy: "",
                  },
                },
              });
              setIsNew(true);
              setIsEditing(true);
            }}
          >
            + Add New Calendar
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
                {item.data.semesterTitle}
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                }}
              >
                PDF: {item.data.pdfLink}
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

export default AcademicCalendarDataManager;
