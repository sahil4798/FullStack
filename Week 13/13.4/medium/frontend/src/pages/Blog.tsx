import { AppBar } from "../components/AppBar";
import { SingleBlog } from "../components/SingleBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const { blog, loading } = useBlog({ id: id || "" });

  // if (loading) {
  return (
    <div>
      <AppBar />
      <div className=" flex  justify-center   h-screen">
        <div className=" flex flex-col justify-center">
          <Spinner />
        </div>
      </div>
    </div>
  );
  // }
  return (
    <div>
      <SingleBlog
        title={blog?.title}
        content={blog?.content}
        author={blog?.author.name}
        date={"August 24, 2023"}
      />
    </div>
  );
};

export default Blog;
