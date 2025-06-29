import React from "react";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-8 w-full h-full min-h-screen">
      <div className="flex space-x-2 mb-1">
        <div
          className={"w-3 h-3 bg-blue-500 rounded-full animate-bounce"}
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className={"w-3 h-3 bg-blue-500 rounded-full animate-bounce"}
          style={{ animationDelay: "150ms" }}
        ></div>
        <div
          className={"w-3 h-3 bg-blue-500 rounded-full animate-bounce"}
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>
      <p className="text-base font-medium text-gray-600">Loading...</p>
    </div>
  );
}

export default Loader;
