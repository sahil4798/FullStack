import { Link } from "react-router-dom";
import { Avtar } from "./BlogCard";

export const AppBar = () => {
  return (
    <div className="flex justify-between px-10 py-4  border-b">
      <div className="flex flex-col justify-center cursor-pointer">
        <Link to={"/blogs"}>Medium</Link>
      </div>

      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-400 hover:bg-green-600 focus:ring-2 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-6"
          >
            New
          </button>
        </Link>
        <Avtar name={"Jack"} size={"large"} />
      </div>
    </div>
  );
};
