import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";

const Blogs = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div className=" max-w-xl">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className=" max-w-xl">
          {blogs.map((b) => {
            return (
              <Link to={`/blog/${b.id}`} key={b.id}>
                <BlogCard
                  key={b.id}
                  authorName={"Jack"}
                  // authorName={b.author.name.toUpperCase()}
                  date={"3 Dec, 2023"}
                  title={b.title}
                  post={b.content}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Blogs;

{
  /* <BlogCard
  authorName={"Jack"}
  date={"3 Dec, 2023"}
  title={
    "How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"
  }
  post={
    "No need to create a fancy and modern website with hundreds of pages to make money online. - Making money online is the dream for man No need to create a fancy and modern website with hundreds of pages to make money online. - Making money online is the dream for man..."
  }
/>; */
}
