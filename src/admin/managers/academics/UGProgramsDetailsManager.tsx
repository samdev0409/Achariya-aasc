import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";

interface UGProgram {
  _id?: string;
  id: number | string;
  programme: string;
  degree: string;
  stream: string;
  category: string;
}

const UGProgramsDetailsManager: React.FC = () => {
  const [data, setData] = useState<UGProgram[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [editItem, setEditItem] = useState<UGProgram | null>(null);

  const collectionName = "academics/ugprogramsdatadetails";

  // ---------------------------
  // FETCH DATA
  // ---------------------------
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await axiosInstance.get(`/${collectionName}`);

      // Clean API structure: extract "data"
      const cleaned = res.data.map((item: any) => ({
        _id: item._id,
        ...item.data, // flatten inside data
      }));

      setData(cleaned);
    } catch (e: any) {
      setError("Failed to load: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------
  // SAVE (Create / Update)
  // ---------------------------
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

  // ---------------------------
  // DELETE
  // ---------------------------
  const handleDelete = async (id: string) => {
    if (!window.confirm("Do you want to delete this programme?")) return;

    try {
      await axiosInstance.delete(`/${collectionName}/${id}`);
      fetchData();
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  // ---------------------------
  // FORM FIELD UPDATER
  // ---------------------------
  const updateField = (field: keyof UGProgram, value: any) => {
    if (!editItem) return;
    setEditItem({ ...editItem, [field]: value });
  };

  // ---------------------------
  // FORM UI
  // ---------------------------
  const renderForm = () => {
    if (!editItem) return null;

    return (
      <div style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.2rem" }}>
          {isNew ? "Add New UG Programme" : "Edit UG Programme"}
        </h3>

        {/* ID */}
        {/* <label>ID (numeric order)</label>
        <input
          className="form-input"
          type="number"
          value={editItem.id}
          onChange={(e) => updateField("id", Number(e.target.value))}
          style={{ width: "100%", marginBottom: "1rem" }}
        /> */}

        {/* Programme Name */}
        <label>Programme Name</label>
        <input
          className="form-input"
          value={editItem.programme}
          onChange={(e) => updateField("programme", e.target.value)}
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        {/* Degree */}
        <label>Degree</label>
        <input
          className="form-input"
          value={editItem.degree}
          onChange={(e) => updateField("degree", e.target.value)}
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        {/* Stream */}
        <label>Stream</label>
        <input
          className="form-input"
          value={editItem.stream}
          onChange={(e) => updateField("stream", e.target.value)}
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        {/* Category */}
        <label>Category (Existing / Proposing)</label>
        <input
          className="form-input"
          value={editItem.category}
          onChange={(e) => updateField("category", e.target.value)}
          style={{ width: "100%", marginBottom: "1rem" }}
        />

        <div style={{ display: "flex", gap: "1rem", marginTop: "1.2rem" }}>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
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

  // ---------------------------
  // MAIN RENDER
  // ---------------------------
  if (loading) return <div>Loading…</div>;

  return (
    <div>
      <h2>UG Programmes Details</h2>

      {!isEditing && (
        <button
          className="btn btn-primary"
          style={{ marginBottom: "1rem" }}
          onClick={() => {
            setIsNew(true);
            setEditItem({
              id: "",
              programme: "",
              degree: "",
              stream: "",
              category: "",
            });
            setIsEditing(true);
          }}
        >
          + Add New Programme
        </button>
      )}

      {error && <div style={{ color: "red" }}>{error}</div>}

      {isEditing ? (
        renderForm()
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #e2e8f0",
                padding: "1rem",
                borderRadius: 6,
                background: "white",
              }}
            >
              <h3 style={{ fontWeight: "bold", marginBottom: 6 }}>
                {item.degree} - {item.stream}
              </h3>
              {/* <div>ID: {item.id}</div> */}
              <div>Degree: {item.degree}</div>
              <div>Stream: {item.stream}</div>
              <div>Category: {item.category}</div>

              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <button
                  className="btn"
                  onClick={() => {
                    setIsNew(false);
                    setEditItem(item);
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

export default UGProgramsDetailsManager;
