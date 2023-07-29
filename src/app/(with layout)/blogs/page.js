// "use client";
// import { useRouter } from "next/navigation";
import loadBlogData from "@/utils/loadBlogData";
import Link from "next/link";
import React from "react";
// const blogs = [
//   { id: 1, title: "MongoDB", year: 2023 },
//   { id: 2, title: "Node", year: 2022 },
//   { id: 3, title: "Redux", year: 2023 },
//   { id: 4, title: "Next", year: 2023 },
// ];
const BlogPage = async () => {
  //   const router = useRouter();
  const blogs = await loadBlogData();
  return (
    <div className="flex flex-col justify-center gap-x-4 my-2">
      {blogs.map(({ id, title, body }) => (
        <div key={id} className="border p-2 m-2">
          <h2>
            {id} {title}
          </h2>
          <p>{body}</p>
          <Link
            className="block p-2 bg-sky-300 my-2 w-[100px] text-center"
            href={`blogs/${id}`}

            //   onClick={() => router.push(`blogs/${year}/${id}?title=${title}`)}
          >
            Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
