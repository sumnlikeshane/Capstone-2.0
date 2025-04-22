import React from "react";

const LoadingSkeleton = () => {
  const skeletons = Array(20).fill(0);

  return (
    <div className="min-h-screen px-6 py-8 text-white">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skeletons.map((_, index) => (
          <div 
            key={index}
            className={`bg-zinc-200 dark:bg-gray-900 rounded-lg overflow-hidden animate-pulse
                ${index >= 10 && "hidden sm:block"} 
                ${index >= 15 && "hidden md:block"}
               `}
          >
            <div className="w-full h-48 bg-gray-300 dark:bg-gray-800 " ></div>
            
            <div className="p-4">
              <div className="h-6 bg-gray-300 dark:bg-gray-800 rounded mb-2"></div>
              
              <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded mb-2 w-3/4"></div>
              
              <div className="flex items-center justify-between">
                <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded w-1/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;