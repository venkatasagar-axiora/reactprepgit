// DashboardModal.jsx
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById("portal-root")
  );
};

const DashboardModal = ({ open, onClose, title, children }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-semibold">{title}</h2>

            <button
              onClick={onClose}
              className="rounded-lg px-3 py-1 text-gray-500 hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="max-h-[70vh] overflow-y-auto p-6">
            {children}
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default DashboardModal;