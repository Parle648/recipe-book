import type { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFoundPage;
