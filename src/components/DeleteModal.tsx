type DeleteModalProps = {
  studentName: string;
  onCancel: () => void;
  onConfirm: () => void;
};

function DeleteModal({ studentName, onCancel, onConfirm }: DeleteModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Delete Student</h2>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete {studentName}?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;