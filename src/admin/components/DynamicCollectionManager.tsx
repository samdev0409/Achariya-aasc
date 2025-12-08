import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { COLLECTIONS } from "../constants";

// Fallback local imports
const dataFiles = import.meta.glob("../../data/**/*.{js,ts}", { eager: true });

// --------------------------------------
// Fields we must hide from UI completely
// --------------------------------------
const META_FIELDS = new Set([
  "_id",
  "_sourceFile",
  "exportName",
  "importedAt",
  "__origin_export",
  "__origin_file",
  "__v",
  "createdAt",
<<<<<<< HEAD
  "updatedAt",
=======
  "updatedAt"
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
]);

// Recursive helper to extract only editable fields from data
const extractEditableFields = (obj: any): any => {
  if (!obj || typeof obj !== "object") return obj;

  const result: any = {};
  for (const key in obj) {
    if (META_FIELDS.has(key)) continue; // Skip metadata

    const value = obj[key];

    // If nested object, extract recursively
    if (value && typeof value === "object" && !Array.isArray(value)) {
      result[key] = extractEditableFields(value);
    } else {
      result[key] = value;
    }
  }

  return result;
};

// Detect if item has flat structure (fields at root) or nested (fields in data)
const isNestedStructure = (item: any): boolean => {
  return item && typeof item.data === "object" && item.data !== null;
};

// Get editable data from item (handles both formats)
const getEditableData = (item: any): any => {
  if (isNestedStructure(item)) {
    return extractEditableFields(item.data || {});
  } else {
    return extractEditableFields(item);
  }
};

// --------------------------------------
// Modal Component
// --------------------------------------
const CenteredModal: React.FC<{
  open: boolean;
  title?: string;
  message: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ open, title, message, onConfirm, onCancel }) => {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
<<<<<<< HEAD
        justifyContent: "center",
=======
        justifyContent: "center"
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
      }}
    >
      <div
        onClick={onCancel}
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(6px)",
<<<<<<< HEAD
          background: "rgba(15,23,42,0.35)",
=======
          background: "rgba(15,23,42,0.35)"
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
        }}
      />

      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: "relative",
          background: "white",
          borderRadius: 12,
          padding: "1.25rem",
          width: "min(600px, 90%)",
          maxHeight: "80vh",
          overflow: "auto",
<<<<<<< HEAD
          boxShadow: "0 8px 30px rgba(2,6,23,0.2)",
=======
          boxShadow: "0 8px 30px rgba(2,6,23,0.2)"
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
        }}
      >
        {title && <h3 style={{ marginBottom: 8 }}>{title}</h3>}
        <div style={{ marginBottom: 16 }}>{message}</div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
<<<<<<< HEAD
          <button
            className="btn"
            onClick={onCancel}
            style={{ background: "#e6eef8" }}
          >
