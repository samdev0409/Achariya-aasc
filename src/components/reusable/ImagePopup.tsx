import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ImagePopup = ({
  images = [],
  selectedIndex,
  onClose,
  onNext,
  onPrev,
  zoom = 1,
}) => {
  const isOpen = selectedIndex !== null;
  const item = images[selectedIndex];

  // ESC + arrow keys
  useEffect(() => {
    const handle = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    if (isOpen) window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          key="popup-bg"
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}   // ← Smooth fade-out
        >
          {/* Close */}
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <X size={32} />
          </motion.button>

          {/* Prev */}
          <motion.button
            onClick={onPrev}
            className="absolute left-6 text-white hover:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ChevronLeft size={48} />
          </motion.button>

          {/* IMAGE + TITLE */}
          <motion.div
            className="flex flex-col items-center gap-4 text-center"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <motion.img
              key={item.image}
              src={item.image}
              alt={item.imgTitle}
              className="max-h-[80vh] max-w-[85vw] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: zoom, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />
            <motion.p
              className="text-white text-lg font-medium"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
            >
              {item.imgTitle}
            </motion.p>
          </motion.div>

          {/* Next */}
          <motion.button
            onClick={onNext}
            className="absolute right-6 text-white hover:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ChevronRight size={48} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePopup;
