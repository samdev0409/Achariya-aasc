// ✅ COMPLETE OurSchoolsCollegesDataManager.tsx (FIXED PREVIEW + FULL FUNCTIONALITY)
import React, { useEffect, useRef, useState, useCallback } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import Heading from "@/components/reusable/Heading";
import ImageUploadManager from "../../components/ImageUploadManager";
import PreviewWrapper from "@/admin/PreviewWrapper";
import AchariyaSchoolsAndColleges from "@/components/AchariyaSchoolsAndColleges";
import { Trash2, AlertCircle, X, Image as ImageIcon } from "lucide-react";

interface SchoolsCollegesDoc {
  _id: string;
  data: {
    title: string;
    logos: string[];
  };
}

interface ConfirmationPopupProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText: string;
  confirmStyle?: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  isOpen,
  title,
  message,
  confirmText,
  confirmStyle = "bg-blue-600 hover:bg-blue-700",
  onConfirm,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-all"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mt-1">
            <AlertCircle className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-gray-900 mb-2 truncate">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{message}</p>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={onConfirm}
            className={`flex-1 px-4 py-2.5 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all ${confirmStyle}`}
          >
            {confirmText}
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium shadow-sm hover:shadow-md transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const OurSchoolsCollegesDataManager: React.FC = () => {
  const [doc, setDoc] = useState<SchoolsCollegesDoc | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [tempFiles, setTempFiles] = useState<string[]>([]);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [pendingImage, setPendingImage] = useState("");
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [title, setTitle] = useState("Our Schools & Colleges");

  const sessionIdRef = useRef(
    `admin_${Date.now()}_${Math.random().toString(36).slice(2)}`
  );
  const collectionName = "home/ourschoolscollegesdata";

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axiosInstance.get(`/${collectionName}`);
      const dataItem = Array.isArray(res.data) ? res.data[0] : res.data;

      if (dataItem?._id && dataItem.data) {
        setDoc(dataItem as SchoolsCollegesDoc);
        setTitle(dataItem.data.title || "Our Schools & Colleges");
      } else {
        // Create default doc if none exists
        const defaultDoc = {
          _id: "default",
          data: { title: "Our Schools & Colleges", logos: [] },
        };
        setDoc(defaultDoc as SchoolsCollegesDoc);
        setTitle(defaultDoc.data.title);
      }
    } catch (e: any) {
      console.error("Fetch error:", e);
      setError(
        `Failed to load data: ${e.response?.data?.message || e.message}`
      );
    } finally {
      setLoading(false);
    }
  }, [collectionName]);

  useEffect(() => {
    sessionStorage.setItem("adminSessionId", sessionIdRef.current);
    fetchData();
  }, [fetchData]);

  const addTempFile = useCallback((file: string) => {
    setTempFiles((prev) => {
      const updated = [...prev, file];
      sessionStorage.setItem("tempFiles", JSON.stringify(updated));
      return updated;
    });
  }, []);

  const processTempFiles = useCallback(
    async (logos: string[]): Promise<string[]> => {
      const finalLogos = [...logos];
      const processedFiles: string[] = [];

      for (const fileName of tempFiles) {
        try {
          const res = await axiosInstance.post("/upload/save-temp-file", {
            fileName,
          });
          const finalUrl = res.data?.url;
          if (finalUrl) {
            const tempIndex = finalLogos.findIndex((img) => img === fileName);
            if (tempIndex !== -1) {
              finalLogos[tempIndex] = finalUrl;
            }
            processedFiles.push(fileName);
          }
        } catch (err) {
          console.error("Failed to process temp file:", fileName, err);
        }
      }

      const remainingTempFiles = tempFiles.filter(
        (f) => !processedFiles.includes(f)
      );
      setTempFiles(remainingTempFiles);
      if (remainingTempFiles.length === 0) {
        sessionStorage.removeItem("tempFiles");
      } else {
        sessionStorage.setItem("tempFiles", JSON.stringify(remainingTempFiles));
      }

      return finalLogos;
    },
    [tempFiles]
  );

  const saveDoc = useCallback(
    async (updatedData: any) => {
      if (!doc?._id) {
        setError("No document ID found");
        return;
      }

      try {
        await axiosInstance.put(`/${collectionName}/${doc._id}`, {
          data: updatedData,
        });
        setDoc({ ...doc, data: updatedData });
        setError("");
      } catch (err: any) {
        setError(`Save failed: ${err.response?.data?.message || err.message}`);
        throw err;
      }
    },
    [doc, collectionName]
  );

  const updateTitle = useCallback(
    async (newTitle: string) => {
      setTitle(newTitle);
      if (doc) {
        await saveDoc({ ...doc.data, title: newTitle });
      }
    },
    [doc, saveDoc]
  );

  const confirmAddImage = (img: string) => {
    setPendingImage(img);
    setShowAddPopup(true);
  };

  const handleAddConfirm = async () => {
    if (!doc || !pendingImage) return;

    setShowAddPopup(false);
    try {
      const logosWithNew = [...doc.data.logos, pendingImage];
      const finalLogos = await processTempFiles(logosWithNew);
      await saveDoc({ ...doc.data, logos: finalLogos });
      setPendingImage("");
    } catch (err) {
      setError("Failed to add image");
    }
  };

  const requestDelete = (index: number) => {
    setDeleteIndex(index);
    setShowDeletePopup(true);
  };

  const confirmDelete = async () => {
    if (!doc || deleteIndex === null) return;

    setShowDeletePopup(false);
    try {
      const logosWithoutDeleted = doc.data.logos.filter(
        (_, i) => i !== deleteIndex
      );
      await saveDoc({ ...doc.data, logos: logosWithoutDeleted });
      setDeleteIndex(null);
    } catch (err) {
      setError("Failed to delete image");
    }
  };

  if (loading) {
    return (
      <div className="p-6 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Schools & Colleges...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6  mx-auto">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl">
          <div className="flex items-center gap-2">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* EDITOR SECTION */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 shadow-sm">
        <Heading
          title="Schools & Colleges Management"
          size="lg"
          align="left"
          className="mb-8"
        />

        {/* <div className="mb-10 max-w-2xl">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Section Title
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={title}
            onChange={(e) => updateTitle(e.target.value)}
            placeholder="e.g., Our Partner Schools & Colleges"
          />
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {doc?.data.logos?.map((logo, idx) => (
            <div
              key={idx}
              className="relative mb-8 p-16 group border-2 border-gray-200 rounded-2xl p-4 bg-gray-50 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <button
                onClick={() => requestDelete(idx)}
                className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-2xl opacity-0 group-hover:opacity-100 hover:bg-red-600 shadow-xl transition-all z-10 border-2 border-white"
                title="Delete Logo"
              >
                <Trash2 size={16} />
              </button>
              <div className="h-32 w-full flex items-center justify-center">
                <ImageUploadManager
                  label="Replace Logo"
                  value={logo}
                  addTemp={addTempFile}
                  onChange={(img) => confirmAddImage(img)}
                />
              </div>
            </div>
          ))}

          <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 bg-gray-50 flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-all group cursor-pointer h-48 col-span-1">
            <ImageIcon className="w-16 h-16 text-gray-400 mb-4 group-hover:text-blue-500 transition-colors" />
            <ImageUploadManager
              label="Add New Logo"
              value=""
              addTemp={addTempFile}
              onChange={confirmAddImage}
            />
            <p className="text-sm text-gray-500 mt-3 text-center font-medium">
              Click to upload new school/college logo
            </p>
          </div>
        </div>

        {(!doc?.data.logos || doc.data.logos.length === 0) && (
          <div className="text-center py-16 mt-12 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50">
            <ImageIcon className="w-20 h-20 mx-auto mb-6 text-gray-400" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No logos yet
            </h3>
            <p className="text-gray-600 mb-6">
              Add your first school or college logo above
            </p>
          </div>
        )}
      </div>

      {/* FIXED PREVIEW SECTION */}
      <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
        <Heading title="Live Preview" size="lg" align="left" className="mb-8" />
        <div className="w-full max-w-6xl mx-auto border border-gray-100 rounded-xl overflow-hidden">
          {doc ? (
            <PreviewWrapper
              Component={AchariyaSchoolsAndColleges}
              previewData={{
                title,
                logos: doc.data.logos,
              }}
            />
          ) : (
            <div className="text-center py-20 text-gray-500 bg-gray-50 rounded-xl">
              <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">
                Preview will appear here once data is loaded
              </p>
            </div>
          )}
        </div>
      </div>

      {/* POPUPS */}
      <ConfirmationPopup
        isOpen={showAddPopup}
        title="Add New Logo?"
        message="This logo will be saved immediately to your Schools & Colleges section."
        confirmText="Add Logo"
        confirmStyle="bg-green-600 hover:bg-green-700"
        onConfirm={handleAddConfirm}
        onClose={() => {
          setShowAddPopup(false);
          setPendingImage("");
        }}
      />

      <ConfirmationPopup
        isOpen={showDeletePopup}
        title="Delete Logo?"
        message="This action cannot be undone and will permanently remove the logo from your collection."
        confirmText="Delete Logo"
        confirmStyle="bg-red-600 hover:bg-red-700"
        onConfirm={confirmDelete}
        onClose={() => {
          setShowDeletePopup(false);
          setDeleteIndex(null);
        }}
      />
    </div>
  );
};

export default OurSchoolsCollegesDataManager;