=======
          <button className="btn" onClick={onCancel} style={{ background: "#e6eef8" }}>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
            Cancel
          </button>
          <button
            className="btn btn-danger"
            onClick={onConfirm}
            style={{ background: "#ef4444", color: "white" }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

// --------------------------------------
// Main Component
// --------------------------------------
<<<<<<< HEAD
interface DynamicCollectionManagerProps {
  collectionId?: string;
}

const DynamicCollectionManager: React.FC<DynamicCollectionManagerProps> = ({
  collectionId: propCollectionId,
}) => {
  const { collectionId: paramCollectionId } = useParams<{
    collectionId: string;
  }>();
  const collectionId = propCollectionId || paramCollectionId;
=======
const DynamicCollectionManager: React.FC = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [isNew, setIsNew] = useState(false);
<<<<<<< HEAD
  const [itemStructure, setItemStructure] = useState<"flat" | "nested">(
    "nested"
  );
=======
  const [itemStructure, setItemStructure] = useState<"flat" | "nested">("nested");
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);

  // For array item editing
  const [arrayItemModal, setArrayItemModal] = useState<{
    open: boolean;
    path: string;
    index: number | null;
    item: any;
  }>({ open: false, path: "", index: null, item: null });

  const collectionLabel =
    COLLECTIONS.find((c) => c.id === collectionId)?.label || collectionId;

  // ---------------- FETCH DATA ----------------
  useEffect(() => {
    if (!collectionId) return;
    fetchData();
    return () => {
      setSelectedIds(new Set());
      setSelectAll(false);
    };
  }, [collectionId]);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    setData(null);
    setIsEditing(false);

    try {
      const res = await axiosInstance.get(`/${collectionId}`);
      setData(res.data);
<<<<<<< HEAD
      console.log(res)
=======
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    } catch (e) {
      console.warn("Backend failed. Trying fallback…");
      try {
        const fallback = loadFallbackData(collectionId!);
        if (fallback) {
          setData(fallback);
<<<<<<< HEAD
          setError(
            "Backend unavailable — showing local static data (read-only)."
          );
=======
          setError("Backend unavailable — showing local static data (read-only).");
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
          setIsReadOnly(true);
        }
      } catch {
        setError("Unable to load backend or fallback data.");
      }
    } finally {
      setLoading(false);
    }
  };

  const loadFallbackData = (col: string) => {
    for (const path in dataFiles) {
      const normalized = path
        .replace("../../data/", "")
        .replace(/\.(js|ts)$/, "")
        .split("/")
        .join("__")
        .toLowerCase();
      if (normalized === col) return dataFiles[path].default;
    }
    return null;
  };

  // ---------------- SAVE ----------------
  const handleSave = async () => {
    if (!editItem) return;

    const cleanData = getEditableData(editItem);

    try {
      if (isNew) {
<<<<<<< HEAD
        const payload =
          itemStructure === "nested" ? { data: cleanData } : cleanData;
=======
        const payload = itemStructure === "nested" 
          ? { data: cleanData }
          : cleanData;
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
        await axiosInstance.post(`/${collectionId}`, payload);
      } else {
        const payload = isNestedStructure(editItem)
          ? { data: cleanData }
          : cleanData;
        await axiosInstance.put(`/${collectionId}/${editItem._id}`, payload);
      }
      alert("Saved successfully.");
      setIsEditing(false);
      fetchData();
    } catch (err: any) {
      alert("Error saving: " + err.message);
    }
  };

  // ---------------- DELETE ----------------
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this item?")) return;
    await axiosInstance.delete(`/${collectionId}/${id}`);
    fetchData();
  };

  const handleDeleteSelected = async () => {
    const ids = Array.from(selectedIds);
<<<<<<< HEAD
    await Promise.all(
      ids.map((id) => axiosInstance.delete(`/${collectionId}/${id}`))
    );
=======
    await Promise.all(ids.map((id) => axiosInstance.delete(`/${collectionId}/${id}`)));
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    setSelectedIds(new Set());
    setShowDeleteModal(false);
    fetchData();
  };

  // ---------------- FIELD UPDATE HELPERS ----------------
  const getNestedValue = (obj: any, path: string) => {
    const parts = path.split(".");
    let current = obj;
    for (const part of parts) {
      if (current === undefined || current === null) return undefined;
      current = current[part];
    }
    return current;
  };

  const updateField = (path: string, newVal: any) => {
    const updated = { ...editItem };
    const parts = path.split(".");
<<<<<<< HEAD

=======
    
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    let cur = itemStructure === "nested" ? updated.data : updated;

    for (let i = 0; i < parts.length - 1; i++) {
      if (!cur[parts[i]]) cur[parts[i]] = {};
      cur = cur[parts[i]];
    }

    cur[parts[parts.length - 1]] = newVal;
    setEditItem(updated);
  };

  // ---------------- ARRAY OPERATIONS ----------------
  const addArrayItem = (path: string) => {
    const array = getNestedValue(
      itemStructure === "nested" ? editItem.data : editItem,
      path
    );
<<<<<<< HEAD

=======
    
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    if (!Array.isArray(array)) return;

    // Create empty object with same structure as first item
    const template = array.length > 0 ? array[0] : {};
    const newItem: any = {};
<<<<<<< HEAD

=======
    
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    for (const key in template) {
      if (typeof template[key] === "number") newItem[key] = 0;
      else if (typeof template[key] === "boolean") newItem[key] = false;
      else newItem[key] = "";
    }

    setArrayItemModal({
      open: true,
      path,
      index: null,
<<<<<<< HEAD
      item: newItem,
=======
      item: newItem
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    });
  };

  const editArrayItem = (path: string, index: number) => {
    const array = getNestedValue(
      itemStructure === "nested" ? editItem.data : editItem,
      path
    );
<<<<<<< HEAD

=======
    
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    if (!Array.isArray(array) || !array[index]) return;

    setArrayItemModal({
      open: true,
      path,
      index,
<<<<<<< HEAD
      item: { ...array[index] },
=======
      item: { ...array[index] }
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    });
  };

  const deleteArrayItem = (path: string, index: number) => {
    if (!window.confirm("Delete this item from the array?")) return;

    const array = getNestedValue(
      itemStructure === "nested" ? editItem.data : editItem,
      path
    );
<<<<<<< HEAD

=======
    
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    if (!Array.isArray(array)) return;

    const newArray = array.filter((_, i) => i !== index);
    updateField(path, newArray);
  };

  const saveArrayItem = () => {
    const { path, index, item } = arrayItemModal;
<<<<<<< HEAD

=======
    
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    const array = getNestedValue(
      itemStructure === "nested" ? editItem.data : editItem,
      path
    );
<<<<<<< HEAD

=======
    
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    if (!Array.isArray(array)) return;

    let newArray;
    if (index === null) {
      // Add new
      newArray = [...array, item];
    } else {
      // Update existing
      newArray = array.map((el, i) => (i === index ? item : el));
    }

    updateField(path, newArray);
    setArrayItemModal({ open: false, path: "", index: null, item: null });
  };

  const updateArrayItemField = (key: string, value: any) => {
<<<<<<< HEAD
    setArrayItemModal((prev) => ({
      ...prev,
      item: { ...prev.item, [key]: value },
=======
    setArrayItemModal(prev => ({
      ...prev,
      item: { ...prev.item, [key]: value }
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
    }));
  };

  // ---------------- FORM RENDERER ----------------
  const renderArrayItemForm = () => {
    const { item } = arrayItemModal;
    if (!item) return null;

    return Object.keys(item).map((key) => {
      const value = item[key];
      const label = key
        .replace(/[_-]/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/\b\w/g, (l) => l.toUpperCase());

      // Handle arrays and objects with JSON editor
      if (Array.isArray(value) || (value && typeof value === "object")) {
        return (
<<<<<<< HEAD
          <div
            key={key}
            className="form-group"
            style={{ marginBottom: "1rem" }}
          >
            <label
              className="form-label"
              style={{ display: "block", marginBottom: "0.25rem" }}
            >
=======
          <div key={key} className="form-group" style={{ marginBottom: "1rem" }}>
            <label className="form-label" style={{ display: "block", marginBottom: "0.25rem" }}>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
              {label}
            </label>
            <textarea
              className="form-input"
              rows={6}
<<<<<<< HEAD
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: 4,
                border: "1px solid #ccc",
                fontFamily: "monospace",
                fontSize: "0.85rem",
=======
              style={{ 
                width: "100%", 
                padding: "0.5rem", 
                borderRadius: 4, 
                border: "1px solid #ccc",
                fontFamily: "monospace",
                fontSize: "0.85rem"
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
              }}
              value={JSON.stringify(value, null, 2)}
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  updateArrayItemField(key, parsed);
                } catch {
                  // Invalid JSON, show error or don't update
                }
              }}
            />
            <small style={{ color: "#64748b", fontSize: "0.8rem" }}>
              Edit as JSON. Must be valid JSON format.
            </small>
          </div>
        );
      }

      // Handle primitives
      return (
        <div key={key} className="form-group" style={{ marginBottom: "1rem" }}>
<<<<<<< HEAD
          <label
            className="form-label"
            style={{ display: "block", marginBottom: "0.25rem" }}
          >
=======
          <label className="form-label" style={{ display: "block", marginBottom: "0.25rem" }}>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
            {label}
          </label>
          <input
            type="text"
            className="form-input"
<<<<<<< HEAD
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
=======
            style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }}
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
            value={value ?? ""}
            onChange={(e) => updateArrayItemField(key, e.target.value)}
          />
        </div>
      );
    });
  };

  const renderArrayField = (array: any[], path: string, label: string) => {
    return (
      <div style={{ marginBottom: "1.5rem" }}>
<<<<<<< HEAD
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.5rem",
          }}
        >
          <strong>
            {label} ({array.length})
          </strong>
