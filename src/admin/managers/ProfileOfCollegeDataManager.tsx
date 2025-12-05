import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface DetailItem {
  label: string;
  value: string;
}

interface DetailSection {
  title: string;
  icon: string;
  items: DetailItem[];
}

interface ProfileOfCollegeData {
  _id?: string;
  data: {
    banner: {
      title: string;
      image: string;
    };
    header: {
      logo: string;
      title: string;
      description: string;
    };
    details: DetailSection[];
  };
}

const ProfileOfCollegeDataManager: React.FC = () => {
  const [data, setData] = useState<ProfileOfCollegeData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<ProfileOfCollegeData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "about__profileofcollegedata";

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

  const addDetailSection = () => {
    if (!editItem) return;
    const updated = { ...editItem };
    if (!updated.data.details) updated.data.details = [];
    updated.data.details.push({ title: "", icon: "", items: [] });
    setEditItem(updated);
  };

  const deleteDetailSection = (index: number) => {
    if (!editItem) return;
    const updated = { ...editItem };
    updated.data.details = updated.data.details.filter((_, i) => i !== index);
    setEditItem(updated);
  };

  const updateDetailSection = (index: number, field: string, value: any) => {
    if (!editItem) return;
    const updated = { ...editItem };
    (updated.data.details[index] as any)[field] = value;
    setEditItem(updated);
  };

  const addDetailItem = (sectionIndex: number) => {
    if (!editItem) return;
    const updated = { ...editItem };
    if (!updated.data.details[sectionIndex].items) {
      updated.data.details[sectionIndex].items = [];
    }
    updated.data.details[sectionIndex].items.push({ label: "", value: "" });
    setEditItem(updated);
  };

  const deleteDetailItem = (sectionIndex: number, itemIndex: number) => {
    if (!editItem) return;
    const updated = { ...editItem };
    updated.data.details[sectionIndex].items = updated.data.details[
      sectionIndex
    ].items.filter((_, i) => i !== itemIndex);
    setEditItem(updated);
  };

  const updateDetailItem = (
    sectionIndex: number,
    itemIndex: number,
    field: string,
    value: string
  ) => {
    if (!editItem) return;
    const updated = { ...editItem };
    (updated.data.details[sectionIndex].items[itemIndex] as any)[field] = value;
    setEditItem(updated);
  };

  const renderForm = () => {
    if (!editItem) return null;

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New" : "Edit Profile of College"}
        </h3>

        {/* Banner */}
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

        {/* Header */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f9fafb",
            borderRadius: 6,
          }}
        >
          <strong style={{ display: "block", marginBottom: "1rem" }}>
            Header
          </strong>
          <div className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label">Logo</label>
            <input
              type="text"
              value={editItem.data.header.logo}
              onChange={(e) => updateField("data.header.logo", e.target.value)}
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
              value={editItem.data.header.title}
              onChange={(e) => updateField("data.header.title", e.target.value)}
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
              value={editItem.data.header.description}
              onChange={(e) =>
                updateField("data.header.description", e.target.value)
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

        {/* Details Sections */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <strong>
              Detail Sections ({editItem.data.details?.length || 0})
            </strong>
            <button
              className="btn btn-primary"
              onClick={addDetailSection}
              style={{ fontSize: "0.85rem", padding: "0.25rem 0.75rem" }}
            >
              + Add Section
            </button>
          </div>

          {editItem.data.details?.map((section, sIndex) => (
            <div
              key={sIndex}
              style={{
                marginBottom: "1.5rem",
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
                <strong>Section {sIndex + 1}</strong>
                <button
                  className="btn"
                  onClick={() => deleteDetailSection(sIndex)}
                  style={{
                    fontSize: "0.8rem",
                    padding: "0.25rem 0.5rem",
                    background: "#fee2e2",
                    color: "#dc2626",
                  }}
                >
                  Delete Section
                </button>
              </div>

              <div className="form-group" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Section Title</label>
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) =>
                    updateDetailSection(sIndex, "title", e.target.value)
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
                <label className="form-label">Icon</label>
                <input
                  type="text"
                  value={section.icon}
                  onChange={(e) =>
                    updateDetailSection(sIndex, "icon", e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                  }}
                />
              </div>

              {/* Items */}
              <div style={{ marginTop: "1rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <strong style={{ fontSize: "0.9rem" }}>
                    Items ({section.items?.length || 0})
                  </strong>
                  <button
                    className="btn btn-primary"
                    onClick={() => addDetailItem(sIndex)}
                    style={{ fontSize: "0.75rem", padding: "0.2rem 0.5rem" }}
                  >
                    + Add Item
                  </button>
                </div>

                {section.items?.map((item, iIndex) => (
                  <div
                    key={iIndex}
                    style={{
                      marginBottom: "0.75rem",
                      padding: "0.75rem",
                      background: "white",
                      borderRadius: 4,
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <strong style={{ fontSize: "0.85rem" }}>
                        Item {iIndex + 1}
                      </strong>
                      <button
                        className="btn"
                        onClick={() => deleteDetailItem(sIndex, iIndex)}
                        style={{
                          fontSize: "0.7rem",
                          padding: "0.15rem 0.4rem",
                          background: "#fee2e2",
                          color: "#dc2626",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                    <div
                      className="form-group"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      <label
                        className="form-label"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Label
                      </label>
                      <input
                        type="text"
                        value={item.label}
                        onChange={(e) =>
                          updateDetailItem(
                            sIndex,
                            iIndex,
                            "label",
                            e.target.value
                          )
                        }
                        style={{
                          width: "100%",
                          padding: "0.4rem",
                          borderRadius: 4,
                          border: "1px solid #ccc",
                          fontSize: "0.85rem",
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        style={{ fontSize: "0.85rem" }}
                      >
                        Value
                      </label>
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) =>
                          updateDetailItem(
                            sIndex,
                            iIndex,
                            "value",
                            e.target.value
                          )
                        }
                        style={{
                          width: "100%",
                          padding: "0.4rem",
                          borderRadius: 4,
                          border: "1px solid #ccc",
                          fontSize: "0.85rem",
                        }}
                      />
                    </div>
                  </div>
                ))}
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
        <h2>Profile of College</h2>
        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem({
                data: {
                  banner: { title: "", image: "" },
                  header: { logo: "", title: "", description: "" },
                  details: [],
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
                {item.data.header.title || "Profile of College"}
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

export default ProfileOfCollegeDataManager;
