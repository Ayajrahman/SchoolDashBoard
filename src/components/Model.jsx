
import React from "react";

const Modal = ({ isOpen, onClose, student }) => {
  if (!isOpen || !student) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">{student.name}</h2>
        <p>
          <strong>Subject:</strong> {student.subject}
        </p>
        <p>
          <strong>Grade:</strong> {student.grade}
        </p>
        <p>
          <strong>Score:</strong> {student.score}
        </p>
      </div>
    </div>
  );
};

export default Modal;
