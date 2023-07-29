import loadBlogData from "@/utils/loadBlogData";
import loadSingleBlogData from "@/utils/loadSingleBlogData";
// import { useRouter } from "next/navigation";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { title } = await loadSingleBlogData(params.id);

  return {
    title: title,
  };
};

export const generateStaticParams = async ({ params }) => {
  const blogs = await loadBlogData();
  return blogs.map(({ id }) => {
    id;
  });
};
const SingleBlog = async ({ params, searchParams }) => {
  // const [year, id] = params.segments || [];
  const { id, title, body } = await loadSingleBlogData(params.id);
  return (
    <div>
      {/* {year || new Date().getFullYear()} and {id}
      <br />
      {searchParams.title} */}
      <div key={id} className="border p-2 m-2">
        <h2>
          {id} {title}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
