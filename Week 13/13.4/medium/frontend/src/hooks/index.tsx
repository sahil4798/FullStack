import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

export function useBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BACKEND_URL}api/v1/blog/bulk`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBlogs(res.data.blogs);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return { loading, blogs };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BACKEND_URL}api/v1/blog/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBlog(res.data.blog);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return { loading, blog };
};
