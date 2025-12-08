import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface Member {
  id: number;
  name: string;
  designation: string;
  email: string;
  image: string;
}

interface Circular {
  title: string;
  file: string;
}

interface Objective {
  id: number;
  text: string;
}

interface CommitteeData {
  _id?: string;
  data: {
    members: Member[];
    circulars: Circular[];
    objectives: Objective[];
  };
}

const CommittiesDataManager: React.FC = () => {
  const [data, setData] = useState<CommitteeData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<CommitteeData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "committees/committiesdata";

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
    if (!window.confirm("Delete this committee?")) return;
    try {
      await axiosInstance.delete(`/${collectionName}/${id}`);
      fetchData();
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  // Member operations
  const addMember = () => {
    if (!editItem) return;
    const updated = { ...editItem };
    if (!updated.data.members) updated.data.members = [];
    const newId =
      updated.data.members.length > 0
        ? Math.max(...updated.data.members.map((m) => m.id)) + 1
        : 1;
    updated.data.members.push({
      id: newId,
      name: "",
      designation: "",
      email: "",
      image: "",
    });
    setEditItem(updated);
  };

  const updateMember = (index: number, field: keyof Member, value: any) => {
    if (!editItem) return;
    const updated = { ...editItem };
    (updated.data.members[index] as any)[field] = value;
    setEditItem(updated);
  };

  const deleteMember = (index: number) => {
    if (!editItem) return;
    const updated = { ...editItem };
    updated.data.members = updated.data.members.filter((_, i) => i !== index);
    setEditItem(updated);
  };

  // Circular operations
  const addCircular = () => {
    if (!editItem) return;
    const updated = { ...editItem };
    if (!updated.data.circulars) updated.data.circulars = [];
    updated.data.circulars.push({ title: "", file: "" });
    setEditItem(updated);
  };

  const updateCircular = (
    index: number,
    field: keyof Circular,
    value: string
  ) => {
    if (!editItem) return;
    const updated = { ...editItem };
    updated.data.circulars[index][field] = value;
    setEditItem(updated);
  };

  const deleteCircular = (index: number) => {
    if (!editItem) return;
    const updated = { ...editItem };
    updated.data.circulars = updated.data.circulars.filter(
      (_, i) => i !== index
    );
    setEditItem(updated);
  };

  // Objective operations
  const addObjective = () => {
    if (!editItem) return;
    const updated = { ...editItem };
    if (!updated.data.objectives) updated.data.objectives = [];
    const newId =
      updated.data.objectives.length > 0
        ? Math.max(...updated.data.objectives.map((o) => o.id)) + 1
        : 1;
    updated.data.objectives.push({ id: newId, text: "" });
    setEditItem(updated);
  };

  const updateObjective = (
    index: number,
    field: keyof Objective,
    value: any
  ) => {
    if (!editItem) return;
    const updated = { ...editItem };
    (updated.data.objectives[index] as any)[field] = value;
    setEditItem(updated);
  };

  const deleteObjective = (index: number) => {
    if (!editItem) return;
    const updated = { ...editItem };
    updated.data.objectives = updated.data.objectives.filter(
      (_, i) => i !== index
    );
    setEditItem(updated);
  };

  const renderForm = () => {
    if (!editItem) return null;

    return (
      <div className="form-container" style={{ maxWidth: 900 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New Committee" : "Edit Committee"}
        </h3>

        {/* Members Section */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <strong>Members ({editItem.data.members?.length || 0})</strong>
            <button
              className="btn btn-primary"
              onClick={addMember}
              style={{ fontSize: "0.85rem", padding: "0.25rem 0.75rem" }}
            >
              + Add Member
            </button>
          </div>

          {editItem.data.members?.map((member, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                background: "white",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <strong>Member {index + 1}</strong>
                <button
                  className="btn"
                  onClick={() => deleteMember(index)}
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

              <div className="form-group" style={{ marginBottom: "0.75rem" }}>
                <label className="form-label">ID</label>
                <input
                  type="number"
                  value={member.id}
                  onChange={(e) =>
                    updateMember(index, "id", parseInt(e.target.value))
                  }
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "0.75rem" }}>
                <label className="form-label">Name</label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => updateMember(index, "name", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "0.75rem" }}>
                <label className="form-label">Designation</label>
                <input
                  type="text"
                  value={member.designation}
                  onChange={(e) =>
                    updateMember(index, "designation", e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: "0.75rem" }}>
                <label className="form-label">Email</label>
                <input
                  type="email"
                  value={member.email}
                  onChange={(e) => updateMember(index, "email", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Image</label>
                <input
                  type="text"
                  value={member.image}
                  onChange={(e) => updateMember(index, "image", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Circulars Section */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <strong>Circulars ({editItem.data.circulars?.length || 0})</strong>
            <button
              className="btn btn-primary"
              onClick={addCircular}
              style={{ fontSize: "0.85rem", padding: "0.25rem 0.75rem" }}
            >
              + Add Circular
            </button>
          </div>

          {editItem.data.circulars?.map((circular, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                background: "white",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <strong>Circular {index + 1}</strong>
                <button
                  className="btn"
                  onClick={() => deleteCircular(index)}
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

              <div className="form-group" style={{ marginBottom: "0.75rem" }}>
                <label className="form-label">Title</label>
                <input
                  type="text"
                  value={circular.title}
                  onChange={(e) =>
                    updateCircular(index, "title", e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">File</label>
                <input
                  type="text"
                  value={circular.file}
                  onChange={(e) =>
                    updateCircular(index, "file", e.target.value)
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
          ))}
        </div>

        {/* Objectives Section */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <strong>
              Objectives ({editItem.data.objectives?.length || 0})
            </strong>
            <button
              className="btn btn-primary"
              onClick={addObjective}
              style={{ fontSize: "0.85rem", padding: "0.25rem 0.75rem" }}
            >
              + Add Objective
            </button>
          </div>

          {editItem.data.objectives?.map((objective, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                background: "white",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <strong>Objective {index + 1}</strong>
                <button
                  className="btn"
                  onClick={() => deleteObjective(index)}
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

              <div className="form-group" style={{ marginBottom: "0.75rem" }}>
                <label className="form-label">ID</label>
                <input
                  type="number"
                  value={objective.id}
                  onChange={(e) =>
                    updateObjective(index, "id", parseInt(e.target.value))
                  }
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Text</label>
                <textarea
                  rows={3}
                  value={objective.text}
                  onChange={(e) =>
                    updateObjective(index, "text", e.target.value)
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
          ))}
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
        <h2>Committee Data</h2>
        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem({
                data: {
                  members: [],
                  circulars: [],
                  objectives: [],
                },
              });
              setIsNew(true);
              setIsEditing(true);
            }}
          >
            + Add New Committee
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
                Committee
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                }}
              >
                Members: {item.data.members?.length || 0}
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                }}
              >
                Circulars: {item.data.circulars?.length || 0}
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: "0.85rem",
                  marginBottom: 4,
                }}
              >
                Objectives: {item.data.objectives?.length || 0}
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

export default CommittiesDataManager;
