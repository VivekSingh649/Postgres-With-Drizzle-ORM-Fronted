import { useEffect, useRef } from "react";

const DeleteUserModal = ({ isOpen, onClose, onConfirm, userName }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setTimeout(() => {
        contentRef.current.classList.remove("scale-95", "opacity-0");
        contentRef.current.classList.add("scale-100", "opacity-100");
      }, 10);
    }
  }, [isOpen]);

  const handleClose = () => {
    if (contentRef.current) {
      contentRef.current.classList.remove("scale-100", "opacity-100");
      contentRef.current.classList.add("scale-95", "opacity-0");

      setTimeout(() => {
        onClose();
      }, 300);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-dark-200/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      <div
        ref={contentRef}
        className="glass-dark relative rounded-2xl w-full max-w-md p-6 shadow-glass-lg border border-white/10 z-10 transform transition-all scale-95 opacity-0"
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-danger-500/20 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-exclamation-triangle text-2xl text-danger-500"></i>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Delete User</h3>
          <p className="text-slate-300">
            Are you sure you want to delete {userName || "this user"}? This
            action cannot be undone.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition-all text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-3 rounded-xl bg-danger-500 text-white hover:bg-danger-600 transition-all text-sm font-medium"
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
