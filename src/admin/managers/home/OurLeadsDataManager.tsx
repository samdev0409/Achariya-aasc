import React, { useState, useEffect, useRef, useCallback } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import Heading from "@/components/reusable/Heading";
import ImageUploadManager from "../../components/ImageUploadManager";
import PreviewWrapper from "@/admin/PreviewWrapper";
import OurLeadership from "@/components/OurLeadership";
import {
  AlertCircle,
  X,
  Trash2,
  Plus,
  Save,
  AlertTriangle,
} from "lucide-react";
import ScrollDownToPreview from "../../components/ScrollDownToPreview";

interface Lead {
  _id?: string;
  name: string;
  role: string;
  img: string;
  path: string;
}

interface LeadsDoc {
  _id?: string;
  data: Lead[];
}

const ConfirmationPopup: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText: string;
  confirmStyle?: string;
  showCancel?: boolean;
}> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  confirmStyle = "bg-blue-600 hover:bg-blue-700",
  showCancel = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 bg-opacity-10 transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full transform transition-all animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{message}</p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={onConfirm}
              className={`flex-1 px-4 py-2.5 text-white rounded-lg transition-all font-medium shadow-sm hover:shadow-md ${confirmStyle}`}
            >
              {confirmText}
            </button>
            {showCancel && (
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-medium"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        <style>{`
          @keyframes scale-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scale-in {
            animation: scale-in 0.2s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

const OurLeadsDataManager: React.FC = () => {
  const [data, setData] = useState<LeadsDoc[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editItem, setEditItem] = useState<LeadsDoc | null>(null);
  const [originalItem, setOriginalItem] = useState<LeadsDoc | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [tempFiles, setTempFiles] = useState<string[]>([]);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [showCancelPopup, setShowCancelPopup] = useState(false);

  const isSavingRef = useRef(false);
  const sessionId = useRef(
    `admin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  );
  const collectionName = "home/ourleads";

  // Initialize session and fetch data
  useEffect(() => {
    sessionStorage.setItem("adminSessionId", sessionId.current);
    const stored = sessionStorage.getItem("tempFiles");
    if (stored) {
      setTempFiles(JSON.parse(stored));
    }
    fetchData();
  }, []);

  // Auto-load first item when data is fetched
  useEffect(() => {
    if (data.length > 0 && !editItem) {
      const firstItem = JSON.parse(JSON.stringify(data[0]));
      setEditItem(firstItem);
      setOriginalItem(JSON.parse(JSON.stringify(data[0])));
      setIsNew(false);
    }
  }, [data, editItem]);

  // Cleanup temp files on unmount
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (tempFiles.length > 0 && !isSavingRef.current) {
        const formData = new FormData();
        formData.append("files", JSON.stringify(tempFiles));
        formData.append("sessionId", sessionId.current);
        navigator.sendBeacon(
          `${import.meta.env.VITE_API_URL}/api/upload/remove-temp`,
          formData
        );
        sessionStorage.removeItem("tempFiles");
        sessionStorage.removeItem("adminSessionId");
      }
    };

    const cleanupOnRouteChange = async () => {
      if (tempFiles.length > 0 && !isSavingRef.current) {
        try {
          await axiosInstance.post("/upload/remove-temp", {
            files: tempFiles,
            sessionId: sessionId.current,
          });
          sessionStorage.removeItem("tempFiles");
        } catch (err) {
          console.error("Route change cleanup failed:", err);
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (tempFiles.length > 0 && !isSavingRef.current) {
        cleanupOnRouteChange();
      }
    };
  }, [tempFiles]);

  const addTempFile = useCallback((fileName: string) => {
    setTempFiles((prev) => {
      const updated = [...prev, fileName];
      sessionStorage.setItem("tempFiles", JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Fetch data from backend - EXACTLY LIKE ProfileOfCollegeDataManager
  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axiosInstance.get(`/${collectionName}`);
      setData(Array.isArray(res.data) ? res.data : [res.data]);
      console.log("Data loaded:", res.data);
    } catch (e: any) {
      setError("Failed to load data: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  // Change detection
  const hasChanges = useCallback(() => {
    if (!editItem || !originalItem) return false;
    return JSON.stringify(editItem) !== JSON.stringify(originalItem);
  }, [editItem, originalItem]);

  useEffect(() => {
    setHasUnsavedChanges(hasChanges());
  }, [editItem, hasChanges]);

  // Save handler - EXACTLY LIKE ProfileOfCollegeDataManager
  const handleSave = async () => {
    if (!editItem) return;

    setShowSavePopup(false);
    isSavingRef.current = true;
    setLoading(true);

    try {
      // Process temp files and update image URLs
      for (const fileName of tempFiles) {
        const res = await axiosInstance.post("/upload/save-temp-file", {
          fileName,
        });
        const finalUrl = res.data.url;

        // Update matching images in all leads
        editItem.data.forEach((lead) => {
          if (lead.img === fileName) {
            lead.img = finalUrl;
          }
        });
      }

      // Save to backend
      if (isNew) {
        await axiosInstance.post(`/${collectionName}`, editItem);
      } else if (editItem._id) {
        await axiosInstance.put(`/${collectionName}/${editItem._id}`, editItem);
      }

      // Clear temp files
      setTempFiles([]);
      sessionStorage.removeItem("tempFiles");

      // Update state
      setOriginalItem(JSON.parse(JSON.stringify(editItem)));
      fetchData();

      console.log("Saved successfully");
    } catch (err: any) {
      console.error("Save error:", err);
      setError("Error saving: " + (err.response?.data?.message || err.message));
    } finally {
      isSavingRef.current = false;
      setLoading(false);
    }
  };

  // Cancel handler
  const handleCancel = async () => {
    setShowCancelPopup(false);

    try {
      if (tempFiles.length > 0) {
        await axiosInstance.post("/upload/remove-temp", {
          files: tempFiles,
          sessionId: sessionId.current,
        });
      }

      setTempFiles([]);
      sessionStorage.removeItem("tempFiles");

      if (originalItem) {
        setEditItem(JSON.parse(JSON.stringify(originalItem)));
      }
    } catch (err: any) {
      console.error("Cancel cleanup failed:", err);
      if (originalItem) {
        setEditItem(JSON.parse(JSON.stringify(originalItem)));
      }
    }
  };

  // Update lead field
  const updateLead = useCallback(
    (index: number, field: keyof Lead, value: string) => {
      if (!editItem || !editItem.data[index]) return;

      const updated = JSON.parse(JSON.stringify(editItem));
      updated.data[index][field] = value;
      setEditItem(updated);
    },
    [editItem]
  );

  const addLead = useCallback(() => {
    if (!editItem) return;
    const updated = JSON.parse(JSON.stringify(editItem));
    updated.data.push({
      _id: undefined,
      name: "",
      role: "",
      img: "",
      path: "",
    });
    setEditItem(updated);
  }, [editItem]);

  const deleteLead = useCallback(
    (index: number) => {
      if (!editItem || editItem.data.length <= 1) return;
      const updated = JSON.parse(JSON.stringify(editItem));
      updated.data.splice(index, 1);
      setEditItem(updated);
    },
    [editItem]
  );

  const handleOverallSave = () => setShowSavePopup(true);
  const handleOverallCancel = () => setShowCancelPopup(true);

  if (loading && !editItem) {
    return (
      <div className="text-center py-12 text-gray-500">
        Loading leadership data...
      </div>
    );
  }

  return (
    <div className="collection-manager p-6 mx-auto">
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg border border-red-200 flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {hasUnsavedChanges && editItem && <ScrollDownToPreview />}

      {/* Form Section */}
      <div className="form-container border border-gray-300 rounded-xl p-8 bg-white mb-8 shadow-sm">
        <Heading
          title="Our Leadership"
          size="lg"
          align="left"
          className="mb-8"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {editItem?.data?.map((lead, index) => (
            <div
              key={lead._id || `lead-${index}`}
              className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  Leadership Member {index + 1}
                </h4>
                <button
                  onClick={() => deleteLead(index)}
                  disabled={editItem.data.length <= 1}
                  className="trash-btn"
                  aria-label="Delete leadership member"
                  title={
                    editItem.data.length <= 1
                      ? "Need at least one member"
                      : "Delete member"
                  }
                >
                  <Trash2 size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={lead.name || ""}
                    onChange={(e) => updateLead(index, "name", e.target.value)}
                    placeholder="Dr. R. Ushadevi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role/Position *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={lead.role || ""}
                    onChange={(e) => updateLead(index, "role", e.target.value)}
                    placeholder="Principal, Chief Mentor, etc."
                  />
                </div>

                {/* <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page Path/URL *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={lead.path || ""}
                    onChange={(e) => updateLead(index, "path", e.target.value)}
                    placeholder="/about/principal-desk"
                  />
                </div> */}

                <div className="lg:col-span-2">
                  <ImageUploadManager
                    label="Profile Image *"
                    value={lead.img || ""}
                    onChange={(v) => updateLead(index, "img", v)}
                    addTemp={addTempFile}
                  />
                </div>
              </div>
            </div>
          )) || (
            <div className="text-center py-12 text-gray-500">
              No leadership members. Add one to get started!
            </div>
          )}
        </div>

        <div className="space-x-4 pt-8 border-t border-gray-200 mt-8">
          <button
            onClick={handleOverallSave}
            className="blue-btn"
            disabled={loading || !hasUnsavedChanges}
          >
            {loading ? "Saving..." : "Save All Changes"}
          </button>

          <button
            onClick={handleOverallCancel}
            disabled={loading || !hasUnsavedChanges}
            className="ash-btn"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Preview Section */}
      {editItem && (
        <div className="border border-gray-300 rounded-2xl p-8 bg-white">
          <Heading
            title="Live Preview"
            size="lg"
            align="left"
            className="mb-6"
          />
          <PreviewWrapper
            Component={OurLeadership}
            previewData={{ leads: editItem.data }}
          />
        </div>
      )}

      {/* Confirmation Popups */}
      <ConfirmationPopup
        isOpen={showSavePopup}
        onClose={() => setShowSavePopup(false)}
        onConfirm={handleSave}
        title="Save Changes?"
        message="This will update the Our Leadership section permanently across the entire site."
        confirmText="Save All Changes"
        confirmStyle="bg-blue-600 hover:bg-blue-700"
        showCancel={true}
      />

      <ConfirmationPopup
        isOpen={showCancelPopup}
        onClose={() => setShowCancelPopup(false)}
        onConfirm={handleCancel}
        title="Discard Changes?"
        message="All unsaved changes will be lost. This cannot be undone."
        confirmText="Discard All Changes"
        confirmStyle="bg-red-600 hover:bg-red-700"
        showCancel={true}
      />
    </div>
  );
};

export default OurLeadsDataManager;
