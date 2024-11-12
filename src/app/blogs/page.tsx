"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";

const AllBlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   next: {
  //     revalidate: 30,
  //   },
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery(" ");
  console.log(blogs);
  return (
    <div className="w-[90%] mx-auto ">
      <h1 className="text-4xl text-center my-5 ">
        All blogs from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="italic text-center text-xl text-gray-400 w-2/4 mx-auto">
        Dive into the fascinating world of quantum computing, where unlocking
        unprecedented computational power.
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