=======
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
          <strong>{label} ({array.length})</strong>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
          <button
            className="btn btn-primary"
            style={{ fontSize: "0.85rem", padding: "0.25rem 0.75rem" }}
            onClick={() => addArrayItem(path)}
          >
            + Add {label.slice(0, -1)}
          </button>
        </div>

<<<<<<< HEAD
        <div
          style={{
            border: "1px solid #e2e8f0",
            borderRadius: 6,
            padding: "0.75rem",
            background: "#f9fafb",
          }}
        >
          {array.length === 0 ? (
            <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
              No items yet
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {array.map((item, index) => {
                const displayText =
                  item.name ||
                  item.title ||
=======
        <div style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: "0.75rem", background: "#f9fafb" }}>
          {array.length === 0 ? (
            <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>No items yet</div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {array.map((item, index) => {
                const displayText = 
                  item.name || 
                  item.title || 
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                  item.text?.substring(0, 50) ||
                  `Item ${index + 1}`;

                return (
                  <div
                    key={index}
                    style={{
                      background: "white",
                      padding: "0.75rem",
                      borderRadius: 4,
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      justifyContent: "space-between",
<<<<<<< HEAD
                      alignItems: "center",
=======
                      alignItems: "center"
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                    }}
                  >
                    <div style={{ flex: 1, fontSize: "0.9rem" }}>
                      {displayText}
                      {displayText.length > 50 && "..."}
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <button
                        className="btn"
<<<<<<< HEAD
                        style={{
                          fontSize: "0.8rem",
                          padding: "0.25rem 0.5rem",
                        }}
=======
                        style={{ fontSize: "0.8rem", padding: "0.25rem 0.5rem" }}
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                        onClick={() => editArrayItem(path, index)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn"
<<<<<<< HEAD
                        style={{
                          fontSize: "0.8rem",
                          padding: "0.25rem 0.5rem",
                          background: "#fee2e2",
                          color: "#dc2626",
                        }}
=======
                        style={{ fontSize: "0.8rem", padding: "0.25rem 0.5rem", background: "#fee2e2", color: "#dc2626" }}
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                        onClick={() => deleteArrayItem(path, index)}
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
      </div>
    );
  };

  const renderEditableFields = (obj: any, path = "") => {
    return Object.keys(obj).map((key) => {
      const fullPath = path ? `${path}.${key}` : key;
      const value = obj[key];

      const label = key
        .replace(/[_-]/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/\b\w/g, (l) => l.toUpperCase());

      // Handle arrays
      if (Array.isArray(value)) {
        // Check if array contains objects
<<<<<<< HEAD
        if (
          value.length > 0 &&
          typeof value[0] === "object" &&
          value[0] !== null
        ) {
          return (
            <div key={fullPath}>{renderArrayField(value, fullPath, label)}</div>
=======
        if (value.length > 0 && typeof value[0] === "object" && value[0] !== null) {
          return (
            <div key={fullPath}>
              {renderArrayField(value, fullPath, label)}
            </div>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
          );
        } else {
          // Simple array (strings, numbers)
          return (
            <div key={fullPath} style={{ marginBottom: "1rem" }}>
              <label className="form-label">{label}</label>
              <textarea
                className="form-input"
                rows={4}
                style={{ width: "100%", fontFamily: "monospace" }}
                value={JSON.stringify(value, null, 2)}
                onChange={(e) => {
                  try {
                    const parsed = JSON.parse(e.target.value);
                    updateField(fullPath, parsed);
                  } catch {
                    // Invalid JSON, don't update
                  }
                }}
              />
            </div>
          );
        }
      }

      // Handle nested objects
      if (value && typeof value === "object" && !Array.isArray(value)) {
        return (
          <div key={fullPath} style={{ marginBottom: "1rem" }}>
<<<<<<< HEAD
            <strong style={{ display: "block", marginBottom: "0.5rem" }}>
              {label}
            </strong>
            <div
              style={{ paddingLeft: "1rem", borderLeft: "2px solid #e2e8f0" }}
            >
=======
            <strong style={{ display: "block", marginBottom: "0.5rem" }}>{label}</strong>
            <div style={{ paddingLeft: "1rem", borderLeft: "2px solid #e2e8f0" }}>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
              {renderEditableFields(value, fullPath)}
            </div>
          </div>
        );
      }

      // Handle primitives
      return (
<<<<<<< HEAD
        <div
          key={fullPath}
          className="form-group"
          style={{ marginBottom: "1rem" }}
        >
          <label
            className="form-label"
            style={{ display: "block", marginBottom: "0.25rem" }}
          >
=======
        <div key={fullPath} className="form-group" style={{ marginBottom: "1rem" }}>
          <label className="form-label" style={{ display: "block", marginBottom: "0.25rem" }}>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
            {label}
          </label>
          <input
            type="text"
            className="form-input"
<<<<<<< HEAD
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
=======
            style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }}
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
            value={value ?? ""}
            onChange={(e) => updateField(fullPath, e.target.value)}
          />
        </div>
      );
    });
  };

  const renderForm = () => {
    if (!editItem) return null;

    const editable = getEditableData(editItem);

    return (
      <div className="form-container" style={{ maxWidth: 800 }}>
<<<<<<< HEAD
        <h3 style={{ marginBottom: "1.5rem" }}>
          {isNew ? "Create New" : "Edit Item"}
        </h3>

        {renderEditableFields(editable)}

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
=======
        <h3 style={{ marginBottom: "1.5rem" }}>{isNew ? "Create New" : "Edit Item"}</h3>

        {renderEditableFields(editable)}

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", paddingTop: "1rem", borderTop: "1px solid #e2e8f0" }}>
          <button className="btn btn-primary" onClick={handleSave}>
            Save Changes
          </button>
          <button 
            className="btn" 
            style={{ background: "#ccc" }} 
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  // --------------------------------------
  // RENDER SECTION
  // --------------------------------------
  if (loading) return <div>Loading…</div>;

  return (
    <div className="collection-manager">
<<<<<<< HEAD
      <div
        className="admin-header"
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
=======
      <div className="admin-header" style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
        <h2>{collectionLabel}</h2>

        {Array.isArray(data) && !isEditing && (
          <>
            <button
              className="btn btn-primary"
              style={{ marginLeft: 12 }}
              onClick={() => {
<<<<<<< HEAD
                const structure =
                  data.length > 0 && isNestedStructure(data[0])
                    ? "nested"
                    : "flat";
                setItemStructure(structure);

                const newItem = structure === "nested" ? { data: {} } : {};

=======
                const structure = data.length > 0 && isNestedStructure(data[0]) 
                  ? "nested" 
                  : "flat";
                setItemStructure(structure);
                
                const newItem = structure === "nested" 
                  ? { data: {} }
                  : {};
                
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                setEditItem(newItem);
                setIsNew(true);
                setIsEditing(true);
              }}
            >
              + Add New
            </button>

            <button
              className="btn"
              disabled={!selectedIds.size || isReadOnly}
              onClick={() => setShowDeleteModal(true)}
              style={{ marginLeft: 8 }}
            >
              Delete Selected ({selectedIds.size})
            </button>

            <label style={{ marginLeft: 8 }}>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={() => {
                  if (selectAll) {
                    setSelectedIds(new Set());
                    setSelectAll(false);
                  } else {
                    const ids = new Set(data.map((d: any) => d._id));
                    setSelectedIds(ids);
                    setSelectAll(true);
                  }
                }}
              />
              Select All
            </label>
          </>
        )}
      </div>

      {error && <div style={{ marginTop: 8, color: "red" }}>{error}</div>}

      {isEditing ? (
        renderForm()
      ) : Array.isArray(data) ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map((item: any) => {
            const displayData = isNestedStructure(item) ? item.data : item;
            const displayTitle =
              displayData?.title ||
              displayData?.name ||
              displayData?.heading ||
              "Item";

            return (
              <div
                key={item._id}
                style={{
                  padding: "1rem",
                  border: "1px solid #e2e8f0",
                  borderRadius: 6,
                  background: "white",
<<<<<<< HEAD
                  position: "relative",
=======
                  position: "relative"
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                }}
              >
                <input
                  type="checkbox"
                  disabled={isReadOnly}
                  checked={selectedIds.has(item._id)}
                  onChange={() => {
                    const next = new Set(selectedIds);
<<<<<<< HEAD
                    next.has(item._id)
                      ? next.delete(item._id)
                      : next.add(item._id);
=======
                    next.has(item._id) ? next.delete(item._id) : next.add(item._id);
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                    setSelectedIds(next);
                  }}
                  style={{ position: "absolute", top: 8, right: 8 }}
                />

<<<<<<< HEAD
                <div style={{ fontWeight: "bold", marginBottom: 8 }}>
                  {displayTitle}
                </div>
=======
                <div style={{ fontWeight: "bold", marginBottom: 8 }}>{displayTitle}</div>
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                <div style={{ color: "#64748b", fontSize: "0.85rem" }}>
                  ID: {item._id}
                </div>

                <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                  <button
                    className="btn"
                    onClick={() => {
<<<<<<< HEAD
                      setItemStructure(
                        isNestedStructure(item) ? "nested" : "flat"
                      );
=======
                      setItemStructure(isNestedStructure(item) ? "nested" : "flat");
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
                      setEditItem(item);
                      setIsNew(false);
                      setIsEditing(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn"
                    disabled={isReadOnly}
                    style={{ background: "#fee2e2", color: "#dc2626" }}
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No data found</div>
      )}

      {/* Delete Confirmation Modal */}
      <CenteredModal
        open={showDeleteModal}
        title={`Delete ${selectedIds.size} items?`}
        message="This action cannot be undone."
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={() => !isReadOnly && handleDeleteSelected()}
      />

      {/* Array Item Edit Modal */}
      <CenteredModal
        open={arrayItemModal.open}
        title={arrayItemModal.index === null ? "Add New Item" : "Edit Item"}
        message={renderArrayItemForm()}
<<<<<<< HEAD
        onCancel={() =>
          setArrayItemModal({ open: false, path: "", index: null, item: null })
        }
=======
        onCancel={() => setArrayItemModal({ open: false, path: "", index: null, item: null })}
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
        onConfirm={saveArrayItem}
      />
    </div>
  );
};

<<<<<<< HEAD
export default DynamicCollectionManager;
=======
export default DynamicCollectionManager;
>>>>>>> 1b17a56e442edb060756e636a4b6ea5a773a68bb
