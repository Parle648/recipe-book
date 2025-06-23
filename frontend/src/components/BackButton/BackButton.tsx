import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 transition"
    >
      ← Back
    </button>
  );
};

export default BackButton;
