import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

// -------------------------------------------------------
// Types
// -------------------------------------------------------
interface CarouselData {
  _id?: string;
  data: {
    images: string[];
  };
}

// -------------------------------------------------------
// Sanitizer (Prevents NULL / Undefined Crashes)
// -------------------------------------------------------
const sanitizeItem = (item: any): CarouselData => ({
  _id: item?._id,
  data: {
    images: Array.isArray(item?.data?.images)
      ? item.data.images
      : [],
  },
});

const EMPTY_DATA: CarouselData = {
  data: {
    images: [],
  },
};

// -------------------------------------------------------
// Component
// -------------------------------------------------------
const CarouselDataManager: React.FC = () => {
  const [data, setData] = useState<CarouselData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<CarouselData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "home__carouseldata";

  // -------------------------------------------------------
  // Fetch Data
  // -------------------------------------------------------
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

  // -------------------------------------------------------
  // Save
  // -------------------------------------------------------
  const handleSave = async () => {
    if (!editItem) return;

    try {
      if (isNew) {
        await axiosInstance.post(`/${collectionName}`, editItem);
      } else {
        await axiosInstance.put(`/${collectionName}/${editItem._id}`, editItem);
      }

      alert("Saved successfully!");
      setIsEditing(false);
      fetchData();
    } catch (err: any) {
      alert("Error saving: " + err.message);
    }
  };

  // -------------------------------------------------------
  // Delete
  // -------------------------------------------------------
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this carousel?")) return;

    try {
      await axiosInstance.delete(`/${collectionName}/${id}`);
      fetchData();
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  // -------------------------------------------------------
  // Image Operations
  // -------------------------------------------------------
  const addImage = () => {
    if (!editItem) return;

    setEditItem({
      ...editItem,
      data: {
        images: [...editItem.data.images, ""],
      },
    });
  };

  const updateImage = (index: number, value: string) => {
    if (!editItem) return;

    const newImages = [...editItem.data.images];
    newImages[index] = value;

    setEditItem({
      ...editItem,
      data: { images: newImages },
    });
  };

  const deleteImage = (index: number) => {
    if (!editItem) return;

    const newImages = editItem.data.images.filter((_, i) => i !== index);

    setEditItem({
      ...editItem,
      data: { images: newImages },
    });
  };

  // -------------------------------------------------------
  // Form UI
  // -------------------------------------------------------
  const renderForm = () => {
    if (!editItem) return null;

    const safe = sanitizeItem(editItem);

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New Carousel" : "Edit Carousel"}
        </h3>

        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <strong>Images ({safe.data.images.length})</strong>

            <button
              className="btn btn-primary"
              onClick={addImage}
              style={{ fontSize: "0.85rem", padding: "0.25rem 0.75rem" }}
            >
              + Add Image
            </button>
          </div>

          {safe.data.images.map((img, index) => (
            <div
              key={index}
              style={{
                marginBottom: "1rem",
                padding: "0.75rem",
                background: "#f9fafb",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                <label className="form-label">Image {index + 1}</label>
                <button
                  className="btn"
                  onClick={() => deleteImage(index)}
                  style={{
                    background: "#fee2e2",
                    color: "#dc2626",
                    fontSize: "0.8rem",
                  }}
                >
                  Delete
                </button>
              </div>

              <input
                type="text"
                value={img}
                onChange={(e) => updateImage(index, e.target.value)}
                placeholder="Enter image URL or filename"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: 4,
                  border: "1px solid #ccc",
                }}
              />
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "1rem",
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

  // -------------------------------------------------------
  // Main UI
  // -------------------------------------------------------
  if (loading) return <div>Loading…</div>;

  return (
    <div className="collection-manager">
      {/* HEADER */}
      <div
        className="admin-header"
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <h2>Carousel Data</h2>

        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem(EMPTY_DATA);
              setIsNew(true);
              setIsEditing(true);
            }}
          >
            + Add New Carousel
          </button>
        )}
      </div>

      {/* ERROR */}
      {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}

      {/* FORM OR LIST */}
      {isEditing ? (
        renderForm()
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((item) => {
            const safe = sanitizeItem(item);

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
                <div style={{ fontWeight: "bold", marginBottom: 6 }}>
                  Carousel
                </div>

                <div style={{ color: "#64748b", marginBottom: 4 }}>
                  Images: {safe.data.images.length}
                </div>

                <div style={{ color: "#64748b", fontSize: "0.85rem" }}>
                  ID: {item._id}
                </div>

                <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                  <button
                    className="btn"
                    onClick={() => {
                      setEditItem(sanitizeItem(item));
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

export default CarouselDataManager;
