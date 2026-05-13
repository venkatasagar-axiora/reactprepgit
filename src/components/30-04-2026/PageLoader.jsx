import React from "react";

const PageLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-2xl bg-white px-8 py-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="h-5 w-5 animate-spin rounded-full border-4 border-black border-t-transparent"></div>

          <p className="text-lg font-medium">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;