interface BlogCardProps {
  authorName: string;
  title: string;
  post: string;
  date: string;
}

export const BlogCard = ({ authorName, title, post, date }: BlogCardProps) => {
  return (
    <div className="p-4 border-b border-slate-200 pb-6 w-screen max-w-screen-md cursor-pointer ">
      <div className="flex ">
        <Avtar name={authorName} size="small" />
        <div className="font-extralight pl-2 text-sm flex flex-col justify-center">
          {" "}
          {authorName}
        </div>
        <div className="pl-2 font-thin text-slate-500 text-sm flex flex-col justify-center">
          · {date}
        </div>
      </div>
      <div className="pt-2">
        <div className="text-xl font-semibold">{title}</div>
        <div className=" text-md font-thin">{post.slice(0, 150)}...</div>
      </div>
      <div className="pt-2">
        <div className="text-slate-400 text-sm font-thin">{`${Math.ceil(
          post.length / 100
        )} minute(s) read`}</div>
      </div>
    </div>
  );
};

export function Avtar({
  name,
  size,
}: {
  name: string;
  size?: "large" | "small";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6" : "w-8 h-8"
      } h-8 overflow-hidden bg-gray-600 rounded-full `}
    >
      <span className="font-medium text-gray-100 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
