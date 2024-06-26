export const BlogSkeleton = () => {
  return (
    <div className="p-4 border-b border-slate-200 pb-6 w-screen max-w-screen-md cursor-pointer ">
      <div className="flex ">
        <div className="h-6 w-6 bg-gray-200 rounded-full   "></div>

        <div className="flex flex-col justify-center">
          <div className="h-4 bg-gray-200 rounded-full  w-8  mx-2"></div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="h-4 bg-gray-200 rounded-full  w-16  "></div>
        </div>
      </div>
      <div className="pt-2">
        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2 "></div>
        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 max-w-sm"></div>
      </div>
      <div className="pt-2">
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2.5"></div>
      </div>
    </div>
  );
};

<div>
  <div role="status" className="max-w-sm animate-pulse">
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span className="sr-only">Loading...</span>
  </div>
</div>;
