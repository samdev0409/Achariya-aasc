import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

interface TestimonialsData {
  _id?: string;
  data: {
    title: string;
    videos: string[];
  };
}

// -------------------------------
// UNIVERSAL SANITIZER
// -------------------------------
const sanitizeItem = (item: any): TestimonialsData => ({
  _id: item?._id || "",
  data: {
    title: item?.data?.title || "",
    videos: Array.isArray(item?.data?.videos) ? item.data.videos : [],
  },
});

// Default safe structure
const EMPTY_ITEM: TestimonialsData = {
  data: {
    title: "Testimonials",
    videos: [],
  },
};

const TestimonialsDataManager: React.FC = () => {
  const [data, setData] = useState<TestimonialsData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<TestimonialsData | null>(null);
  const [isNew, setIsNew] = useState(false);

  const collectionName = "home__testimonialdata";

  // -------------------------------
  // FETCH WITH SANITIZATION
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
  // SAVE HANDLER
  // -------------------------------
  const handleSave = async () => {
    if (!editItem) return;

    const safe = sanitizeItem(editItem);

    try {
      if (isNew) {
        await axiosInstance.post(`/${collectionName}`, safe);
      } else {
        await axiosInstance.put(`/${collectionName}/${safe._id}`, safe);
      }

      alert("Saved successfully");
      setIsEditing(false);
      fetchData();
    } catch (err: any) {
      alert("Error saving: " + err.message);
    }
  };

  // -------------------------------
  // DELETE HANDLER
  // -------------------------------
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this testimonials block?")) return;

    try {
      await axiosInstance.delete(`/${collectionName}/${id}`);
      fetchData();
    } catch (err: any) {
      alert("Error deleting: " + err.message);
    }
  };

  // -------------------------------
  // UPDATE FIELD
  // -------------------------------
  const updateField = (path: string, value: any) => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    const parts = path.split(".");
    let current: any = updated;

    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) current[parts[i]] = {};
      current = current[parts[i]];
    }

    current[parts[parts.length - 1]] = value;

    setEditItem(updated);
  };

  // -------------------------------
  // VIDEO ARRAY HELPERS
  // -------------------------------
  const addVideo = () => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    updated.data.videos.push("");

    setEditItem(updated);
  };

  const updateVideo = (index: number, value: string) => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    updated.data.videos[index] = value;

    setEditItem(updated);
  };

  const deleteVideo = (index: number) => {
    if (!editItem) return;

    const updated = sanitizeItem(editItem);
    updated.data.videos = updated.data.videos.filter((_, i) => i !== index);

    setEditItem(updated);
  };

  // -------------------------------
  // FORM RENDER
  // -------------------------------
  const renderForm = () => {
    if (!editItem) return null;

    const safe = sanitizeItem(editItem);

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create Testimonials Section" : "Edit Testimonials"}
        </h3>

        {/* Title */}
        <div className="form-group" style={{ marginBottom: "1.5rem" }}>
          <label className="form-label">Title</label>
          <input
            type="text"
            value={safe.data.title}
            onChange={(e) => updateField("data.title", e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Videos */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <strong>Videos ({safe.data.videos.length})</strong>
            <button className="btn btn-primary" onClick={addVideo}>
              + Add Video
            </button>
          </div>

          {safe.data.videos.map((video, index) => (
            <div
              key={index}
              style={{
                padding: "0.75rem",
                marginBottom: "1rem",
                background: "#f9fafb",
                borderRadius: 4,
                border: "1px solid #e2e8f0",
              }}
            >
              <label>Video URL {index + 1}</label>
              <button
                className="btn"
                style={{ background: "#fee2e2", color: "#dc2626" }}
                onClick={() => deleteVideo(index)}
              >
                Delete
              </button>

              <input
                type="text"
                value={video}
                onChange={(e) => updateVideo(index, e.target.value)}
                placeholder="Enter YouTube / Vimeo URL"
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

        <button className="btn btn-primary" onClick={handleSave}>
          Save Changes
        </button>

        <button
          className="btn"
          style={{ background: "#ccc", marginLeft: 10 }}
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    );
  };

  // -------------------------------
  // MAIN RENDER
  // -------------------------------
  if (loading) return <div>Loading…</div>;

  return (
    <div className="collection-manager">
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <h2>Testimonials</h2>

        {!isEditing && (
          <button
            className="btn btn-primary"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setEditItem(EMPTY_ITEM);
              setIsNew(true);
              setIsEditing(true);
            }}
          >
            + Add New
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
                  border: "1px solid #e2e8f0",
                  borderRadius: 6,
                  background: "white",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: 8 }}>
                  {item.data.title || "Untitled"}
                </div>

                <div>Videos: {item.data.videos.length}</div>
                <div>ID: {item._id}</div>

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

export default TestimonialsDataManager;
